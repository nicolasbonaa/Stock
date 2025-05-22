import { useEffect, useState } from "react";

function NumberAssets() {
  const cardConfigs = [
    {
      key: "CENSUN",
      label: "CENSUN",
      instruction:
        "Utilizar o próximo número para fazer a etiqueta e colar nos notebooks",
    },
    {
      key: "CENSUV",
      label: "CENSUV",
      instruction:
        "Utilizar o próximo número para fazer a etiqueta e colar nos virtualizadores",
    },
    {
      key: "CENSUD",
      label: "CENSUD",
      instruction:
        "Utilizar o próximo número para fazer a etiqueta e colar nas impressoras",
    },
  ];

  const [numbers, setNumbers] = useState(() => {
    const initial = {};
    cardConfigs.forEach(({ key }) => {
      const saved = localStorage.getItem(key);
      initial[key] = saved !== null ? JSON.parse(saved) : 0;
    });
    return initial;
  });

  useEffect(() => {
    cardConfigs.forEach(({ key }) => {
      localStorage.setItem(key, JSON.stringify(numbers[key]));
    });
  }, [numbers, cardConfigs]);

  useEffect(() => {
    cardConfigs.forEach(({ key }) => {
      if (numbers[key] < 0) {
        alert("Número inválido");
        setNumbers((prev) => ({ ...prev, [key]: 0 }));
      }
    });
  }, [numbers, cardConfigs]);

  return (
    <div className="flex flex-col md:flex md:flex-row justify-between items-center m-8 gap-6">
      {cardConfigs.map(({ key, label, instruction }) => (
        <div
          key={key}
          className="flex flex-col h-[250px] justify-between items-center bg-white border border-gray-300/50 rounded-md p-4"
        >
          <p className="text-2xl">
            {label}
            {numbers[key]}
          </p>
          <p className="text-sm text-center font-normal">{instruction}</p>
          <div className="w-full flex flex-row justify-between items-center gap-6">
            <button
              className="text-white font-bold m-2 bg-green-500 p-3 rounded-lg w-1/2"
              onClick={() =>
                setNumbers((prev) => ({ ...prev, [key]: prev[key] + 1 }))
              }
            >
              Aumentar
            </button>
            <button
              className="text-white font-bold m-2 bg-red-500 p-3 rounded-lg w-1/2"
              onClick={() =>
                setNumbers((prev) => ({ ...prev, [key]: prev[key] - 1 }))
              }
            >
              Diminuir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NumberAssets;
