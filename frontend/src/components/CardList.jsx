import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function CardList({ name, items, checked, onCheckChange }) {
  const [open, setOpen] = useState(false);

  // Notifica o pai quando um checkbox é alterado
  const handleCheck = (idx) => {
    if (onCheckChange) {
      const updated = [...checked];
      updated[idx] = !updated[idx];
      onCheckChange(updated);
    }s
  };

  return (
    <div className="flex flex-col bg-white text-gray-900 rounded-md p-6 gap-2 w-full md:w-1/2 lg:w-[30%] border border-gray-200 transition-all hover:shadow-sm">
      <button
        className="flex flex-row justify-between items-center w-full focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="accordion-content"
      >
        <div className="flex flex-col gap-1 text-left">
          <h1 className="text-3xl font-bold mb-1">{name}</h1>
          <p className="text-base text-gray-500">
            Itens para conferência de sala:
          </p>
        </div>
        <span
          className={`ml-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <FaAngleDown size={26} />
        </span>
      </button>
      <div
        id="accordion-content"
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 mt-4" : "max-h-0"
        } flex-1`}
      >
        <ul className="flex flex-col items-start gap-4 pr-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <input
                id={`item-${index}`}
                type="checkbox"
                checked={checked[index]}
                onChange={() => handleCheck(index)}
                className="accent-red-500 w-5 h-5 rounded border-gray-300 focus:ring-2 focus:ring-red-400 transition-all"
              />
              <label
                htmlFor={`item-${index}`}
                className={`text-lg select-none transition-colors ${
                  checked[index] ? "line-through text-gray-400" : ""
                }`}
              >
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardList;
