import React from 'react';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  const alignments = {
    left: 'justify-start',
    center: 'justify-center',
  };

  const alignmentClass = alignments[titleAlign] || alignments.left;

  return (
    <section className="w-full px-8 md:px-16 py-12">
      <div className={`flex items-center ${alignmentClass} mb-8`}>
        <h1 className="text-dark-gray-2 text-2xl font-semibold">
          {title}
        </h1>
        {link && (
          <a
            href={link.href}
            className="ml-auto text-primary text-base"
            style={{ fontSize: '18px' }}
          >
            {link.text}
          </a>
        )}
      </div>

      <div>
        {children}
      </div>
    </section>
  );
};

export default Section;
