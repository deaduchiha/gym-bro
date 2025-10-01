import { IPlan } from "@/types/type";

import { TExercise } from "@/types/type";

export const day_map = {
  1: "روز اول",
  2: "روز دوم",
  3: "روز سوم",
  4: "روز چهارم",
  5: "روز پنجم",
  6: "روز ششم",
  7: "روز هفتم",
};

type SectionKey = {
  [K in keyof IPlan]-?: IPlan[K] extends TExercise[] | undefined ? K : never;
}[keyof IPlan];

type SectionDef = {
  key: SectionKey;
  title: string; // localized label for the UI
};

export const SECTIONS: SectionDef[] = [
  { key: "warmup", title: "گرم کردن" },
  { key: "exercises", title: "حرکات اصلی" },
  { key: "core", title: "هسته" },
  { key: "cardio", title: "کاردیو" },
  { key: "conditioning", title: "تمرینات حیاتی" },
  { key: "accessory_circuit", title: "حرکات اضافی" },
  { key: "mobility", title: "حرکات موبیلیتی" },
  { key: "circuit_A", title: "حرکات اصلی" },
  { key: "emom_B", title: "حرکات اصلی" },
  { key: "finisher", title: "فینشر" },
];

export function hasItems<K extends SectionKey>(
  plan: IPlan,
  key: K
): plan is IPlan & Record<K, TExercise[]> {
  const items = plan[key] as TExercise[] | undefined;
  return Array.isArray(items) && items.length > 0;
}
