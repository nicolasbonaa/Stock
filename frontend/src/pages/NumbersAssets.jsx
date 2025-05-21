import React, { useState, useEffect } from "react";

function NumberAssets(){

    const [censun, setCensun] = useState(() => {
        const saved = localStorage.getItem('CENSUN');
        return saved !== null ? JSON.parse(saved) : 0;
      });

    useEffect(() => {
        localStorage.setItem('CENSUN', JSON.stringify(censun));
      }, [censun]);

      //CENSUV 
      const [censuv, setCensuv] = useState(() => {
        const saved = localStorage.getItem('CENSUV');
        return saved !== null ? JSON.parse(saved) : 0;
      });

    useEffect(() => {
        localStorage.setItem('CENSUV', JSON.stringify(censuv));
      }, [censuv]);


      //CENSUD
      const [censud, setCensud] = useState(() => {
        const saved = localStorage.getItem('CENSUD');
        return saved !== null ? JSON.parse(saved) : 0;
      });

    useEffect(() => {
        localStorage.setItem('CENSUD', JSON.stringify(censud));
      }, [censud]);

      if(censun < 0 ){
        alert("Número inválido");
        setCensun(0);
      }
      else if(censuv < 0){
        alert("Número inválido");
        setCensuv(0);
      }
      else if(censud < 0){
        alert("Número inválido");
        setCensud(0);
    }


    return(
        <div className="flex flex-row justify-between items-center m-8 p-6">
            <div className="flex flex-col h-[320px] justify-center items-center font-bold bg-gray-200 p-6 rounded-lg shadow-lg">
                <p className="text-2xl">CENSUN{censun}</p>
                <button className="text-white font-bold m-2 bg-green-500 p-3 rounded-lg w-[250px] " onClick={() => setCensun(censun + 1)}>
                    Aumentar
                </button>
                <button className="text-white font-bold m-2 bg-red-500 p-3 rounded-lg w-[250px] " onClick={() => setCensun(censun - 1)}>
                    Diminuir
                </button>
                <p className="text-sm font-normal mt-2">Utilizar o próximo número para fazer a etiqueta e colar nos notebooks</p>
            </div>
            <div className="flex flex-col h-[320px] justify-center items-center font-bold bg-gray-200 p-6 rounded-lg shadow-lg">
                <p className="text-2xl">CENSUV{censuv}</p>
                <button className="text-white font-bold m-2 bg-green-500 p-3 rounded-lg w-[250px] " onClick={() => setCensuv(censuv + 1)}>
                    Aumentar
                </button>
                <button className="text-white font-bold m-2 bg-red-500 p-3 rounded-lg w-[250px] " onClick={() => setCensuv(censuv - 1)}>
                    Diminuir
                </button>
                <p className="text-sm mt-2">Utilizar o próximo número para fazer a etiqueta e colar nos virtualizadores</p>
            </div>
            <div className="flex flex-col h-[320px] justify-center items-center font-bold bg-gray-200 p-6 rounded-lg shadow-lg">
                <p className="text-2xl">CENSUD{censud}</p>
                <button className="text-white font-bold m-2 bg-green-500 p-3 rounded-lg w-[250px] " onClick={() => setCensud(censud + 1)}>
                    Aumentar
                </button>
                <button className="text-white font-bold m-2 bg-red-500 p-3 rounded-lg w-[250px] " onClick={() => setCensud(censud - 1)}>
                    Diminuir
                </button>
                <p className="text-sm mt-2">Utilizar o próximo número para fazer a etiqueta e colar nas impressoras</p>
            </div>
        </div>
    )
}

export default NumberAssets;