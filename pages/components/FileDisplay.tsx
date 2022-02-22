import { MIME_TYPES, FullScreenDropzone, Dropzone } from '@mantine/dropzone';
import { Group, Text, Button, Paper, Center, Image, Space } from '@mantine/core';
import { useEffect, useState, useRef } from 'react';
import Gallery from './Gallery';
import { filesAtom, taskFinishedAtom } from '../../store/data';
import { useAtom } from 'jotai';
import Guide from './Guide';
import PredictionGallery from './PredictionGallery';
import { useMediaQuery } from 'react-responsive';
import PageSwitcher from './PageSwitcher';

export default function Display() {
  const [dropped, setDropped] = useState(false);
  const [files, setFiles] = useAtom(filesAtom);
  const [taskFinished, setTaskFinished] = useAtom(taskFinishedAtom);

  const [gallery, setGallery] = useState(<Gallery />);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const openRef = useRef() as React.ForwardedRef<() => void | undefined>;

  useEffect(() => {
    if (taskFinished) {
      console.log('1');
      setGallery(<PredictionGallery />);
    } else {
      console.log('2');

      setGallery(<Gallery />);
    }
  }, [taskFinished]);

  let desktopDropzone = (
    <FullScreenDropzone
      accept={[MIME_TYPES.jpeg, MIME_TYPES.png]}
      onDrop={(files) => {
        setDropped(true);
        setFiles(files);
      }}
    >
      {(status) => (
        <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
          <div>
            <Text size="xl" inline>
              Drag images here or click to select images
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      )}
    </FullScreenDropzone>
  );

  let mobileDropZone = (
    <>
      <Dropzone
        openRef={openRef}
        accept={[MIME_TYPES.jpeg, MIME_TYPES.png]}
        onDrop={(files) => {
          setDropped(true);
          setFiles(files);
        }}
      >
        {(status) => (
          <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
            <Text size="xl" inline>
              Click to select images
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </Group>
        )}
      </Dropzone>
      <PageSwitcher />
      <Space h={'lg'} />
    </>
  );

  return (
    <>
      {isMobile ? mobileDropZone : desktopDropzone}

      {dropped ? gallery : isMobile ? <></> : <Guide />}
    </>
  );
}
