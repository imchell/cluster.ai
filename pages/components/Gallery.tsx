import { Grid, Image, Text } from '@mantine/core';
import { useRef } from 'react';
import { ImageCard } from './ImageCard';
import { filesAtom } from '../store/data';
import { useAtom } from 'jotai';

export function Gallery() {
  const [files, setFiles] = useAtom(filesAtom);
  // setFiles(props.files);
  return (
    <Grid>
      {files.map((file) => (
        <Grid.Col span={2}>
          <ImageCard url={URL.createObjectURL(file)} />
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
