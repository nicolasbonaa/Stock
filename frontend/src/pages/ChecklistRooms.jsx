import React, { useState } from "react";
import CardList from "../components/CardList";
import jsPDF from "jspdf";
import { FaCheck } from "react-icons/fa";

function ChecklistRooms() {
  const roomsData = [
    {
      name: "Sala Ativa",
      items: [
        "Canetas",
        "Áudio 3 estações",
        "Projetores",
        "PC",
        "Periféricos",
        "Mesa",
      ],
    },
    {
      name: "Sala Anatomia",
      items: ["PC/Mesa", "Projetor", "HDMI", "Periféricos"],
    },
    {
      name: "Sala Biologia",
      items: ["TV", "Áudio", "Bluetooth"],
    },
    {
      name: "Sala Microscopia",
      items: ["Notebook", "Áudio", "TV", "Periféricos", "Projetor"],
    },
    {
      name: "Habilidades Clínicas 1",
      items: ["TV", "Bluetooth", "Áudio Caixinhas", "Controles"],
    },
    {
      name: "Habilidades Clínicas 2",
      items: ["TV", "Bluetooth", "Áudio Caixinhas", "Controles"],
    },
    {
      name: "Habilidades Clínicas 3",
      items: ["TV", "Bluetooth", "Áudio Caixinhas", "Controles"],
    },
    {
      name: "Habilidades Clínicas 4",
      items: ["TV", "Bluetooth", "Áudio Caixinhas", "Controles"],
    },
    {
      name: "Habilidades Clínicas 5",
      items: ["TV", "Bluetooth", "Áudio Caixinhas", "Controles"],
    },
    {
      name: "Habilidades Médicas",
      items: ["TV", "Bluetooth", "Áudio Caixinhas", "Controles"],
    },
    {
      name: "Sala Flow",
      items: ["Som", "Projetor", "PC", "Periféricos"],
    },
    {
      name: "Sala Trust",
      items: ["Projetores", "HDMI", "Caixa de Som"],
    },
    {
      name: "Synapse",
      items: ["Projetores", "Mesa de Som", "Caixa de Som", "PC"],
    },
    {
      name: "Sala 3",
      items: ["Projetor", "Caixa de Som", "HDMI"],
    },
    {
      name: "Sala 5",
      items: ["Projetores", "Sistema de Som", "HDMI"],
    },
    {
      name: "Laboratório de Informática",
      items: ["Atualizações Windows"],
    },
    {
      name: "Biblioteca",
      items: ["Headset", "NVDA", "Atualizações PCs"],
    },
  ];


const [showModal, setShowModal] = useState(false);
const [nomeConferente, setNomeConferente] = useState("");
const [observacoes, setObservacoes] = useState("");

  // Estado para controlar os itens marcados de cada sala
  const [checkedState, setCheckedState] = useState(() =>
    roomsData.map((room) => room.items.map(() => false))
  );

  // Atualiza o estado dos itens marcados de uma sala específica
  const handleCheckChange = (roomIdx, updatedChecked) => {
    setCheckedState((prev) => {
      const newState = [...prev];
      newState[roomIdx] = updatedChecked;
      return newState;
    });
  };

  // Verifica se há pelo menos um item marcado em qualquer sala
  const hasAnyChecked = checkedState.some((arr) => arr.some(Boolean));

  // Gera o PDF apenas com os cards e itens marcados
<<<<<<< HEAD
  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    let y = 20;
    // Título centralizado e em negrito
    doc.setFontSize(18);
    doc.setFont(undefined, "bold");
    doc.text("Faculdade CENSUPEG", doc.internal.pageSize.getWidth() / 2, y, {
      align: "center",
    });
    y += 14;
    doc.setFontSize(16);
    doc.text("Checklist Salas", doc.internal.pageSize.getWidth() / 2, y, {
      align: "center",
    });
    y += 16;
    doc.setFontSize(12);
    doc.setFont(undefined, "normal");
    roomsData.forEach((room, roomIdx) => {
      const checkedItems = room.items.filter(
        (_, itemIdx) => checkedState[roomIdx][itemIdx]
      );
      if (checkedItems.length > 0) {
        doc.setFont(undefined, "bold");
        doc.text(room.name, 10, y);
        doc.setFont(undefined, "normal");
        y += 8;
        checkedItems.forEach((item) => {
          doc.text(`✔ ${item}`, 15, y);
          y += 8;
        });
        y += 4;
      }
=======


const handleGeneratePDF = () => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Fundo vermelho
  doc.setFillColor(239, 68, 68);
  doc.rect(0, 0, pageWidth, pageHeight, "F");

  let y = 48;

  // Título centralizado
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(255, 255, 255);
  doc.text("Checklist Salas FACULDADE CENSUPEG", pageWidth / 2, y, { align: "center" });
  y += 36;

  // Para centralizar os textos dentro da moldura da sala, calculamos a largura do texto e posicionamos no centro da moldura
  roomsData.forEach((room, roomIdx) => {
    const algumMarcado = checkedState[roomIdx].some(Boolean);
    if (!algumMarcado) return;

    const itens = room.items;
    const boxPadding = 16;
    const lineHeight = 18;
    const boxTop = y;
    const boxLeft = 40;
    const boxWidth = pageWidth - 80;
    const boxHeight = (itens.length + 1) * lineHeight + boxPadding * 2;


    // Moldura branca arredondada
    doc.setDrawColor(255);
    doc.setLineWidth(1);
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(boxLeft, boxTop, boxWidth, boxHeight, 8, 8, 'FD');

    // Nome da sala - centralizado na moldura
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(239, 68, 68); // vermelho escuro
    const textRoomNameWidth = doc.getTextWidth(room.name);
    const roomNameX = boxLeft + (boxWidth / 2);
    let currentY = boxTop + boxPadding + lineHeight;
    doc.text(room.name, roomNameX, currentY, { align: "center" });
    currentY += lineHeight;

    // Itens - centralizados, com (x) ou ( )
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0); // preto

    itens.forEach((item, itemIdx) => {
      const marcado = checkedState[roomIdx][itemIdx];
      const textoItem = `${marcado ? "(x)" : "( )"} ${item}`;
      const textoLargura = doc.getTextWidth(textoItem);
      const posX = boxLeft + (boxWidth / 2);
      doc.text(textoItem, posX, currentY, { align: "center" });
      currentY += lineHeight;
>>>>>>> dd616a250ef4ea75c8b4c85b6ab958be293a2984
    });

    y += boxHeight + 20;

    if (y > pageHeight - 120) {
      doc.addPage();
      y = 48;
    }
  });

  // Moldura final para nome do conferente, data e observações
  const boxPadding = 20;
  const boxWidth = pageWidth - 80;
  const boxLeft = 40;
  const finalBoxTop = y;
  const finalLineHeight = 20;

  // Quebrar texto das observações em múltiplas linhas se necessário
  const observacoesTexto = observacoes.trim() || "Sem observações.";
  const observacoesLines = doc.splitTextToSize(observacoesTexto, boxWidth - boxPadding * 2 - 20);

  const finalBoxHeight = finalLineHeight * 3 + observacoesLines.length * finalLineHeight + boxPadding * 2;

  // Moldura branca arredondada
  doc.setDrawColor(255);
  doc.setFillColor(255, 255, 255);
  doc.setLineWidth(1);
  doc.roundedRect(boxLeft, finalBoxTop, boxWidth, finalBoxHeight, 8, 8, 'FD');

  let textY = finalBoxTop + boxPadding + finalLineHeight;

  // Nome do conferente - centralizado
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text(`Conferente: ${nomeConferente}`, pageWidth / 2, textY, { align: "center" });
  textY += finalLineHeight;

  // Data - centralizado
  const today = new Date();
  const dateStr = today.toLocaleDateString();
  doc.setFont("helvetica", "normal");
  doc.text(`Data: ${dateStr}`, pageWidth / 2, textY, { align: "center" });
  textY += finalLineHeight;

  // Observações - centralizado e com múltiplas linhas
  doc.setFont("helvetica", "italic");
  observacoesLines.forEach(line => {
    doc.text(line, pageWidth / 2, textY, { align: "center" });
    textY += finalLineHeight;
  });

  doc.save("checklist.pdf");
};



  return (
    <div className="flex flex-col lg:flex lg:flex-row lg:flex-wrap justify-center items-start m-8 gap-6 relative min-h-screen">
      {roomsData.map((room, index) => (
        <CardList
          key={index}
          name={room.name}
          items={room.items}
          checked={checkedState[index]}
          onCheckChange={(updated) => handleCheckChange(index, updated)}
        />
      ))}
      {hasAnyChecked && (
        <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center">
          <div className="w-full md:w-1/2 lg:w-full bg-white border-t border-gray-200 py-4 px-8 shadow-lg flex flex-row items-center justify-end ">
          <button
            className="bg-red-500 text-white px-8 py-3 rounded-lg font-bold text-lg shadow hover:bg-red-600 transition-all"
            onClick={() => setShowModal(true)}
          >
            Gerar PDF
          </button>
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-red-600">Informações para o PDF</h2>
                <label className="block mb-2 font-semibold">Nome do conferente:</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                  value={nomeConferente}
                  onChange={e => setNomeConferente(e.target.value)}
                  placeholder="Digite seu nome"
                />
                <label className="block mb-2 font-semibold">Observações:</label>
                <textarea
                  className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                  value={observacoes}
                  onChange={e => setObservacoes(e.target.value)}
                  placeholder="Digite observações (opcional)"
                  rows={3}
                />
                <div className="flex justify-end gap-2">
                  <button
                    className="px-4 py-2 rounded bg-gray-300 text-gray-800 font-semibold"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="px-4 py-2 rounded bg-red-500 text-white font-bold"
                    onClick={() => {
                      setShowModal(false);
                      handleGeneratePDF();
                    }}
                    disabled={!nomeConferente.trim()}
                  >
                    Gerar PDF
                  </button>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      )}
  
    </div>
  );
}

export default ChecklistRooms;
