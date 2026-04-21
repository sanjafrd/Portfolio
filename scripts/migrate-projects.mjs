#!/usr/bin/env node
// One-shot migration: legacy src.legacy/data/projects.ts + src.legacy/components/*Sections.tsx
// → src/content/projects/*.mdx with YAML frontmatter matching content.config.ts schema.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const LEGACY_PROJECTS = path.join(ROOT, 'src.legacy/data/projects.ts');
const LEGACY_COMPONENTS = path.join(ROOT, 'src.legacy/components');
const OUT_DIR = path.join(ROOT, 'src/content/projects');

const PROJECT_META = {
  7: { slug: 'angele-pardon', cover: 'angele-pardon.png', sections: 'AngelePardonSections.tsx' },
  8: { slug: 'pantoufle', cover: 'pantoufle.png', sections: 'PantoufleSections.tsx' },
  9: { slug: 'miels', cover: 'miels.png', sections: 'MielsSections.tsx' },
  10: { slug: 'mauvais-eleves', cover: 'mauvais-eleves.png', sections: 'MauvaisElevesSections.tsx' },
  11: { slug: 'lgm', cover: 'lgm.png', sections: 'LGMSections.tsx' },
  12: { slug: 'lilo-stitch', cover: 'lilo-stitch.png', sections: 'LiloStitchSections.tsx' },
  13: { slug: 'clementine', cover: 'clementine.png', sections: 'ClementineSections.tsx' },
  14: { slug: 'aristochats', cover: 'aristochats.png', sections: 'AristochatsSections.tsx' },
  15: { slug: 'nalu', cover: 'nalu.png', sections: 'NaluSections.tsx' },
  16: { slug: 'air-austral', cover: 'air-austral.png', sections: 'AirAustralSections.tsx' },
  17: { slug: 'edn', cover: 'edn.png', sections: 'EDNSections.tsx' },
  18: { slug: 'benetton', cover: 'benetton.png', sections: 'BenettonSections.tsx' },
  19: { slug: 'storyboard', cover: 'storyboard.png', sections: 'StoryboardSections.tsx' },
  20: { slug: 'securite-patient', cover: 'securite-patient.png', sections: 'SecuritePatientSections.tsx' },
  21: { slug: 'bientraitance', cover: 'bientraitance.png', sections: 'BientraitanceSections.tsx' },
  22: { slug: 'brochure', cover: 'brochure.png', sections: 'BrochureSections.tsx' },
  23: { slug: 'hygiene', cover: 'hygiene.png', sections: 'HygieneSections.tsx' },
  24: { slug: 'taxe-apprentissage', cover: 'taxe-apprentissage.png', sections: 'TaxeApprentissageSections.tsx' },
  25: { slug: 'vaccination', cover: 'vaccination.png', sections: 'VaccinationSections.tsx' },
  26: { slug: 'oralite', cover: 'oralite.png', sections: 'OraliteSections.tsx' },
  27: { slug: 'poste-reseaux', cover: 'poste-reseaux.png', sections: 'PosteReseauxSections.tsx' },
  29: { slug: 'cem', cover: 'cem.png', sections: 'CEMSections.tsx' },
  30: { slug: 'kakemono', cover: 'kakemono.png', sections: 'KakemonoSections.tsx' },
  31: { slug: 'manuel-visibilite', cover: 'manuel-visibilite.png', sections: 'ManuelVisibiliteSections.tsx' },
};

const BANNER_PROJECTS = {
  7: { objectPosition: 'object-cover' },
  8: { objectPosition: 'object-cover object-top' },
  9: { objectPosition: 'object-cover object-top' },
  10: { objectPosition: 'object-cover object-top' },
  11: { objectPosition: 'object-cover object-center' },
  12: { objectPosition: 'object-cover object-top' },
  13: { objectPosition: 'object-cover object-top' },
  14: { objectPosition: 'object-cover object-top' },
  15: { objectPosition: 'object-cover object-top' },
  16: { objectPosition: 'object-cover object-top' },
  17: { objectPosition: 'object-cover object-top' },
  18: { objectPosition: 'object-cover object-top' },
  19: { objectPosition: 'object-cover object-top' },
  30: { objectPosition: 'object-cover' },
};

