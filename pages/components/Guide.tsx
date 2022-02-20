import { Card, Text, useMantineTheme } from '@mantine/core';

export function Guide() {
  const theme = useMantineTheme();

  return (
    <Card
      style={{
        backgroundColor: theme.colors.operations[0],
        width: '100%',
        height: '100%',
      }}
    >
      <Text>Drop File Here.</Text>
    </Card>
  );
}
