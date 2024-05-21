import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Datenschutz() {
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
          <Footer />
        </div>
      </main>
    </div>
  );
}
