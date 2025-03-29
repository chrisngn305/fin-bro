
interface InvestmentAsset {
  id: string;
  name: string;
  symbol: string;
  type: string;
  value: number;
  shares: number;
  price: number;
  costBasis: number;
  return: number;
  returnPercentage: number;
  lastUpdated: string;
  history: {
    date: string;
    value: number;
  }[];
}
