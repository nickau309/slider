import React from "react";
import { FaQuoteRight } from "react-icons/fa";

export default function Person({ image, name, title, quote, positionClass }) {
  return (
    <article
      className={`${positionClass} absolute inset-0 flex flex-col items-center py-4 text-sm duration-300 ease-linear sm:text-base`}
    >
      <img
        src={image}
        alt={name}
        className="mb-4 aspect-square w-36 rounded-full border-4 border-slate-300 object-cover shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
      />
      <h4 className="mb-1 font-bold uppercase tracking-wider text-amber-700">
        {name}
      </h4>
      <p className="mb-8 capitalize">{title}</p>
      <p className="mb-4 max-w-md leading-loose text-slate-500 sm:max-w-2xl">
        {quote}
      </p>
      <FaQuoteRight className="text-5xl text-amber-700" />
    </article>
  );
}
