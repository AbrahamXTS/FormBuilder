import { Select } from "@mantine/core";

import { Question } from "@/types";

interface SelectFieldProps
  extends Required<Pick<Question, "possibleAnswers">> {}

export const SelectField = ({ possibleAnswers }: SelectFieldProps) => {
  return (
    <Select data={possibleAnswers} placeholder="Elige una opción" searchable />
  );
};
