export interface FooterLink {
  label: string;
  url: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface SiteConfig {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  
  contactEmail: string;
  supportEmail: string;
  
  socialLinks: SocialLink[];
  
  footerLinks: {
    resources: FooterLink[];
    legal: FooterLink[];
    contact: FooterLink[];
  };
  
  botName: string;
  botDescription: string;
  botVersion: string;
  totalServers: number;
  totalUsers: number;
  botAvatarUrl?: string;
  
  features: {
    enableCommands: boolean;
    enableDashboard: boolean;
  };
}

// Default configuration
export const siteConfig: SiteConfig = {
  botName: "XNVD Bot", //hero
  botDescription: "A powerful Discord bot that brings advanced features and seamless automation to your server.",
  botVersion: "1.0.4",
  totalServers: 30,
  totalUsers: 11, // 11 = 11k to remove the k, go in components/home/hero.tsx and remove/change the K at line 72
  botAvatarUrl: "https://cdn.discordapp.com/avatars/1340384312272359476/a_6c218dbfc661090e4ddb8e73a1e2a601.gif?size=256?size=512",
  
  contactEmail: "soon",
  supportEmail: "soon",
  
  socialLinks: [
    {
      platform: "Discord", //don't change
      url: "https://discord.gg/xJjMEyqHpc",
    },
  ],
  
  footerLinks: {
    contact: [
      { label: "Itermitas", url: "https://itermitas.com/" }, // u can change this
      { label: "Panel", url: "https://panel.itermitas.com" } // i let you figure this out
    ],
    resources: [
      { label: "Documentation", url: "https://docs.domain.com" },
      { label: "Blog", url: "domain.com" },
      { label: "Support", url: "https://discord.gg/xJjMEyqHpc" }
    ],
    legal: [
      { label: "Privacy Policy", url: "/privacy" },
      { label: "Terms of Service", url: "/terms" }
    ]
  },
  
  
  siteName: "XNVD", //footer
  siteDescription: "A powerful Discord bot that brings advanced features and seamless automation to your server.", //footer
  siteUrl: "https://xnvd.itermitas.com",

  features: {
    enableCommands: true,
    enableDashboard: true
  }
};

export const getSiteConfig = (): SiteConfig => {
  return siteConfig;
};

export const updateSiteConfig = (updates: Partial<SiteConfig>): SiteConfig => {
  return {
    ...siteConfig,
    ...updates
  };
}; 
