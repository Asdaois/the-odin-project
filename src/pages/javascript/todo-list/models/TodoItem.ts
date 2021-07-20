export enum Priority {
  LOW,
  MEDIUM,
  HIGH,
}
export default interface TodoItem {
  id: any;
  name: string;
  dueDate: Date | number;
  note: string;
  priority: Priority;
}
