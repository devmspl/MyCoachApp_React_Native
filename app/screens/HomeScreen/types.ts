export type PieChartDataItem = {
  value: number;
  color: string;
};

export type CustomPieChartProps = {
  data: PieChartDataItem[];
  size?: number;
  innerRadius?: number;
  outerRadius?: number;
};

export type DropdownItem = { label: string; value: string };

export type CashFlowData = {
  week: { income: number; expenses: number };
  month: { income: number; expenses: number };
  year: { income: number; expenses: number };
  fiveYears: { income: number; expenses: number };
};

export interface CashFlowCardProps {
  cashFlowData: CashFlowData;
  selectedRange: 'week' | 'month' | 'year' | 'fiveYears';
  onFilterClickCB?: () => void;
}