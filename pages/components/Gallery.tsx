import { Grid, Image, Text } from '@mantine/core';
import { useRef } from 'react';

export function Gallery(props: { files: File[] }) {
  return (
    <Grid>
      {props.files.map((file) => (
        <Grid.Col span={2}>
          <Image src={URL.createObjectURL(file)} />
        </Grid.Col>
      ))}
    </Grid>
  );
}

function previewFiles(files: File[]) {
  let urls: (string | ArrayBuffer | null)[] = [];
  files.forEach((file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    urls.concat(reader.result);
  });
  return urls;
}
