export interface Column<T> {
  id: keyof T;
  label: string;
}
