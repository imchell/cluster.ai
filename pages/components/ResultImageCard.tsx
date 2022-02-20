import { Card, Image, Center, Text, useMantineTheme } from '@mantine/core';
import { useAtom } from 'jotai';
import { undecidedImgsURLsAtom, classifiedAtom } from '../store/data';

export function ResultImageCard(props: { url: string; label: string }) {
  const theme = useMantineTheme();

  return (
    <Card radius="md" style={{ backgroundColor: theme.colors.gray[0] }}>
      <Image src={props.url} height={180} />
      <Center>
        <Text>{props.label}</Text>
      </Center>
    </Card>
  );
}
