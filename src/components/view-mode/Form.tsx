import { Container, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";

import { Answers, Form as FormType } from "@/types";

import { FormFooter } from "./FormFooter";
import { FormHeader } from "./FormHeader";
import { FormQuestion } from "./FormQuestion";

interface FormProps {
  formInformation: FormType;
}

export const Form = ({ formInformation }: FormProps) => {
  const { description, questions, title } = formInformation;

  const formHandler = useForm<Answers>({
    mode: "uncontrolled",
    initialValues: questions.reduce((answers, question) => {
      answers[question.id] = "";

      return answers;
    }, {} as Answers),
  });

  return (
    <Container my="md">
      <Stack>
        <FormHeader title={title} description={description} />

        {questions.map((question) => (
          <FormQuestion
            formHandler={formHandler}
            key={question.id}
            question={question}
          />
        ))}

        <FormFooter formHandler={formHandler} />
      </Stack>
    </Container>
  );
};
