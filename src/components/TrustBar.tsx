import { Award, Building2, Users, MapPin, Shield } from "lucide-react";

const items = [
  {
    icon: Award,
    label: "20+ Years of Excellence",
  },
  {
    icon: Building2,
    label: "500+ Partner Clinics",
  },
  {
    icon: Users,
    label: "10L+ Patients Served",
  },
  {
    icon: MapPin,
    label: "7 Countries",
  },
  {
    icon: Shield,
    label: "AI-Powered Network",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-surface">
      <div className="max-w-7xl mx-auto px-6 xl:px-12">
        <div className="flex items-center justify-between h-[72px]">
          {items.map((item, i) => (
            <div key={item.label} className="flex-1 flex items-center justify-center gap-3 relative">
              {i > 0 && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-6 bg-gold-600" />
              )}
              <item.icon className="w-5 h-5 text-gold-500 shrink-0" strokeWidth={1.5} />
              <span className="text-[12px] font-displayans uppercase tracking-[0.14em] text-body leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
