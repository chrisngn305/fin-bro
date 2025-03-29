
export interface FundTransaction {
  id: string;
  amount: number;
  date: string;
  description: string;
}

export interface Fund {
  id: string;
  name: string;
  type: string;
  balance: number;
  target: number;
  transactions: FundTransaction[];
  dueDate: string;
}
