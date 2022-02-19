import { Navbar, Text, Button, Container, Space } from '@mantine/core';

export function PageSwitcher() {
  return (
    <>
      <Button>Train</Button>
      <Space h="md" />
      <Button>Predict</Button>
    </>
  );
}
