export type TableCellProps = {
  col: number;
  row: number;
  enabled: boolean;
  onClick: (col: number, row: number) => void;
  onMouseEnter: (col: number, row: number) => void;
};
