import React from 'react';

const Section = ({ title, titleAlign = 'left', link, children }) => {
{
  title = "Melhores ofertas personalizadas";
}

link = {
  text: "Queima de estoque da Nike🔥",
  href: "www.google.com"
}

  return (
    <section className="w-[1440px] h-[681px] bg-neutral-100 flex items-center justify-between px-24">
      <div className="max-w-[600px] flex flex-col gap-6">
        <div className={`text-amber-500 text-base font-bold font-['Inter'] leading-normal tracking-wide
          ${titleAlign === 'center' ? 'justify-start': 'justify-between'}`}>
          {title}
        </div>
        <h1 className="text-dark-gray text-6xl font-extrabold leading-[66px] tracking-wide">
          {link && (
            <a href={link.href}>{link.text}</a>)}
        </h1>
        <div className="w-[495px] justify-start text-zinc-700 text-lg font-normal font-['Inter'] leading-loose tracking-wide">
          Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
        </div>

        <button className="primary-button text-neutral-100 font-bold text-base tracking-wide">
          Ver ofertas
        </button>
      </div>
      <div>{children}</div>

    </section>

  );
};

export default Section;
