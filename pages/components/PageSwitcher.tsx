import { Navbar, Text, Button, Container, Space } from '@mantine/core';

export function PageSwitcher() {
  return (
    <>
      <Button>Label</Button>
      <Space h="md" />
      <Button>Train</Button>
      <Space h="md" />
      <Button>Predict</Button>
    </>
  );
}
