function DaysOfAcident() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-br from-red-400 via-red-500 to-red-700 py-12">
      <div className="w-full max-w-md flex flex-col justify-between items-center bg-white shadow-2xl rounded-2xl py-10 px-8 gap-8 border border-red-200">
        <h1 className="text-3xl font-extrabold text-red-600 tracking-wide mb-2">
          Dias sem Acidentes
        </h1>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[110px] font-black text-red-500 drop-shadow-lg leading-none">
            1000
          </span>
          <span className="text-lg text-gray-500 font-medium">dias</span>
        </div>
        <div className="flex flex-col items-center gap-1 mt-4">
          <p className="text-base text-gray-700 font-semibold">
            Último acidente registrado:
          </p>
          <p className="text-base text-gray-500 font-normal">motivo acidente</p>
          <p className="text-base text-gray-500 font-normal">10/05/2005</p>
        </div>
      </div>
    </div>
  );
}

export default DaysOfAcident;
