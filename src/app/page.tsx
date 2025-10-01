import Info from "@/components/landing/info";
import { PLANS } from "@/components/workout/plan";
import Workout from "@/components/workout/workout";

const Page = () => {
  return (
    <div className="mx-auto container p-4 space-y-6">
      <Info />

      <div className="space-y-10">
        <Workout {...PLANS[0]} />
        <Workout {...PLANS[1]} />
        <Workout {...PLANS[2]} />
        <Workout {...PLANS[3]} />
        <Workout {...PLANS[4]} />
      </div>
    </div>
  );
};

export default Page;
