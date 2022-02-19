import { Grid, Image, Text } from '@mantine/core';
import { useRef, useEffect } from 'react';
import { ImageCard } from './ImageCard';
import { filesAtom, typesAtom, fileURLsAtom } from '../store/data';
import { useAtom } from 'jotai';

export function Gallery() {
  const [files, setFiles] = useAtom(filesAtom);
  const [types, setTypes] = useAtom(typesAtom);
  const [fileURLs, setFileURLs] = useAtom(fileURLsAtom);

  useEffect(() => {
    setTypes(Array(files.length).fill('undecided'));
    setFileURLs(Array(files.length).fill(''));
    let newFileURLs = fileURLs;
    files.map((file, index) => {
      newFileURLs[index] = URL.createObjectURL(file);
    });
    setFileURLs(newFileURLs);
  }, [files]);

  return (
    <Grid>
      {fileURLs.map((url, index) => (
        <Grid.Col span={2} key={index}>
          <ImageCard url={url} index={index} />
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
