interface FormattedTextProps {
  content: string;
  className?: string;
}

export function FormattedText({ content, className = '' }: FormattedTextProps) {
  // Split content into blocks separated by double newlines or single newlines
  const lines = content.split('\n');
  
  const blocks: { type: 'paragraph' | 'list-item' | 'heading' | 'empty'; text: string }[] = [];
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === '') {
      blocks.push({ type: 'empty', text: '' });
    } else if (/^[•\-—–]\s/.test(trimmed)) {
      // List item (starts with •, -, —, or –)
      const itemText = trimmed.replace(/^[•\-—–]\s*/, '');
      blocks.push({ type: 'list-item', text: itemText });
    } else if (trimmed === trimmed.toUpperCase() && trimmed.length > 3 && /^[A-ZÀ-ÖØ-Ý\s\-–—']+$/.test(trimmed)) {
      // ALL CAPS heading (like "OBJECTIFS DE COMMUNICATION", "CONTRAINTES")
      blocks.push({ type: 'heading', text: trimmed });
    } else {
      blocks.push({ type: 'paragraph', text: trimmed });
    }
  }

  // Group consecutive list items together and build rendered elements
  const elements: JSX.Element[] = [];
  let i = 0;
  let key = 0;

  while (i < blocks.length) {
    const block = blocks[i];

    if (block.type === 'empty') {
      i++;
      continue;
    }

    if (block.type === 'heading') {
      elements.push(
        <h3
          key={key++}
          className="text-[#5c2c1f] text-sm tracking-widest uppercase mt-6 mb-3 first:mt-0"
        >
          {block.text}
        </h3>
      );
      i++;
      continue;
    }

    if (block.type === 'paragraph') {
      elements.push(
        <p
          key={key++}
          className="text-[#5c2c1f]/85 leading-relaxed text-[17px] mb-4 last:mb-0"
        >
          {block.text}
        </p>
      );
      i++;
      continue;
    }

    if (block.type === 'list-item') {
      // Collect consecutive list items
      const items: string[] = [];
      while (i < blocks.length && blocks[i].type === 'list-item') {
        items.push(blocks[i].text);
        i++;
      }
      elements.push(
        <ul key={key++} className="space-y-2 my-4 last:mb-0 first:mt-0">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-[#5c2c1f]/85 leading-relaxed text-[17px]"
            >
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#702a0c]/50 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    i++;
  }

  return <div className={`prose prose-lg max-w-none ${className}`}>{elements}</div>;
}
