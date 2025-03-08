import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve a "nice" HTML page with some inline styling.
app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Wake My Server</title>
  <style>
    body {
      font-family: sans-serif;
      background: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    header {
      background: #333;
      color: white;
      padding: 1em;
      text-align: center;
    }
    main {
      margin: 2em auto;
      max-width: 600px;
      background: white;
      border: 1px solid #ccc;
      padding: 1em;
      border-radius: 8px;
    }
    h1, h2 {
      margin: 0;
      padding: 0;
    }
    button {
      font-size: 16px;
      padding: 0.6em 1.2em;
      border: none;
      cursor: pointer;
      margin-top: 1em;
      border-radius: 4px;
    }
    button:hover {
      opacity: 0.9;
    }
    #status {
      margin-top: 1em;
      color: #555;
    }
    p {
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <header>
    <h1>The Two Week Minecraft Phase</h1>
  </header>
  <main>
    <h2>Wake My Server</h2>
    <p>
      If the server is offline or asleep, click the button below to wake it up!
      <br/>
      Wait about 2–3 minutes after clicking for the server to fully start.
    </p>
    <button id="wakeBtn">Wake Server</button>
    <div id="status"></div>
  </main>

  <script>
    const wakeBtn = document.getElementById('wakeBtn');
    const statusDiv = document.getElementById('status');

    wakeBtn.addEventListener('click', async () => {
      statusDiv.textContent = 'Sending wake request...';

      try {
        const response = await fetch('/wake');
        if (response.ok) {
          const text = await response.text();
          statusDiv.textContent = text;
        } else {
          statusDiv.textContent = 'Error: could not wake the server.';
        }
      } catch (error) {
        statusDiv.textContent = 'Network error: ' + error;
      }
    });
  </script>
</body>
</html>`);
});

// Placeholder wake route
app.get('/wake', (req, res) => {
  // Later, you'll implement real WOL logic here:
  // e.g. import wol from 'wake_on_lan'; wol.wake(...);

  // For now, just respond with a placeholder message:
  res.send('Server not available yet! Check back later.');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
