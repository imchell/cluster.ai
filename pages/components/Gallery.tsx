import { Grid, Image, Text } from '@mantine/core';
import { useRef, useEffect } from 'react';
import { ImageCard } from './ImageCard';
import { filesAtom, typesAtom } from '../store/data';
import { useAtom } from 'jotai';

export function Gallery() {
  const [files, setFiles] = useAtom(filesAtom);
  const [types, setTypes] = useAtom(typesAtom);

  useEffect(() => {
    setTypes(Array(files.length).fill('undecided'));
  }, [files]);

  return (
    <Grid>
      {files.map((file, index) => (
        <Grid.Col span={2} key={index}>
          <ImageCard url={URL.createObjectURL(file)} index={index} />
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
