import React from "react";
import StarIcon from "../assets/star.svg";

export default function StarRating({ fill = 0, total = 5 }) {
  const filledStars = Math.round(fill);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: total }).map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={index < filledStars ? "var(--warning)" : "var(--light-gray-2)"}
          className="w-4 h-4"
        >
          <path
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 
            1 0 00.95.69h4.91c.969 0 1.371 1.24.588 1.81l-3.977 
            .89a1 1 0 00-.364 1.118l1.518 
            4.674c.3.921-.755 1.688-1.54 
            1.118l-3.977-2.89a1 1 0 
            00-1.175 0l-3.977 2.89c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 
            1 0 00-.364-1.118l-3.977-2.89c-.784-.57-.38-1.81.588-1.81h4.91a1 
            1 0 00.95-.69l1.518-4.674z"
          />
        </svg>
      ))}
    </div>
  );
}
