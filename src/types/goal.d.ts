
export interface GoalContribution {
  id: string;
  amount: number;
  date: string;
}

export interface Goal {
  id: string;
  name: string;
  target: number;
  current: number;
  deadline: string;
  category: string;
  startDate: string;
  linkedFund: string | null;
  contributions: GoalContribution[];
}
