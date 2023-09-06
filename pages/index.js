import Head from "next/head";
import Navigation from "./Navbar";
import About from "./About";
import Education from "./Education";
import MobilePorto from "./MobilePorto";
import WebsitePorto from "./WebsitePorto";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Audi Hagi Portofolio</title>
      </Head>
      <Navigation />
      <main className="bg-white px-10 md:px-20 lg:px-40 " id="About">
        <About />
        <Education />
        <MobilePorto />
        <WebsitePorto />
      </main>
    </div>
  );
}
