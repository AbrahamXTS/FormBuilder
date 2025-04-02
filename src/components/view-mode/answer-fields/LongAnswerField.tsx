import { Textarea } from "@mantine/core";

import { AnswerFieldProps } from "./AnswerFieldProps";

interface LongAnswerFieldProps extends AnswerFieldProps {}

export const LongAnswerField = ({
  formHandler: form,
  id,
}: LongAnswerFieldProps) => {
  return (
    <Textarea
      key={form.key(id)}
      placeholder="Tu respuesta"
      {...form.getInputProps(id)}
    />
  );
};
