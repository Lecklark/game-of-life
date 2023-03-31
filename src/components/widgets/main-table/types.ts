export type MainTableProps = {
  tableState: { col: number; row: number; enabled: boolean }[];
  onCellChange: (row: number, col: number) => void;
};
