import Head from "next/head";
import Coop from "../components/Coop";
import Explain1 from "../components/Explain1";
import Explain2 from "../components/Explain2";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Join from "../components/Join";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eduquality</title>
        <meta
          name="description"
          content="Dein online Nachhilfe Netzwerk, für alle zugänglich"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex justify-center">
        <div className="w-full max-w-[1200px]">
          <Navbar />
          <Hero />
          <Coop />
          <Explain1 />
          <Info />
          <Explain2 />
          <Join />
          <FAQ />
          <Footer />
        </div>
      </main>
    </div>
  );
}
