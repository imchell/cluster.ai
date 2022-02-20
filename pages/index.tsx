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
} from '@mantine/core';
import { PageSwitcher } from './components/PageSwitcher';
import { Display } from './components/FileDisplay';

export default function HomePage() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
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
      <Display />
    </AppShell>
  );
}
