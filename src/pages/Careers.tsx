import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JobMeta from "../components/Careers/JobMeta";
import { fadeUp } from "../components/Careers/animations";
import { useLanguage } from "../i18n/LanguageContext";

const Careers = () => {
  const { t } = useLanguage();
  const { jobs } = t.careers;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = t.careers.pageTitle;
  }, [t.careers.pageTitle]);

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-white via-blue-50/30 to-white">
        <section className="container mx-auto px-6 lg:px-12 pt-16 pb-12 md:pt-24 md:pb-16">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-sm font-semibold text-blue-700">
                {t.careers.badge}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              {t.careers.title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              {t.careers.intro}
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 lg:px-12 pb-20 lg:pb-32">
          <h2 className="flex items-center gap-3 text-xl lg:text-2xl font-bold text-gray-900 mb-6">
            {t.careers.openPositionsTitle}
            <span className="inline-flex items-center justify-center min-w-8 h-8 px-2 rounded-full bg-[#0015CC] text-white text-sm font-bold">
              {jobs.length}
            </span>
          </h2>
          <ul className="space-y-6">
            {jobs.map((job, index) => (
              <motion.li
                key={job.slug}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/careers/${job.slug}`}
                  className="group block bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 p-8 lg:p-10"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                        {job.category}
                      </span>
                      <h3 className="mt-2 text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-[#0015CC] transition-colors">
                        {job.title}
                      </h3>
                      <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
                        {job.role.paragraphs[0]}
                      </p>
                      <div className="mt-5">
                        <JobMeta meta={job.meta} />
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 self-start lg:self-center rounded-full border-2 border-[#0015CC] px-6 py-3 font-semibold text-[#0015CC] group-hover:bg-[#0015CC] group-hover:text-white transition-colors">
                      {t.careers.viewJob}
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Careers;
