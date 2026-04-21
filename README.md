# Portfolio Sanja

Portfolio de Sanjali Frédélisy (BTS Communication).
Astro 5 (SSG) · React 19 islands · Tailwind v4 · Motion · Lenis.

## Scripts

```bash
pnpm dev          # dev server on :3000
pnpm build        # production build → dist/
pnpm preview      # preview the built site
pnpm check        # astro check
pnpm lint         # biome check
pnpm lint:fix     # biome check --write
```

One-shot: `node scripts/download-imgur.mjs` rapatrie les images Imgur référencées
dans `src/content/projects/*.mdx` vers `src/assets/projects/{slug}/` et réécrit les
chemins dans les MDX. Idempotent.

Le script `scripts/prune-orphan-assets.mjs` s'exécute automatiquement après
`astro build` et supprime de `dist/_astro/` les originaux PNG/JPG émis par le
pipeline mais non référencés par le HTML final (gain ~150 Mo sur l'image Docker).

## Contenu

Chaque projet vit dans `src/content/projects/{slug}.mdx`. Le schéma est défini
dans `src/content.config.ts`. Ajouter un projet = créer un nouveau `.mdx` et
déposer le cover dans `src/assets/projects/`.

## Déploiement

Build Docker multi-stage (`node:24-alpine` → `caddy:2-alpine`) servi par Caddy
avec compression zstd/gzip et cache long sur `/_astro/*`.

```bash
docker build -t portfolio-sanja .
docker run -p 8080:80 portfolio-sanja
```

### Dokploy

1. Créer une application Docker dans Dokploy, source = ce dépôt GitHub, branche `main`.
2. Dokploy détecte le `Dockerfile` et build automatiquement à chaque push.
3. Configurer le domaine dans Dokploy — il gère les certificats HTTPS via Let's Encrypt.
4. Aucune variable d'environnement à définir.

Le site est 100 % statique : aucune base de données, aucun runtime Node, aucune
variable d'exécution. Un push sur `main` déclenche un nouveau build & déploiement.
