import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Experiment} from '../components/experiment';
import {useVersion} from '../util/use-version';
import {BaseProvider, DarkTheme} from 'baseui';
import {Provider as StyletronProvider} from 'styletron-react';
import { Client, Server } from "styletron-engine-atomic";

const engine =
  typeof window === 'undefined'
    ? new Server()
    : new Client();

export default function Home() {
  const version = useVersion()

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
            <title>Emotion Communication Task Visit {version}</title>
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
