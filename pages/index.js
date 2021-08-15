import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Experiment} from '../components/experiment';
import {BaseProvider, DarkTheme} from 'baseui';
import {Provider as StyletronProvider} from 'styletron-react';
import { Client, Server } from "styletron-engine-atomic";

const engine =
  typeof window === 'undefined'
    ? new Server()
    : new Client();

export default function Home() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider overrides={{
        AppContainer: {
          style: {
            height: '100%',
          }
        }
      }} theme={DarkTheme}>
        <div className={styles.container}>
          <Head>
            <title>Family Flex EFT</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <Experiment />
          </main>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}
