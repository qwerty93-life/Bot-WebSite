const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const dayjs = require('dayjs');

const app2 = express();
const port2 = 4104;

// Configure CORS properly
const corsOptions = {
  origin: [
    'https://bot-web-site-khaki.vercel.app', // Your frontend
    'http://localhost:3000' // For local development
  ],
  methods: ['GET', 'OPTIONS'], // Only allow GET requests
  allowedHeaders: ['Content-Type']
};

app2.use(cors(corsOptions));

// Add error handling middleware
app2.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

client.once('ready', () => {
  // Health check endpoint
  app2.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
  });

  app2.get('/bot-info', (req, res) => {
    try {
      const totalUsers = client.users.cache.size;
      const totalServers = client.guilds.cache.size;
      const ping = client.ws.ping;
      const command = client.commands.size;
      const channels = client.channels.cache.size;
      const versnode = process.version;
      const uptime = client.uptime;

      res.json({
        status: 'success',
        data: {
          totalUsers,
          totalServers,
          ping,
          command,
          channels,
          versnode,
          uptime,
          formattedUptime: formatUptime(uptime)
        },
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error in /bot-info:', error);
      res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      });
    }
  });

  const server = app2.listen(port2, () => { 
    console.log(
      `${chalk.white.bold(
        `${dayjs().format("DD/MM/YYYY HH:mm:ss")}`
      )} - ${chalk.blue.bold(`Casper-Tec`)} => ${chalk.blue.bold(
        `Api`
      )} - Launched On: http://localhost:${port2}`
    );
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(chalk.red(`Port ${port2} is already in use. Please use a different port.`));
      process.exit(1);
    } else {
      console.error(chalk.red(`Unexpected error: ${err.message}`));
    }
  });

  // Handle graceful shutdown
  process.on('SIGTERM', () => {
    server.close(() => {
      console.log(chalk.yellow('Server closed gracefully'));
      process.exit(0);
    });
  });
});

// Helper function to format uptime
function formatUptime(ms) {
  const seconds = Math.floor(ms / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  
  return `${days}d ${hours}h ${minutes}m ${secs}s`;
}
