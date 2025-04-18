import StarRating from "./StarRating";

export default function BettingCardList({ bettingData }: any) {
  return (
    <div className="bg-white py-10 max-w-4xl max-w-[1170px] mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Top Casas de Apostas</h2>
      <div className="space-y-4">
        {bettingData.map((bet: any) => (
          <div
            key={bet.name}
            className="flex items-center justify-between bg-gray-50 rounded-xl shadow-sm p-4 hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <span className="font-semibold text-custom-xl text-dark mb-1 mx-3">{bet.rank}</span>
              <img src={bet.imageSrc} alt={bet.name} className="w-14 h-14 rounded-full object-contain bg-white border" />
              <div>
                <div className="font-semibold text-custom-xl text-dark mb-1">{bet.name}</div>
                <div className="text-xs text-gray-600 my-1">{bet.promo}</div>
                <div className="flex items-center text-yellow-500 text-sm">
                  <StarRating rating={bet.rating} />
                </div>
                <div className="flex gap-3 text-xs text-gray-500 mt-2">
                  {bet.acceptsPix && <span className="px-2 py-1 bg-gray-100 rounded-full">Aceita Pix</span>}
                  {bet.hasApp && <span className="px-2 py-1 bg-gray-100 rounded-full">Possui App</span>}
                </div>
              </div>
            </div>
            <button className="bg-primary text-white mr-5 px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
              Cadastre-se
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
