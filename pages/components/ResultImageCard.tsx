import { Card, Image, Center, Text, useMantineTheme, Space } from '@mantine/core';
import { useAtom } from 'jotai';
import { undecidedImgsURLsAtom, classifiedAtom } from '../../store/data';

export default function ResultImageCard(props: { url: string; label: string }) {
  const theme = useMantineTheme();

  return (
    <Card radius="md" style={{ backgroundColor: theme.colors.gray[0] }}>
      <Card.Section>
        <Image src={props.url} height={180} />
      </Card.Section>
      <Space h={'sm'} />
      <Center>
        <Text color={theme.colors.operations[3]} weight={700}>
          {props.label}
        </Text>
      </Center>
    </Card>
  );
}
