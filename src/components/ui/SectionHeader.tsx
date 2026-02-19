export const SectionHeader = ({
  title,
  subtitle,
  linkText,
  linkHref,
}: {
  title: string;
  subtitle?: string;
  linkText?: string;
  linkHref?: string;
}) => (
  <div className="flex flex-col py-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center flex-grow">
        <h4 className="text-2xl font-bold text-slate-800">{title}</h4>
        <div className="flex-grow h-px ml-4 bg-gradient-to-r from-slate-300 to-transparent"></div>
      </div>
      {linkText && linkHref && (
        <a
          href={linkHref}
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium whitespace-nowrap ml-4"
        >
          {linkText}
        </a>
      )}
    </div>
    {subtitle && (
      <p className="mt-1 text-base font-medium text-slate-500">{subtitle}</p>
    )}
  </div>
);
