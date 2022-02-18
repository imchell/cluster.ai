import { Grid } from '@mantine/core';

export function Gallery(props: { files: File[] }) {
  return (
    <Grid>
      {props.files.map((file) => (
        <Grid.Col span={2}>1</Grid.Col>
      ))}
    </Grid>
  );
}
