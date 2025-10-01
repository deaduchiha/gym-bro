export interface BilingualText {
  en: string;
  fa: string;
}

export interface Exercise {
  name: BilingualText;
  sets: number;
  reps: string;
  rest: string;
  hint: BilingualText;
  fst7?: boolean;
  copyText?: string;
}

export interface Warmup {
  name: BilingualText;
  sets: number;
  reps: string;
  rest: string;
  hint: BilingualText;
}

export interface Core {
  name: BilingualText;
  sets: number;
  reps: string;
  rest: string;
  hint: BilingualText;
}

export interface Cardio {
  name: BilingualText;
  sets: number;
  reps: string;
  rest: string;
  hint: BilingualText;
}

export interface Circuit {
  name: BilingualText;
  sets: number;
  reps: string;
  rest: string;
  hint: BilingualText;
}

export interface WorkoutDay {
  day: number;
  title: BilingualText;
  notes: BilingualText;
  warmup?: Warmup[];
  exercises: Exercise[];
  finisher?: Exercise[];
  core?: Core[];
  cardio?: Cardio[];
  conditioning?: Exercise[];
  accessory_circuit?: Exercise[];
  mobility?: Exercise[];
  circuit_A?: Circuit[];
  emom_B?: Circuit[];
}

export interface WorkoutPlan {
  meta: {
    client: string;
    date: string;
    goal: BilingualText;
    weekly_notes: BilingualText;
  };
  week_plan: WorkoutDay[];
  extra_guidelines: {
    nutrition: BilingualText;
    progression: BilingualText;
    recovery: BilingualText;
  };
}

export interface ExerciseRow {
  name: string;
  setsReps: string;
  tempo: string;
  rest: string;
  note: string;
  fst7?: boolean;
  copyText?: string;
}
