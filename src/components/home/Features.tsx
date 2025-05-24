import { Shield, Settings, Music, DollarSign, Wrench, Gift, Ticket, BarChart, MessageSquare, Gamepad, Image, Bot } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "MODERATION",
    description: "Powerful moderation tools with auto-mod capabilities",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: Settings,
    title: "ADMIN TOOLS",
    description: "Fully customizable admin settings and configurations",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Music,
    title: "MUSIC",
    description: "High-quality audio playback for your server",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: DollarSign,
    title: "ECONOMY",
    description: "Advanced economy system with ranking features",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Wrench,
    title: "UTILITIES",
    description: "Comprehensive toolkit for server management",
    gradient: "from-rose-500 to-orange-500"
  },
  {
    icon: Gift,
    title: "GIVEAWAYS",
    description: "Run engaging giveaways for your community",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: Ticket,
    title: "TICKETS",
    description: "Efficient support ticket system",
    gradient: "from-amber-500 to-yellow-500"
  },
  {
    icon: BarChart,
    title: "STATISTICS",
    description: "Track and display detailed server stats",
    gradient: "from-yellow-500 to-lime-500"
  },
  {
    icon: MessageSquare,
    title: "SUGGESTIONS",
    description: "Member feedback and suggestion system",
    gradient: "from-lime-500 to-green-500"
  },
  {
    icon: Gamepad,
    title: "FUN",
    description: "Entertaining commands and mini-games",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Image,
    title: "IMAGE TOOLS",
    description: "Creative image manipulation tools",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: Bot,
    title: "AUTO SETUP",
    description: "Easy server setup and configuration",
    gradient: "from-teal-500 to-cyan-500"
  }
];

export function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] animate-float-delayed" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to create an engaging Discord community
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group feature-card"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={`w-6 h-6 text-white`} />
                    </div>
                    <h3 className="text-lg font-semibold tracking-wide">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                <div className={`mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${feature.gradient} transition-all duration-500 ease-out opacity-0 group-hover:opacity-100`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}