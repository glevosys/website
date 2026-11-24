import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JobMeta from "../components/Careers/JobMeta";
import { fadeUp } from "../components/Careers/animations";
import { useLanguage } from "../i18n/LanguageContext";

const CareerDetail = () => {
  const { t } = useLanguage();
  const { slug } = useParams();
  const job = t.careers.jobs.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (job) document.title = `${job.title} — GlevoSys`;
  }, [job]);

  if (!job) return <Navigate to="/careers" replace />;

  const subject = job.apply.subject.split(" — ")[0];
  const mailto = `mailto:info@glevosys.com?subject=${encodeURIComponent(
    `${subject} — `,
  )}`;
  const applyButtonClass =
    "inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0015CC] px-6 py-3.5 font-semibold text-white hover:bg-[#0011A3] transition-colors";

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="container mx-auto px-6 lg:px-12 pt-10 md:pt-14 pb-20 lg:pb-32">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#0015CC] transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.careers.backToList}
          </Link>

          <motion.article
            className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <header className="p-8 lg:p-12 border-b border-gray-100">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                {job.category}
              </span>
              <h1 className="mt-3 mb-6 text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
                {job.title}
              </h1>
              <JobMeta meta={job.meta} />
              <a href={mailto} className={`lg:hidden mt-6 ${applyButtonClass}`}>
                <Mail className="h-5 w-5" />
                {t.careers.applyCta}
              </a>
            </header>

            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-8 p-8 lg:p-12 space-y-10">
                {[job.about, job.role].map((section) => (
                  <section key={section.title}>
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    <div className="space-y-4 text-gray-600 text-base lg:text-lg leading-relaxed">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    {job.role.stackLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.role.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {job.lists.map((list) => (
                  <section key={list.title}>
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                      {list.title}
                    </h2>
                    <ul className="space-y-3">
                      {list.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start text-gray-600 text-base lg:text-lg leading-relaxed"
                        >
                          <span className="mt-2.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              <aside className="lg:col-span-4 p-8 lg:p-12 bg-gray-50/60 lg:border-l border-t lg:border-t-0 border-gray-100">
                <div className="lg:sticky lg:top-32 space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    {job.apply.title}
                  </h2>
                  <p className="text-gray-600">{job.apply.intro}</p>
                  <ul className="space-y-3">
                    {job.apply.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start text-gray-600 leading-relaxed"
                      >
                        <span className="mt-2.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">
                      {job.apply.subjectLabel}
                    </span>{" "}
                    {job.apply.subject}
                  </p>
                  <a href={mailto} className={applyButtonClass}>
                    <Mail className="h-5 w-5" />
                    {t.careers.applyCta}
                  </a>
                </div>
              </aside>
            </div>
          </motion.article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CareerDetail;
