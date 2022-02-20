import { Card, Text, useMantineTheme, Center, Image, List, Space, Paper } from '@mantine/core';

export default function Guide() {
  const theme = useMantineTheme();

  return (
    <Center style={{ width: '100%', height: '100%' }}>
      <Paper style={{ backgroundColor: theme.colors.operations[0] }}>
        <Center>
          <Image src="/logo/album.svg" style={{ width: '300px', height: 'auto' }} />
        </Center>
        <Center>
          <Text weight={700}>
            <List type="order" style={{ color: theme.colors.operations[3] }}>
              <List.Item>drop your images here</List.Item>
              <List.Item>tag images and leave some untagged</List.Item>
              <List.Item>train and wait</List.Item>
              <List.Item>click predict to get results for those untagged</List.Item>
            </List>
          </Text>
        </Center>
      </Paper>
    </Center>
  );
}
