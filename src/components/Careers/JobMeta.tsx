import { Clock, MapPin, Users } from "lucide-react";

const metaIcons = [MapPin, Clock, Users];

type JobMetaProps = {
  meta: { label: string; value: string }[];
};

const JobMeta = ({ meta }: JobMetaProps) => (
  <dl className="flex flex-wrap gap-3">
    {meta.map((item, index) => {
      const Icon = metaIcons[index % metaIcons.length];
      return (
        <div
          key={item.label}
          className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm"
        >
          <Icon className="h-4 w-4 text-blue-600" />
          <dt className="sr-only">{item.label}</dt>
          <dd className="text-gray-700 font-medium">{item.value}</dd>
        </div>
      );
    })}
  </dl>
);

export default JobMeta;
