"use client";

type ExerciseRow = {
  name: string;
  setsReps: string;
  tempo: string;
  rest: string;
  note: string;
  fst7?: boolean;
  copyText?: string;
};

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { useEffect } from "react";
import { useClipboard } from "@/hooks/use-copy";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type TProps = {
  plan: ExerciseRow[];
  header?: {
    title: string;
    description?: string;
  };
  footer?: {
    title: string;
    description?: string;
  };
};

const WorkoutPlan = ({ plan, header, footer }: TProps) => {
  const { copied, copy } = useClipboard();

  useEffect(() => {
    if (copied) toast.success("متن شما با موفیت کپی شد");
  }, [copied]);

  return (
    <Card className="p-4" dir="rtl">
      <CardHeader>
        <CardTitle>{header?.title}</CardTitle>
        <CardDescription>{header?.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table dir="ltr" className=" text-right">
            <TableHeader>
              <TableRow>
                <TableHead>حرکت</TableHead>
                <TableHead className="text-right whitespace-nowrap">
                  ست × تکرار
                </TableHead>
                <TableHead>تمپو</TableHead>
                <TableHead>استراحت</TableHead>
                <TableHead>توضیح</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {plan.map((row, idx) => (
                <TableRow
                  key={idx}
                  className={row.fst7 ? "bg-muted/30" : undefined}
                >
                  <TableCell
                    className="text-left"
                    role="button"
                    onClick={() => {
                      copy(row.copyText ?? row.name);
                    }}
                  >
                    {row.name}
                    {row.fst7 ? (
                      <Badge
                        variant="secondary"
                        className="whitespace-nowrap ml-2"
                      >
                        FST-7
                      </Badge>
                    ) : null}
                  </TableCell>
                  <TableCell>{row.setsReps}</TableCell>
                  <TableCell>
                    {row.tempo === "—" ? (
                      "—"
                    ) : (
                      <span className="font-mono">{row.tempo}</span>
                    )}
                  </TableCell>
                  <TableCell>{row.rest}</TableCell>
                  <TableCell>{row.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      <CardFooter className="flex-col items-start">
        <p className="text-muted-foreground text-sm">{footer?.title}</p>
        <p className="text-muted-foreground text-sm">{footer?.description}</p>
      </CardFooter>
    </Card>
  );
};

export default WorkoutPlan;
