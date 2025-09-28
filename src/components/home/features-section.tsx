import { TrendingUp, CheckCircle, Lightbulb, Globe } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Proven Expertise",
    description: "Years of experience in crypto trading & digital asset management",
  },
  {
    icon: CheckCircle,
    title: "Transparency First",
    description: "Clear strategies, open communication, long-term trust",
  },
  {
    icon: Lightbulb,
    title: "Smart Innovation",
    description: "AI-driven insights to maximize returns",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Join a network of forward-thinking investors",
  },
]

export default function FeaturesSection() {
  return (
    <section id="#features" className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
