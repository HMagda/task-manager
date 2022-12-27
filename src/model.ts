export interface Task {
  id: number;
  text: string;
  isDone: boolean;
}

export interface TaskDoneDto {
  id: number;
  isDone: boolean;
}

export interface TaskEditDto {
  id: number;
  text: string;
}
