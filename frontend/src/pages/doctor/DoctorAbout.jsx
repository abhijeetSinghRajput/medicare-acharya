import CountUp from "@/components/CountUp/CountUp";
import { Highlighter } from "@/components/magicui/highlighter";
import ShinyText from "@/components/ShinyText/ShinyText";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatNumberWithSuffix } from "@/lib/utils";
import {
  Activity,
  Clock,
  HeartPulse,
  MessageCircleMoreIcon,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";

const cardDetails = [
  {
    heading: "24/7 Availability",
    icon: Clock,
    value: 100,
    suffix: "%",
    description: "Emergency support",
  },
  {
    heading: "Patient Satisfaction",
    icon: HeartPulse,
    value: 98,
    suffix: "%",
    description: "Positive feedback",
  },
  {
    heading: "Consultations",
    icon: Stethoscope,
    value: 2500,
    suffix: "+",
    description: "Patients treated",
  },
  {
    heading: "Follow-up Care",
    icon: UserRoundCheck,
    value: 92,
    suffix: "%",
    description: "Retention rate",
  },
];

const DoctorAbout = () => {
  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 lg:gap-12">
        {/* Stats Cards */}
        <div className="order-2 grid grid-cols-2 gap-4 md:gap-6">
          {cardDetails.map((detail, index) => (
            <ServiceCard
              key={index}
              heading={detail.heading}
              Icon={detail.icon}
              value={detail.value}
              suffix={detail.suffix}
              description={detail.description}
            />
          ))}
        </div>

        {/* About Content */}
        <div className="order-1 lg:order-2">
          <div className="text-center lg:text-left flex flex-col items-center mb-16">
            <h3 className="text-4xl md:text-5xl font-medium mb-4">
              Exceptional Care From{" "}
              <Highlighter
                action="underline"
                color="#fff"
                strokeWidth={2}
                className="inline-block"
              >
                <strong className="font-medium text-[#a365ff]">
                  Board-Certified
                </strong>
              </Highlighter>{" "}
              Specialists
            </h3>

            <ShinyText
              className="text-base max-w-2xl"
              text="Our physician team combines advanced medical expertise with compassionate patient-centered care for optimal health outcomes."
              speed={3}
            />
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            With over <CountUp to={15} duration={2} />+ years of experience in
            internal medicine, I am dedicated to providing personalized,
            evidence-based care to each of my patients. My approach combines the
            latest medical research with a compassionate bedside manner to
            ensure the best possible outcomes.
          </p>

          {/* Animated Stats */}
          <div className="flex gap-4 py-8">
            <StatItem to={15} suffix="+" label="Years Experience" />
            <StatItem to={5000} suffix="+" label="Patients Helped" />
            <StatItem to={100} suffix="%" label="Board Certified" />
          </div>
        </div>
      </div>
    </div>
  );
};

function ServiceCard({ heading, Icon, value, suffix, description }) {
  const { number, suffix: s } = formatNumberWithSuffix(value);
  return (
    <Card className="h-full bg-accent/30 transition-all hover:shadow-lg hover:-translate-y-1 rounded-3xl relative">
      <CardHeader className="flex flex-col items-start gap-2 sm:gap-4">
        <Badge
          variant="outline"
          className="rounded-full aspect-square flex items-center justify-center size-10 sm:size-12 p-2 bg-purple-500/10 border-purple-500/30 text-purple-400"
        >
          <Icon className="w-5 h-5" />
        </Badge>
        <div>
          <CardTitle className="text-lg font-semibold">{heading}</CardTitle>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-1">
          <div className="text-2xl">
            <CountUp to={number} duration={1.5} />
            <span>{s}</span>
          </div>
          <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
            {suffix}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

function StatItem({ to, suffix, label }) {
  const { number, suffix: s } = formatNumberWithSuffix(to);

  return (
    <div>
      <div className="flex items-end gap-1">
        <div className="text-4xl md:text-5xl font-medium">
          <CountUp to={number} duration={1.5} />
          <span className="">{s}</span>
        </div>
        <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
          {suffix}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

export default DoctorAbout;
