import Head from "next/head";
import Navigation from "./utilities/Navbar/Navbar";
import About from "./about/page";
import Education from "./education/page";
import MobilePorto from "./mobile/page";
import WebsitePorto from "./website/page";

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
