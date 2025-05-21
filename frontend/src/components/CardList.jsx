import React from "react";

function CardList({ name, items }){
    return(
        <div className="flex flex-col bg-gray-200 text-black rounded-lg shadow-md m-5 p-5 gap-5 w-[450px] h-[500px]">
            <div className="flex flex-col justify-between items-start">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p>Itens para conferência de sala: </p>
            </div>
            <div className="flex flex-col justify-center items-start">
                <ul className="flex flex-col items-start text-2xl gap-5">
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CardList;