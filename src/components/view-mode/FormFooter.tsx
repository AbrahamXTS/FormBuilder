import { Button, Group } from "@mantine/core";

import { FormHandler } from "@/types";

interface FormFooterProps {
  formHandler: FormHandler;
}

export const FormFooter = ({ formHandler }: FormFooterProps) => {
  return (
    <Group justify="space-between">
      <Button onClick={() => console.log(formHandler.getValues())}>
        Enviar
      </Button>
      <Button onClick={() => formHandler.reset()} variant="transparent">
        Borrar formulario
      </Button>
    </Group>
  );
};
