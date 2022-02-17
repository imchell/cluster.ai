import { useState } from 'react';
import { AppShell, Burger, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core';

export default function HomePage() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar padding="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300, lg: 400 }}>
          <Text>pages</Text>
        </Navbar>
      }
      header={
        <Header height={70} padding="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Text>cluster.ai</Text>
          </div>
        </Header>
      }
    >
      <Text>App</Text>
    </AppShell>
  );
}
