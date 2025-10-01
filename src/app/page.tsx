import Info from "@/components/landing/info";
import { day_1 } from "@/components/workout/plan";
import Workout from "@/components/workout/workout";

const Page = () => {
  return (
    <div className="mx-auto container p-4 space-y-6">
      <Info />

      <Workout {...day_1} />
    </div>
  );
};

export default Page;