const GALLERY_PROJECTS = {
  7: { source: 'carousel', skipFirst: true, imageAspect: 'square', showVideo: true },
  8: { source: 'detail', gridCols: 'grid-cols-1 md:grid-cols-2', imageAspect: 'auto', showVideo: true },
  9: { source: 'carousel', imageAspect: 'square', showVideo: true },
  10: { source: 'detail', imageAspect: 'auto', itemBg: 'bg-white', showVideoUrls: true },
  11: { source: 'carousel', skipFirst: true, imageAspect: 'square', showVideo: true },
  12: { source: 'detail', imageAspect: 'auto', itemBg: 'bg-white' },
  13: { source: 'carousel', skipFirst: true, imageAspect: 'square' },
  14: { source: 'detail', imageAspect: 'square' },
  15: { source: 'detail', gridCols: 'grid-cols-1 md:grid-cols-2', imageAspect: 'auto' },
  16: { source: 'detail', gridCols: 'grid-cols-1 md:grid-cols-2', imageAspect: 'auto' },
  17: { source: 'carousel', skipFirst: true, imageAspect: 'square', showVideo: true },
  18: { source: 'carousel', skipFirst: true, imageAspect: 'square', showVideo: true },
  19: { source: 'carousel', skipFirst: true, imageAspect: 'square' },
  21: { source: 'carousel', skipFirst: true, imageAspect: 'square' },
  30: { source: 'detail', gridCols: 'grid-cols-1 md:grid-cols-2', imageAspect: 'auto' },
};

const SPECIAL_LAYOUT = {
  18: 'benetton',
  19: 'storyboard',
  29: 'cem',
  30: 'kakemono',
};

const FEATURED_IDS = new Set([7, 11, 16, 18, 23, 29]);

async function parseProjects() {
  const src = await fs.readFile(LEGACY_PROJECTS, 'utf-8');

  let rewritten = src
    .replace(/export interface \w+ \{[\s\S]*?\n\}\n/g, '')
    .replace(/: Project\[\]/, '')
    .replace(/: ProjectDetails/g, '')
    .replace(/: Record<number,[^>]+>/g, '');

  const arrStart = rewritten.indexOf('export const projects');
  const startBracket = rewritten.indexOf('[', arrStart);
  let depth = 0;
  let endBracket = -1;
  for (let i = startBracket; i < rewritten.length; i++) {
    const c = rewritten[i];
    if (c === '[') depth++;
    else if (c === ']') {
      depth--;
      if (depth === 0) {
        endBracket = i;
        break;
      }
    }
  }
  if (endBracket === -1) throw new Error('Could not find end of projects array');
  const arrLit = rewritten.slice(startBracket, endBracket + 1);

  const figmaNames = [
    'projetAngelePardon',
    'projetPantoufle',
    'projetMiels',
    'projetMauvaisEleves',
    'projetGlace',
    'projetLiloStitch',
    'projetClementine',
    'projetAristochats',
    'projetNalu',
    'projetAirAustral',
    'projetEDN',
    'projetBenetton',
    'projetStoryboard',
  ];
  const figmaDecls = figmaNames.map((n) => `const ${n} = '__LOCAL__${n}__';`).join('\n');

  const urlConstRe = /^const\s+(\w+)\s*=\s*('https:\/\/i\.imgur\.com\/[^']+');/gm;
  const urlDecls = [];
  let m;
  while ((m = urlConstRe.exec(src)) !== null) {
    urlDecls.push(`const ${m[1]} = ${m[2]};`);
  }

  const fn = new Function(`${figmaDecls}\n${urlDecls.join('\n')}\nreturn ${arrLit};`);
  return fn();
}

