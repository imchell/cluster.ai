import { MIME_TYPES, FullScreenDropzone } from '@mantine/dropzone';
import { Group, Text } from '@mantine/core';

export function Display() {
  return (
    <>
      <FullScreenDropzone
        accept={[MIME_TYPES.jpeg, MIME_TYPES.png]}
        onDrop={(files) => {
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
      <Text>Drop File Here.</Text>
    </>
  );
}
