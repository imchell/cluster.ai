import { Navbar, Text, Button, Container, Space, Image } from '@mantine/core';
import { classification } from '../model/net';
import {
  fileURLsAtom,
  typesAtom,
  classifiedAtom,
  decidedImgsURLsAtom,
  undecidedImgsURLsAtom,
} from '../store/data';
import { useAtom } from 'jotai';

function handleClassificationResult(
  result: { classIndex: number; confidence: object; label: string; url: string },
  setClassifieds: Function
) {
  setClassifieds(result);
}

export function PageSwitcher() {
  const [fileURLs, setFileURLs] = useAtom(fileURLsAtom);
  const [types, setTypes] = useAtom(typesAtom);
  const [classifieds, setClassifieds] = useAtom(classifiedAtom);
  const [undecidedImgsURLs, setUndecidedImgsURLs] = useAtom(undecidedImgsURLsAtom);
  const [decidedImgsURLs, setDecidedImgsURLs] = useAtom(decidedImgsURLsAtom);

  return (
    <>
      <Image src="/logo/logo.svg" height={60} />
      <Button
        onClick={() =>
          classification(fileURLs, types, setClassifieds, setUndecidedImgsURLs, setDecidedImgsURLs)
        }
      >
        Train
      </Button>
      <Space h="md" />
      <Button>Predict</Button>
    </>
  );
}
