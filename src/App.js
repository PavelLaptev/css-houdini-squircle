import React from "react";
import styles from "./app.module.scss";

import Intro from "./sections/Intro";
import CSSSection from "./sections/CSSSection";
import Scalable from "./sections/Scalable";
import JSSection from "./sections/JSSection";
import ButtonsSection from "./sections/ButtonsSection";
import BenefitsSection from "./sections/BenefitsSection";
import CanIUse from "./sections/CanIUse";
import HowItWorksSection from "./sections/HowItWorksSection";
import CompareSection from "./sections/CompareSection";
import Footer from "./sections/Footer";

(async function () {
  if (!("paintWorklet" in CSS)) {
    await import("css-paint-polyfill");
  }

  CSS.paintWorklet.addModule(
    `${process.env.PUBLIC_URL}/paintWorklet/squircle.js`
  );
})();

const App = () => {
  return (
    <div className={styles.app}>
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
    </div>
  );
};

export default App;
