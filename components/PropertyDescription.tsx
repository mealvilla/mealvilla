
import React from 'react';

const PropertyDescription: React.FC<{ description: string }> = ({ description }) => {
  // Split content into logical blocks separated by one or more blank lines.
  const blocks = description.split(/\n\s*\n/);

  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        const lines = block.split('\n').filter(line => line.trim() !== '');
        if (lines.length === 0) {
          return null;
        }

        const firstLine = lines[0];

        // Check for a markdown-style heading (e.g., **The Space**)
        if (firstLine.startsWith('**') && firstLine.endsWith('**')) {
          const headingText = firstLine.slice(2, -2);
          const listItems = lines.slice(1);

          // Check if this block is a heading followed by a list
          if (listItems.length > 0 && listItems.every(item => item.trim().startsWith('-'))) {
            return (
              <div key={index}>
                <h3 className="text-2xl font-bold font-serif text-black mb-4">{headingText}</h3>
                <ul className="list-disc list-inside space-y-2 text-text-muted pl-2">
                  {listItems.map((item, itemIndex) => (
                    <li key={itemIndex}>{item.replace(/^- /, '')}</li>
                  ))}
                </ul>
              </div>
            );
          }
        }

        // For all other cases, treat it as a paragraph.
        // We can render bold text within the paragraph.
        // The `whitespace-pre-line` class will respect newlines within the block.
        const content = block.split(/(\*\*.*?\*\*)/g).map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-semibold text-black">{part.slice(2, -2)}</strong>;
          }
          return part;
        });

        return (
          <p key={index} className="text-text-muted leading-relaxed whitespace-pre-line">
            {content}
          </p>
        );
      })}
    </div>
  );
};

export default PropertyDescription;
