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
    });
    // Data no final
    const today = new Date();
    const dateStr = today.toLocaleDateString();
    const pageHeight = doc.internal.pageSize.getHeight();
    doc.setFontSize(10);
    doc.text(`Data: ${dateStr}`, 10, pageHeight - 10);
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
              onClick={handleGeneratePDF}
            >
              Gerar PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChecklistRooms;
