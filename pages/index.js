import Head from "next/head";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luis Kameter</title>
        <meta
          name="description"
          content="Web developer, graphic designer, student."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex justify-center">
        <div className="w-full max-w-[1300px]">
          <Navbar />
          <NavbarMobile />
          <Hero />
          <Work />
          <Services />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
