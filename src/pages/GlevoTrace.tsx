import { useEffect } from "react";
import Demo from "../components/GlevoTrace/Demo";
import Hero from "../components/GlevoTrace/Hero";
import Pilot from "../components/GlevoTrace/Pilot";
import { Problem, Promises, Strengths, WhatsApp } from "../components/GlevoTrace/Sections";
import TraceFooter from "../components/GlevoTrace/TraceFooter";
import TraceHeader from "../components/GlevoTrace/TraceHeader";
import Videos from "../components/GlevoTrace/Videos";
import { useLanguage } from "../i18n/LanguageContext";

const GlevoTrace = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const previous = document.title;
    document.title = t.glevotrace.meta;
    return () => {
      document.title = previous;
    };
  }, [t.glevotrace.meta]);

  return (
    <>
      <TraceHeader />
      <main>
        <Hero />
        <Strengths />
        <Videos />
        <Problem />
        <Promises />
        <Demo />
        <WhatsApp />
        <Pilot />
      </main>
      <TraceFooter />
    </>
  );
};

export default GlevoTrace;
