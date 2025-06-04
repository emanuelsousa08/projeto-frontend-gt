import React from "react";

export default function ProductOptions({
  options = {},
  shape,
  radius
}) {
  const { sizes = [], colors = [] } = options;

  const renderOptions = (opts, type) => {
    return opts.map((opt, index) => {
      const isCircle = shape === "circle";
      const colorClasses = `cursor-pointer border border-light-gray-2 hover:border-border-primary transition-all duration-200 flex items-center justify-center font-medium ${!isCircle ? "w-[31px] h-[31px] rounded-full" : `h-[46px] px-4 border border-light-gray-2 rounded-[${radius}]`}`;

      const sizeClasses = `cursor-pointer border border-light-gray-2 hover:border-primary transition-all duration-200 flex items-center justify-center font-medium ${isCircle ? "w-[31px] h-[31px] rounded-full" : `h-[46px] px-4 border border-light-gray-2 rounded-[${radius}]`}`
      if (type === "color") {
        return (
          <button
            key={`${type}-${index}`}
            className={`${colorClasses} color-button`}
            style={{ backgroundColor: opt }}
            title={opt}
          />
        );
      }

      return (
        <button key={`${type}-${index}`} className={`${sizeClasses} size-button`}>{opt}</button>
      );
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Tamanhos */}
      {sizes.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {renderOptions(sizes, "size")}
        </div>
      )}

      {/* Cores */}
      {colors.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {renderOptions(colors, "color")}
        </div>
      )}
    </div>
  );
} 

