
const bettingData = [
  {
    rank: '01',
    name: 'Novibet',
    rating: 4.8,
    promo: '100% até R$100 Cashback',
    logo: './images/bet-brands/novibet.svg',
    acceptsPix: true,
    hasApp: true,
  },
  {
    rank: '02',
    name: 'BetMGM',
    rating: 4.9,
    promo: 'Lucro Turbinado!',
    logo: './images/bet-brands/betmgm.svg',
    acceptsPix: true,
    hasApp: false,
  },
  {
    rank: '03',
    name: 'SuperBet',
    rating: 4.8,
    promo: 'Melhores Promoções e Missões Diárias',
    logo: './images/bet-brands/superbet.svg',
    acceptsPix: true,
    hasApp: true,
  },
];

export default function BettingCardList() {
  return (
    <div className="bg-white py-10 max-w-4xl max-w-[1170px] mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Top Casas de Apostas</h2>
      <div className="space-y-4">
        {bettingData.map((bet) => (
          <div
            key={bet.name}
            className="flex items-center justify-between bg-gray-50 rounded-xl shadow-sm p-4 hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-400 font-bold text-lg">{bet.rank}</span>
              <img src={bet.logo} alt={bet.name} className="w-14 h-14 rounded-full object-contain bg-white border" />
              <div>
                <div className="text-gray-900 font-medium text-lg">{bet.name}</div>
                <div className="flex items-center text-yellow-500 text-sm">
                  {'★'.repeat(Math.floor(bet.rating))}{' '}
                  <span className="ml-2 text-gray-500 font-normal">{bet.rating} / 5</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">{bet.promo}</div>
                <div className="flex gap-3 text-xs text-gray-500 mt-2">
                  {bet.acceptsPix && <span className="px-2 py-1 bg-gray-100 rounded-full">Aceita Pix</span>}
                  {bet.hasApp && <span className="px-2 py-1 bg-gray-100 rounded-full">Possui App</span>}
                </div>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
              Cadastre-se
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
