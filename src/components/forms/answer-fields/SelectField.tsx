import { Select } from "@mantine/core";

import { AnswerFieldProps } from "./AnswerFieldProps";

interface SelectFieldProps extends Required<AnswerFieldProps> {}

export const SelectField = ({
  formHandler: form,
  id,
  possibleAnswers,
}: SelectFieldProps) => {
  return (
    <Select
      data={possibleAnswers}
      key={form.key(id)}
      placeholder="Elige una opción"
      searchable
      {...form.getInputProps(id)}
    />
  );
};
