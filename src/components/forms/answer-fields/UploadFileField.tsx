import { FileInput } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";

import { AnswerFieldProps } from "./AnswerFieldProps";

interface UploadFileFieldProps extends AnswerFieldProps {}

export const UploadFileField = ({
  formHandler: form,
  id,
}: UploadFileFieldProps) => {
  return (
    <FileInput
      key={form.key(id)}
      leftSection={<IconUpload size={14} />}
      leftSectionPointerEvents="none"
      placeholder="Añadir archivo"
      {...form.getInputProps(id)}
    />
  );
};
