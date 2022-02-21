import { useState } from 'react';
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
  Image,
  LoadingOverlay,
  Modal,
  Button,
  Space,
  Center,
  Group,
} from '@mantine/core';
import PageSwitcher from './components/PageSwitcher';
import Display from './components/FileDisplay';
import { useAtom } from 'jotai';
import { pendingAtom, errorAtom } from '../store/data';

export default function HomePage() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const [pending, setPending] = useAtom(pendingAtom);
  const [error, setError] = useAtom(errorAtom);

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      style={{
        backgroundColor: theme.colors.operations[0],
      }}
      navbar={
        <Navbar
          padding="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 300, lg: 300 }}
          style={{ border: '0', backgroundColor: theme.colors.operations[0] }}
        >
          <PageSwitcher />
        </Navbar>
      }
    >
      <Modal centered={true} opened={error} onClose={() => location.reload()} title="Error">
        <Text>Oops! Something went wrong. Please refresh cluster.ai.</Text>
        <Space h={'md'} />
        <Group position="right" grow>
          <Button
            onClick={() =>
              window.open('https://github.com/imchell/cluster.ai/issues', '_blank')?.focus()
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
            file a bug
          </Button>
          <Button
            onClick={() => location.reload()}
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
            refresh anyway
          </Button>
        </Group>
      </Modal>
      <LoadingOverlay
        visible={pending}
        loaderProps={{ color: theme.colors.operations[3], variant: 'bars' }}
      />
      <Display />
    </AppShell>
  );
}
