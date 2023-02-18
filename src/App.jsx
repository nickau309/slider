import React, { useState, useEffect, useCallback } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Person from "./Person";
import people from "./data";

export default function App() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => {
      const newIndex = prev - 1;
      return newIndex < 0 ? people.length - 1 : newIndex;
    });
  };

  const nextSlide = useCallback(() => {
    setIndex((prev) => {
      const newIndex = prev + 1;
      return newIndex >= people.length ? 0 : newIndex;
    });
  }, []);

  useEffect(() => {
    const slider = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index, nextSlide]);

  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 p-4 sm:px-8">
      <section className="w-full max-w-3xl">
        <h2 className="mb-12 flex items-center justify-center gap-4 text-3xl font-bold tracking-wider text-slate-700 sm:text-4xl">
          <span className="text-[.85em] text-amber-700">/</span>Reviews
        </h2>
        <div className="relative">
          <div className="relative h-[450px] overflow-hidden text-center">
            {people.map((person, personIndex) => {
              const { id, ...rest } = person;
              // more stuff coming up
              let position = "translate-x-full opacity-0";
              if (personIndex === index) {
                position = "translate-x-0 opacity-1";
              } else if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = "-translate-x-full opacity-0";
              }
              return <Person key={id} positionClass={position} {...rest} />;
            })}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-52 grid aspect-square w-6 -translate-y-1/2 place-items-center rounded-full bg-slate-500 text-white duration-200 ease-linear hover:bg-amber-700 sm:w-8 sm:text-2xl"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-52 grid aspect-square w-6 -translate-y-1/2 place-items-center rounded-full bg-slate-500 text-white duration-200 ease-linear hover:bg-amber-700 sm:w-8 sm:text-2xl"
          >
            <FiChevronRight />
          </button>
        </div>
      </section>
    </main>
  );
}
