import { FileInput } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";

export const UploadFileField = () => {
  return (
    <FileInput
      disabled
      leftSection={<IconUpload size={14} />}
      leftSectionPointerEvents="none"
      placeholder="Añadir archivo"
    />
  );
};
