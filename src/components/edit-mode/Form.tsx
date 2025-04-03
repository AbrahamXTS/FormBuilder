import { Container, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";

import { Form as FormType } from "@/types";

import { FormHeader } from "./FormHeader";
import { Question } from "./Question";

interface FormProps {
  formInformation: FormType;
}

export const Form = ({ formInformation }: FormProps) => {
  const { id, description, questions, title } = formInformation;

  const formHandler = useForm<FormType>({
    initialValues: {
      id,
      title,
      description,
      questions,
    },
    onValuesChange: (values) => {
      console.log(values);
    },
  });

  return (
    <Container my="md">
      <Stack>
        <FormHeader title={title} description={description} />

        {formHandler.getValues().questions.map((question, index) => (
          <Question
            formHandler={formHandler}
            questionIndex={index}
            key={question.id}
          />
        ))}
      </Stack>
    </Container>
  );
};
