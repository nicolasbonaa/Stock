import React, { useState, useEffect } from "react";

function DaysOfAcident() {
  // Simulação: lista de motivos dos acidentes
  const [motivos, setMotivos] = useState(() => {
    const saved = localStorage.getItem("motivosAcidentes");
    return saved
      ? JSON.parse(saved)
      : [
          { motivo: "Queda de equipamento", data: "10/05/2024" },
          { motivo: "Derramamento de líquido", data: "02/03/2024" },
          { motivo: "Curto-circuito", data: "15/01/2024" },
        ];
  });

  // Data do último acidente (pode ser editada/salva em localStorage)
  const [lastAccident, setLastAccident] = useState(() => {
    return localStorage.getItem("lastAccidentDate") || motivos[0]?.data || "";
  });

  // Calcular dias sem acidente
  const [diasSemAcidente, setDiasSemAcidente] = useState(0);

  useEffect(() => {
    const last = new Date(lastAccident);
    const now = new Date();
    const diff = Math.floor((now - last) / (1000 * 60 * 60 * 24));
    setDiasSemAcidente(diff);
  }, [lastAccident]);

  // Persistência local
  useEffect(() => {
    localStorage.setItem("motivosAcidentes", JSON.stringify(motivos));
  }, [motivos]);
  useEffect(() => {
    localStorage.setItem("lastAccidentDate", lastAccident);
  }, [lastAccident]);

  // Modal e navegação
  const [showModal, setShowModal] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Formulário de novo acidente
  const [novoMotivo, setNovoMotivo] = useState("");
  const [novaData, setNovaData] = useState(() => {
    const hoje = new Date();
    return hoje.toISOString().slice(0, 10);
  });

  const registrarAcidente = (e) => {
    e.preventDefault();
    if (!novoMotivo.trim() || !novaData) return;
    const dataFormatada = novaData.split("-").reverse().join("/");
    const novo = { motivo: novoMotivo, data: dataFormatada };
    setMotivos((prev) => [novo, ...prev]);
    setLastAccident(novaData);
    setDiasSemAcidente(0);
    setNovoMotivo("");
    setNovaData(new Date().toISOString().slice(0, 10));
    setShowAll(false);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-br from-red-400 via-red-500 to-red-700 py-12">
      <div className="w-full max-w-md flex flex-col justify-between items-center bg-white shadow-2xl rounded-2xl py-10 px-8 gap-8 border border-red-200">
        <h1 className="text-3xl font-extrabold text-red-600 tracking-wide mb-2">
          Dias sem Acidentes
        </h1>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[110px] font-black text-red-500 drop-shadow-lg leading-none">
            {diasSemAcidente}
          </span>
          <span className="text-lg text-gray-500 font-medium">dias</span>
        </div>
        <div className="flex flex-col items-center gap-1 mt-4">
          <p className="text-base text-gray-700 font-semibold">
            Último acidente registrado:
          </p>
          <p className="text-base text-gray-500 font-normal">
            {motivos[0]?.motivo}
          </p>
          <p className="text-base text-gray-500 font-normal">
            {motivos[0]?.data}
          </p>
        </div>
        <button
          className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg font-bold shadow hover:bg-red-600 transition"
          onClick={() => setShowModal(true)}
        >
          Conferir motivos / Registrar acidente
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="relative w-[350px] min-h-[320px] bg-white rounded-xl shadow-2xl flex flex-col items-center justify-center p-6">
            {!showAll ? (
              <>
                <h2 className="text-xl font-bold mb-2 text-red-600">
                  Motivo do último acidente
                </h2>
                <p className="text-gray-700 mb-2">{motivos[0]?.motivo}</p>
                <p className="text-gray-500 mb-4">{motivos[0]?.data}</p>
                <button
                  className="mb-4 px-4 py-1 bg-gray-200 rounded hover:bg-gray-300 font-semibold"
                  onClick={() => setShowAll(true)}
                >
                  Ver todos os motivos
                </button>
                <form
                  className="flex flex-col gap-2 w-full"
                  onSubmit={registrarAcidente}
                >
                  <input
                    className="border rounded px-2 py-1"
                    placeholder="Motivo do acidente"
                    value={novoMotivo}
                    onChange={(e) => setNovoMotivo(e.target.value)}
                    required
                  />
                  <input
                    className="border rounded px-2 py-1"
                    type="date"
                    value={novaData}
                    onChange={(e) => setNovaData(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="mt-2 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 font-semibold"
                  >
                    Registrar acidente
                  </button>
                </form>
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
                  onClick={() => {
                    setShowModal(false);
                    setShowAll(false);
                  }}
                >
                  ✕
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-2 text-red-600">
                  Todos os motivos
                </h2>
                <ul className="text-gray-700 text-left w-full mb-2 max-h-40 overflow-y-auto">
                  {motivos.map((m, i) => (
                    <li key={i} className="mb-1">
                      <span className="font-semibold">{m.data}:</span>{" "}
                      {m.motivo}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-2 px-4 py-1 bg-gray-200 rounded hover:bg-gray-300 font-semibold"
                  onClick={() => setShowAll(false)}
                >
                  Voltar
                </button>
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
                  onClick={() => {
                    setShowModal(false);
                    setShowAll(false);
                  }}
                >
                  ✕
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DaysOfAcident;
