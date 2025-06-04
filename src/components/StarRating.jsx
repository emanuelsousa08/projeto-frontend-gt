import React from "react";
import StarIcon from "../assets/star.svg";

export default function StarRating({ fill = 0, total = 5 }) {
  const filledStars = Math.round(fill);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: total }).map((_, index) => (
        <img
          key={index}
          src={StarIcon}
          alt="star"
          className={`w-4 h-4 rounded-[6px] ${
            index < filledStars ? "bg-warning" : "bg-white"
          }`}
        />
      ))}
    </div>
  );
}

