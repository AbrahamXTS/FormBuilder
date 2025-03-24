"use client";

import Link from "next/link";
import { Button, Center, Stack } from "@mantine/core";

export default function Page() {
  return (
    <Center h="100vh">
      <Stack>
        <Button component={Link} href="/forms/1/edit">
          Ir a la vista de edición de formularios
        </Button>
        <Button component={Link} href="/forms/1">
          Ir a la vista del encuestado
        </Button>
      </Stack>
    </Center>
  );
}
