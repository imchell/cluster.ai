import { MIME_TYPES, FullScreenDropzone } from '@mantine/dropzone';
import { Group, Text } from '@mantine/core';
import { useState } from 'react';
import { Gallery } from './Gallery';

export function Display() {
  const [dropped, setDropped] = useState(false);
  const [images, setImages] = useState([] as File[]);

  return (
    <>
      <FullScreenDropzone
        accept={[MIME_TYPES.jpeg, MIME_TYPES.png]}
        onDrop={(files) => {
          setDropped(true);
          setImages(files);
          console.log(files);
        }}
      >
        {(status) => (
          <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
            <div>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
              <Text size="sm" color="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed 5mb
              </Text>
            </div>
          </Group>
        )}
      </FullScreenDropzone>
      {dropped ? <Gallery files={images} /> : <Text>Drop File Here.</Text>}
    </>
  );
}
