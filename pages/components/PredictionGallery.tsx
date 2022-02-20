import { Grid } from '@mantine/core';
import { ResultImageCard } from './ResultImageCard';
import { useAtom } from 'jotai';
import { undecidedImgsURLsAtom, classifiedAtom } from '../store/data';

export function PredictionGallery() {
  const [undecidedImgsURLs, setUndecidedImgsURLs] = useAtom(undecidedImgsURLsAtom);
  const [classified, setClassified] = useAtom(classifiedAtom);

  return (
    <Grid>
      {undecidedImgsURLs.map((url: string, index: number) => (
        <Grid.Col lg={2} md={3} sm={4} xs={6} key={index}>
          <ResultImageCard url={url} label={classified[index].label} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
