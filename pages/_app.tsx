import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, NormalizeCSS, GlobalStyles } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <MantineProvider
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          fontFamily: 'Montserrat, sans-serif',
          colors: {
            operations: [
              '#E0EAEB',
              '#8AB5BC',
              '#4C909B',
              '#2F6B75',
              '#203C41',
              '#152224',
              '#0D1315',
              '#080B0C',
              '#050607',
              '#030404',
            ],
          },
        }}
      >
        <NormalizeCSS />
        <GlobalStyles />
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
