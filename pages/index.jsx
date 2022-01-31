import Head from "next/head";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>Google Search</title>
        <link rel="icon" href="/images/download.png" />
      </Head>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
