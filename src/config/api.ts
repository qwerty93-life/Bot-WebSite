export const API_CONFIG = {
  BASE_URL: 'https://xnvd.itermitas.com/',
  ENDPOINTS: {
    BOT_INFO: '/bot-info'
  },
  DEFAULT_HEADERS: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
} as const;
