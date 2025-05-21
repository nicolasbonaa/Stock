import CardList from "../components/CardList";
function ChecklistRooms() {

  const roomsData = [
    {
      name: 'Ativa',
      items: ['Computador', 'Periféricos', 'Som', 'Projetor'],
    },
    {
      name: 'Flow',
      items: ['Computador', 'Projetor', 'Som', 'Microfone', 'Periféricos'],
    },
    {
      name: 'Trust',
      items: ['Computador', 'Projetor', 'Som'],
    },
    {
      name: 'Synapse',
      items: ['Computador', 'Projetores', 'Mesa de Som', 'Caixa de Som']
    }
  ];

  return (
    <div className="flex flex-row justify-between items-center">
      {roomsData.map((room, index) => (
        <CardList
          key={index}
          name={room.name}
          items={room.items}
        />
      ))}
    </div>
  );
}

export default ChecklistRooms;