export type LocalizedText = { en: string; fa: string };

export type Exercise = {
  name: LocalizedText;
  sets: number;
  reps: string;
  rest: string;
  hint: LocalizedText;
};

export type DayPlan = {
  day: number;
  title: LocalizedText;
  notes: LocalizedText;
  warmup: Exercise[];
  exercises: Exercise[];
  finisher?: Exercise[];
};
