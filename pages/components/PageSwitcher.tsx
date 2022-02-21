import {
  Navbar,
  Text,
  Button,
  Container,
  Space,
  Image,
  useMantineTheme,
  Transition,
  Center,
} from '@mantine/core';
import classification from '../../model/net';
import {
  fileURLsAtom,
  typesAtom,
  classifiedAtom,
  decidedImgsURLsAtom,
  undecidedImgsURLsAtom,
  taskFinishedAtom,
  pendingAtom,
  decidedImgsTypesAtom,
} from '../../store/data';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

function handleClassificationResult(
  result: { classIndex: number; confidence: object; label: string; url: string },
  setClassifieds: Function
) {
  setClassifieds(result);
}

export default function PageSwitcher() {
  const [fileURLs, setFileURLs] = useAtom(fileURLsAtom);
  const [types, setTypes] = useAtom(typesAtom);
  const [classifieds, setClassifieds] = useAtom(classifiedAtom);
  const [undecidedImgsURLs, setUndecidedImgsURLs] = useAtom(undecidedImgsURLsAtom);
  const [decidedImgsURLs, setDecidedImgsURLs] = useAtom(decidedImgsURLsAtom);
  const [taskFinished, setTaskFinished] = useAtom(taskFinishedAtom);
  const [pending, setPending] = useAtom(pendingAtom);
  const [decidedImgsTypes, setDecidedImgsTypes] = useAtom(decidedImgsTypesAtom);

  // const theme = useMantineTheme();

  return (
    <>
      <Image src="/logo/logo.svg" height={60} />
      <Space h={40} />
      <Center>
        <Button
          onClick={() =>
            classification(
              fileURLs,
              types,
              setClassifieds,
              setUndecidedImgsURLs,
              setDecidedImgsURLs,
              setPending,
              setTaskFinished,
              setDecidedImgsTypes
            )
          }
          radius="md"
          size="md"
          styles={(theme) => ({
            root: {
              backgroundColor: theme.colors.operations[3],
              height: '40px',
              top: '0px',
              '&:hover': {
                backgroundColor: theme.colors.operations[2],
                top: '-6px',
              },
              '&:active': {
                backgroundColor: theme.colors.operations[4],
                top: '0px',
              },
              width: '90%',
              transition: '0.2s',
            },
          })}
        >
          predict
        </Button>
      </Center>
      <Space h="md" />
      <Center>
        <Button
          onClick={() => setTaskFinished(false)}
          radius="md"
          size="md"
          styles={(theme) => ({
            root: {
              backgroundColor: theme.colors.operations[3],
              height: '40px',
              top: '0px',
              '&:hover': {
                backgroundColor: theme.colors.operations[2],
                top: '-6px',
              },
              '&:active': {
                backgroundColor: theme.colors.operations[4],
                top: '0px',
              },
              width: '90%',
              transition: '0.2s',
            },
          })}
        >
          clear
        </Button>
      </Center>
    </>
  );
}
