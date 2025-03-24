import { Question } from "@/types";
import { Rating } from "@mantine/core";

interface ScoreFieldProps extends Required<Pick<Question, "possibleAnswers">> {}

export const ScoreField = ({ possibleAnswers }: ScoreFieldProps) => {
  return <Rating count={possibleAnswers.length} size="md" />;
};
