import Head from "next/head";

import Intro from "@/sections/Intro";
import CSSSection from "@/sections/CSSSection";
import Scalable from "@/sections/Scalable";
import JSSection from "@/sections/JSSection";
import ButtonsSection from "@/sections/ButtonsSection";
import BenefitsSection from "@/sections/BenefitsSection";
import CanIUse from "@/sections/CanIUse";
import HowItWorksSection from "@/sections/HowItWorksSection";
import CompareSection from "@/sections/CompareSection";
import Footer from "@/sections/Footer";

import styles from "./app.module.scss";

// (async function () {
//   if (!("paintWorklet" in CSS)) {
//     await import("css-paint-polyfill");
//   }

//   CSS.paintWorklet.addModule(
//     `${process.env.PUBLIC_URL}/paintWorklet/squircle.js`
//   );
// })();

export default function Home() {
  return (
    <>
      <Head>
        <title>Squircle CSS Houdini</title>
        <meta
          name="description"
          content="A tiny CSS Houdini module that allows to add a squircle shape to HTML elements"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon-32x32.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon192x192.png"
        />
      </Head>
      <main className={styles.app}>
        <Intro />
        <CSSSection />
        <Scalable />
        <HowItWorksSection />
        <JSSection />
        <ButtonsSection />
        <BenefitsSection />
        <CanIUse />
        <CompareSection />
        <Footer />
      </main>
    </>
  );
}
