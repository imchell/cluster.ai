import { Grid, Image, Text, Space, useMantineTheme, Transition } from '@mantine/core';
import { useRef, useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import { filesAtom, typesAtom, fileURLsAtom } from '../../store/data';
import { useAtom } from 'jotai';

export default function Gallery() {
  const [files, setFiles] = useAtom(filesAtom);
  const [types, setTypes] = useAtom(typesAtom);
  const [fileURLs, setFileURLs] = useAtom(fileURLsAtom);

  const [opened, setOpened] = useState(false);

  const theme = useMantineTheme();

  useEffect(() => {
    setTypes(Array(files.length).fill('undecided'));
    setFileURLs(Array(files.length).fill(''));
    let newFileURLs = fileURLs;
    files.map((file, index) => {
      newFileURLs[index] = URL.createObjectURL(file);
    });
    setFileURLs(newFileURLs);
  }, [files]);

  useEffect(() => {
    setOpened(true);
  });

  return (
    <>
      <Text size="xl" weight={700} color={theme.colors.operations[3]}>
        {`Tag your images.
        Leave the ones you want to predicate untagged.`}
      </Text>
      <Space h="md" />
      <Transition mounted={opened} transition="pop" duration={400} timingFunction="ease">
        {(styles) => (
          <Grid>
            {fileURLs.map((url, index) => (
              <Grid.Col lg={2} md={3} sm={4} xs={6} key={index} style={styles}>
                <ImageCard url={url} index={index} />
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Transition>
    </>
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
