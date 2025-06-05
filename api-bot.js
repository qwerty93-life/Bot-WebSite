const WebSocket = require('ws');
const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const dayjs = require('dayjs');

const app2 = express();
const port2 = 4104;

// Create HTTP server for both Express and WebSocket
const server = require('http').createServer(app2);
const wss = new WebSocket.Server({ server });

// WebSocket connections storage
const clients = new Set();

wss.on('connection', (ws) => {
  clients.add(ws);
  console.log(chalk.green('New WebSocket client connected'));
  
  // Send initial data when client connects
  sendBotInfoToAllClients();
  
  ws.on('close', () => {
    clients.delete(ws);
    console.log(chalk.yellow('WebSocket client disconnected'));
  });
});

// Modify your existing CORS config to include your website
const corsOptions = {
  origin: [
    'https://xnvd.itermitas.com', // Add your website
    'https://bot-web-site-khaki.vercel.app',
    'http://localhost:3000'
  ],
  methods: ['GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
};

app2.use(cors(corsOptions));

// Function to send bot info to all connected clients
function sendBotInfoToAllClients() {
  const botInfo = getBotInfo();
  const data = JSON.stringify({
    type: 'bot-info',
    data: botInfo,
    timestamp: new Date().toISOString()
  });
  
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}

// Extract your bot info logic to a reusable function
function getBotInfo() {
  const totalUsers = client.users.cache.size;
  const totalServers = client.guilds.cache.size;
  const ping = client.ws.ping;
  const command = client.commands.size;
  const channels = client.channels.cache.size;
  const versnode = process.version;
  const uptime = client.uptime;

  return {
    totalUsers,
    totalServers,
    ping,
    command,
    channels,
    versnode,
    uptime,
    formattedUptime: formatUptime(uptime)
  };
}

// Update your existing /bot-info endpoint
app2.get('/bot-info', (req, res) => {
  try {
    res.json({
      status: 'success',
      data: getBotInfo(),
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

// Periodically update clients (optional)
setInterval(() => {
  sendBotInfoToAllClients();
}, 30000); // Update every 30 seconds

// Start the combined server
server.listen(port2, () => { 
  console.log(
    `${chalk.white.bold(
      `${dayjs().format("DD/MM/YYYY HH:mm:ss")}`
    )} - ${chalk.blue.bold(`Casper-Tec`)} => ${chalk.blue.bold(
      `Api & WebSocket`
    )} - Launched On: http://localhost:${port2}`
  );
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(chalk.red(`Port ${port2} is already in use.`));
    process.exit(1);
  } else {
    console.error(chalk.red(`Unexpected error: ${err.message}`));
  }
});
