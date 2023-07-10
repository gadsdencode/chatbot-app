import Head from 'next/head';
import { Chatbot } from '../components/Chatbot.js';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chatbot App</title>
        <meta name="description" content="Next.js React AI Chatbot Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Chatbot />
      </main>
    </div>
  );
}
