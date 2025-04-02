import { TextInput } from "@mantine/core";

import { AnswerFieldProps } from "./AnswerFieldProps";

interface ShortAnswerFieldProps extends AnswerFieldProps {}

export const ShortAnswerField = ({
  formHandler: form,
  id,
}: ShortAnswerFieldProps) => {
  return (
    <TextInput
      key={form.key(id)}
      placeholder="Tu respuesta"
      {...form.getInputProps(id)}
    />
  );
};
