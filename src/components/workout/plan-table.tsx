import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TExercise } from "@/types/type";

const PlanTable = ({ workout }: { workout: TExercise[] }) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="[&>:not(:last-child)]:py-4 ">
            <TableHead>حرکت</TableHead>
            <TableHead>تعداد</TableHead>
            <TableHead>تکرارهای</TableHead>
            <TableHead>استراحت</TableHead>
            <TableHead>نکته</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workout.map((item) => (
            <TableRow key={item.name.fa}>
              <TableCell className="space-y-2">
                <p>{item.name.fa}</p>
                <p>{item.name.en}</p>
              </TableCell>
              <TableCell>{item.sets}</TableCell>
              <TableCell>{item.reps}</TableCell>
              <TableCell>{item.rest}</TableCell>
              <TableCell>{item.hint}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PlanTable;

const programmingLanguages = [
  {
    id: "1",
    name: "JavaScript",
    releaseYear: "1995",
    developer: "Brendan Eich",
    typing: "Dynamic",
    paradigm: "Multi-paradigm",
    extension: ".js",
    latestVersion: "ES2021",
    popularity: "High",
  },
  {
    id: "2",
    name: "Python",
    releaseYear: "1991",
    developer: "Guido van Rossum",
    typing: "Dynamic",
    paradigm: "Multi-paradigm",
    extension: ".py",
    latestVersion: "3.10",
    popularity: "High",
  },
  {
    id: "3",
    name: "Java",
    releaseYear: "1995",
    developer: "James Gosling",
    typing: "Static",
    paradigm: "Object-oriented",
    extension: ".java",
    latestVersion: "17",
    popularity: "High",
  },
  {
    id: "4",
    name: "C++",
    releaseYear: "1985",
    developer: "Bjarne Stroustrup",
    typing: "Static",
    paradigm: "Multi-paradigm",
    extension: ".cpp",
    latestVersion: "C++20",
    popularity: "High",
  },
  {
    id: "5",
    name: "Ruby",
    releaseYear: "1995",
    developer: "Yukihiro Matsumoto",
    typing: "Dynamic",
    paradigm: "Multi-paradigm",
    extension: ".rb",
    latestVersion: "3.0",
    popularity: "Low",
  },
];
