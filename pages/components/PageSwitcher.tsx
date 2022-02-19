import { Navbar, Text, Button, Container, Space } from '@mantine/core';
import { classification } from '../model/net';
import { fileURLsAtom, typesAtom } from '../store/data';
import { useAtom } from 'jotai';

export function PageSwitcher() {
  const [fileURLs, setFileURLs] = useAtom(fileURLsAtom);
  const [types, setTypes] = useAtom(typesAtom);

  return (
    <>
      <Button onClick={() => classification(fileURLs, types)}>Train</Button>
      <Space h="md" />
      <Button>Predict</Button>
    </>
  );
}