async function parseSections(filename) {
  const src = await fs.readFile(path.join(LEGACY_COMPONENTS, filename), 'utf-8');

  const extract = (name) => {
    const re = new RegExp(`const\\s+${name}[^=]*=\\s*\\[`);
    const match = re.exec(src);
    if (!match) return null;
    const startBracket = match.index + match[0].length - 1;
    let depth = 0;
    for (let i = startBracket; i < src.length; i++) {
      const c = src[i];
      if (c === '[') depth++;
      else if (c === ']') {
        depth--;
        if (depth === 0) {
          const lit = src.slice(startBracket, i + 1);
          return new Function(`return ${lit};`)();
        }
      }
    }
    return null;
  };

  const targetTabs = extract('targetTabs');
  const objectivesRaw = extract('objectives');

  // Detect flat string[] form (e.g. NaluSections) vs structured ObjectiveCard[]
  const isStructured =
    Array.isArray(objectivesRaw) &&
    objectivesRaw.length > 0 &&
    typeof objectivesRaw[0] === 'object' &&
    objectivesRaw[0] !== null &&
    'title' in objectivesRaw[0];

  if (Array.isArray(objectivesRaw) && !isStructured) {
    const introMatch = src.match(
      /<p[^>]*>\s*([^<]{20,}?)\s*<\/p>\s*<ul[^>]*>\s*\{objectives\.map/,
    );
    return {
      targetTabs,
      objectives: undefined,
      simpleObjectives: {
        intro: introMatch ? introMatch[1].replace(/\s+/g, ' ').trim() : undefined,
        items: objectivesRaw,
      },
    };
  }

  return { targetTabs, objectives: objectivesRaw, simpleObjectives: undefined };
}

function resolveCover(_project, meta) {
  return `../../assets/projects/${meta.cover}`;
}

function compact(obj) {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null) continue;
    out[k] = v;
  }
  return out;
}

async function main() {
  const projects = await parseProjects();
  console.log(`Parsed ${projects.length} projects from legacy data`);

  await fs.mkdir(OUT_DIR, { recursive: true });

  let written = 0;
  for (const p of projects) {
    const meta = PROJECT_META[p.id];
    if (!meta) {
      console.warn(`Skipping project id=${p.id} "${p.title}" — no slug mapping`);
      continue;
    }

    const sections = await parseSections(meta.sections);

    const fm = compact({
      title: p.title,
      subtitle: p.subtitle,
      category: p.category,
      type: p.type,
      order: p.id,
      size: p.size,
      featured: FEATURED_IDS.has(p.id),
      cover: resolveCover(p, meta),
      description: p.description,
      carouselImages: p.carouselImages,
      videoUrl: p.videoUrl,
      videoUrls: p.videoUrls,
      detailImages: p.detailImages,
      detailImagesTop: p.detailImagesTop,
      detailImagesBottom: p.detailImagesBottom,
      detailRightImage: p.detailRightImage,
      banner: BANNER_PROJECTS[p.id],
      gallery: GALLERY_PROJECTS[p.id],
      specialLayout: SPECIAL_LAYOUT[p.id],
      details: p.details ? compact(p.details) : undefined,
      targetTabs: sections.targetTabs ?? undefined,
      objectives: sections.objectives ?? undefined,
      simpleObjectives: sections.simpleObjectives ?? undefined,
    });

    const doc = new YAML.Document(fm);
    // Walk the doc and force block-literal style on any scalar containing a newline.
    YAML.visit(doc, {
      Scalar(_key, node) {
        if (typeof node.value === 'string' && node.value.includes('\n')) {
          node.type = 'BLOCK_LITERAL';
        }
      },
    });
    const yaml = doc.toString({
      lineWidth: 0,
      defaultStringType: 'QUOTE_DOUBLE',
      defaultKeyType: 'PLAIN',
    });

    const mdx = `---\n${yaml}---\n`;

    const outPath = path.join(OUT_DIR, `${meta.slug}.mdx`);
    await fs.writeFile(outPath, mdx);
    written++;
  }

  console.log(`Wrote ${written} MDX files to ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
