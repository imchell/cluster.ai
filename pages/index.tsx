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
} from '@mantine/core';
import PageSwitcher from './components/PageSwitcher';
import Display from './components/FileDisplay';
import { useAtom } from 'jotai';
import { pendingAtom } from '../store/data';

export default function HomePage() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const [pending, setPending] = useAtom(pendingAtom);

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
      <LoadingOverlay
        visible={pending}
        loaderProps={{ color: theme.colors.operations[3], variant: 'bars' }}
      />
      <Display />
    </AppShell>
  );
}
