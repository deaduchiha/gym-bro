export type TDays = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type TExercise = {
  name: Record<"en" | "fa", string>;
  sets: number;
  reps: string;
  rest: string;
  hint: string;
};

export interface IPlan {
  day: TDays;
  title: Record<"en" | "fa", string>;
  notes: string;
  warmup?: TExercise[];
  exercises?: TExercise[];
  core?: TExercise[];
  cardio?: TExercise[];
  finisher?: TExercise[];
  conditioning?: TExercise[];
  accessory_circuit?: TExercise[];
  mobility?: TExercise[];
  circuit_A?: TExercise[];
  emom_B?: TExercise[];
}
