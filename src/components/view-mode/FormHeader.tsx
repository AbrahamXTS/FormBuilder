import { Card, Divider, Stack, Text, Title } from "@mantine/core";

interface FormHeaderProps {
  title: string;
  description: string;
}

export const FormHeader = ({ description, title }: FormHeaderProps) => {
  return (
    <Card shadow="md" withBorder>
      <Stack>
        <Title order={2}>{title}</Title>
        <Text>{description}</Text>
        <Divider />
      </Stack>
    </Card>
  );
};
