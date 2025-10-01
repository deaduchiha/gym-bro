import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IPlan, TExercise } from "@/types/type";
import { Badge } from "../ui/badge";
import PlanTable from "./plan-table";
import { day_map, hasItems, SECTIONS } from "@/lib/helper";

const Workout = (plan: IPlan) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{day_map[plan.day]}</CardTitle>
        <CardDescription>
          <p>{plan.title.fa}</p>
          <p>{plan.title.en}</p>
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {SECTIONS.map(({ key, title }) => {
          if (!hasItems(plan, key)) return null;
          const items = plan[key]; // strongly typed as TExercise[] due to guard
          return (
            <WorkoutCard
              key={key}
              title={title}
              // `WorkoutCard` expects prop name `warmup` for the list,
              // so we pass items there. If you can, rename the prop to `items`.
              warmup={items}
            />
          );
        })}
      </CardContent>

      <CardFooter className="flex gap-2 text-sm">
        نکته: <span className="text-muted-foreground">{plan.notes}</span>
      </CardFooter>
    </Card>
  );
};

export default Workout;

const WorkoutCard = ({
  title,
  warmup,
}: {
  warmup: TExercise[];
  title: string;
}) => (
  <div className="border bg-muted rounded-lg">
    <Badge className="m-3">{title}</Badge>

    <PlanTable workout={warmup} />
  </div>
);
