import { Bot, Sparkles, Users, Server, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
          {siteConfig.botName}
        </span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
        {siteConfig.botDescription}
      </p>

      <div className="relative mx-auto mb-6">
        <div className="w-40 h-40 rounded-full glass flex items-center justify-center mx-auto shadow-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 overflow-hidden">
          {siteConfig.botAvatarUrl ? (
            <img
              src={siteConfig.botAvatarUrl}
              alt={siteConfig.botName + ' avatar'}
              className="w-full h-full object-cover rounded-full border-4 border-white/10 shadow-lg"
            />
          ) : (
            <Bot className="w-24 h-24 text-white drop-shadow-lg" />
          )}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-60 -z-10" />
      </div>

      <div className="flex flex-col items-center gap-2 mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-gray-300">Online</span>
        </div>
        <span className="text-sm text-gray-400">Ready to serve {siteConfig.totalServers}+ servers</span>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mb-10">
        <a
          href="#"
          className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-white/10 hover:shadow-[0_0_2rem_-0.5rem_#3b82f6] transition-all duration-300 text-white font-semibold text-lg flex items-center gap-3 backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative flex items-center gap-2">
            <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            Add to Discord
          </span>
        </a>
        {siteConfig.features.enableCommands && (
          <Link
            to="/commands"
            className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-white/10 hover:shadow-[0_0_2rem_-0.5rem_#3b82f6] transition-all duration-300 text-white font-semibold text-lg flex items-center gap-3 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              View Commands
            </span>
          </Link>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-2">
        <div className="flex flex-col items-center">
          <Users className="w-8 h-8 mb-1 text-blue-400" />
          <span className="text-xl font-bold text-blue-300">{siteConfig.totalUsers}</span>
          <span className="text-xs text-gray-400">Active Users</span>
        </div>
        <div className="flex flex-col items-center">
          <Server className="w-8 h-8 mb-1 text-purple-400" />
          <span className="text-xl font-bold text-purple-300">{siteConfig.totalServers}+</span>
          <span className="text-xs text-gray-400">Servers</span>
        </div>
        <div className="flex flex-col items-center">
          <Gauge className="w-8 h-8 mb-1 text-pink-400" />
          <span className="text-xl font-bold text-pink-300">99.9%</span>
          <span className="text-xs text-gray-400">Uptime</span>
        </div>
        <div className="flex flex-col items-center">
          <Bot className="w-8 h-8 mb-1 text-indigo-400" />
          <span className="text-xl font-bold text-indigo-300">v{siteConfig.botVersion}</span>
          <span className="text-xs text-gray-400">Version</span>
        </div>
      </div>
    </section>
  );
}
