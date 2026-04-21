import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

interface TargetTab {
  id: string;
  label: string;
  content: string;
}

interface TargetTabsProps {
  layoutId: string;
  tabs: TargetTab[];
}

type Block =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] };

function parseContent(raw: string): Block[] {
  const lines = raw.split('\n');
  const blocks: Block[] = [];
  const bulletRegex = /^[•\-—–]\s/;
  const allCapsRegex = /^[A-ZÀ-ÖØ-Ý\s\-–—']+$/;

  let currentList: string[] | null = null;
  const flushList = () => {
    if (currentList) {
      blocks.push({ type: 'list', items: currentList });
      currentList = null;
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === '') {
      flushList();
      continue;
    }
    if (bulletRegex.test(trimmed)) {
      const itemText = trimmed.replace(/^[•\-—–]\s*/, '');
      if (!currentList) currentList = [];
      currentList.push(itemText);
      continue;
    }
    flushList();
    if (trimmed === trimmed.toUpperCase() && trimmed.length > 3 && allCapsRegex.test(trimmed)) {
      blocks.push({ type: 'heading', text: trimmed });
    } else {
      blocks.push({ type: 'paragraph', text: trimmed });
    }
  }
  flushList();
  return blocks;
}

function RenderedContent({ content }: { content: string }) {
  const blocks = parseContent(content);
  return (
    <div className="max-w-none">
      {blocks.map((block) => {
        if (block.type === 'heading') {
          return (
            <h4
              key={`h:${block.text}`}
              className="mt-6 mb-3 text-[#5c2c1f] text-sm uppercase tracking-widest first:mt-0"
            >
              {block.text}
            </h4>
          );
        }
        if (block.type === 'paragraph') {
          return (
            <p
              key={`p:${block.text}`}
              className="mb-4 text-[17px] text-[#5c2c1f]/85 leading-relaxed last:mb-0"
            >
              {block.text}
            </p>
          );
        }
        return (
          <ul key={`l:${block.items.join('|')}`} className="my-4 space-y-2 first:mt-0 last:mb-0">
            {block.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[17px] text-[#5c2c1f]/85 leading-relaxed"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#702a0c]/50" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

export function TargetTabs({ layoutId, tabs }: TargetTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? '');
  const activeContent = tabs.find((t) => t.id === activeTab);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-0 border-[#5c2c1f]/10 border-b">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-5 py-3 text-sm uppercase tracking-wide transition-colors duration-300 ${
              activeTab === tab.id ? 'text-[#5c2c1f]' : 'text-[#8c5b45] hover:text-[#5c2c1f]'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId={`${layoutId}-target-tab-underline`}
                className="absolute right-0 bottom-0 left-0 h-[2px] bg-[#702a0c]"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="min-h-[180px]">
        <AnimatePresence mode="wait">
          {activeContent && (
            <motion.div
              key={activeContent.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-[#5c2c1f]/10 bg-white/60 p-6 backdrop-blur-sm md:p-8"
            >
              <RenderedContent content={activeContent.content} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
