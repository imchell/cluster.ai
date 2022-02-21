import { Grid, Text, Space, useMantineTheme, Transition } from '@mantine/core';
import ResultImageCard from './ResultImageCard';
import { useAtom } from 'jotai';
import {
  undecidedImgsURLsAtom,
  classifiedAtom,
  decidedImgsTypesAtom,
  decidedImgsURLsAtom,
} from '../../store/data';
import { useEffect, useState } from 'react';

export default function PredictionGallery() {
  const [undecidedImgsURLs, setUndecidedImgsURLs] = useAtom(undecidedImgsURLsAtom);
  const [classified, setClassified] = useAtom(classifiedAtom);
  const [decidedImgsURLs, setDecidedImgsURLs] = useAtom(decidedImgsURLsAtom);
  const [decidedImgsTypes, setDecidedImgsTypes] = useAtom(decidedImgsTypesAtom);

  const theme = useMantineTheme();

  const [opened, setOpened] = useState(false);
  useEffect(() => {
    setOpened(true);
  });

  return (
    <>
      <Text size="xl" weight={700} color={theme.colors.operations[3]}>
        Prediction
      </Text>
      <Space h="md" />
      <Transition mounted={opened} transition="pop" duration={400} timingFunction="ease">
        {(styles) => (
          <Grid style={styles}>
            {undecidedImgsURLs.map((url: string, index: number) => (
              <Grid.Col lg={2} md={3} sm={4} xs={6} key={index}>
                <ResultImageCard url={url} label={classified[index].label} />
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Transition>
      <Space h="lg" />
      <Text size="xl" weight={700} color={theme.colors.operations[3]}>
        Training Set
      </Text>
      <Space h="md" />
      <Transition mounted={opened} transition="pop" duration={400} timingFunction="ease">
        {(styles) => (
          <Grid style={styles}>
            {decidedImgsURLs.map((url: string, index: number) => (
              <Grid.Col lg={2} md={3} sm={4} xs={6} key={index}>
                <ResultImageCard url={url} label={decidedImgsTypes[index]} />
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Transition>
    </>
  );
}
