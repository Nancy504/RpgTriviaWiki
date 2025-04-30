const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/donate', (req, res) => {
  const { name, email, cause } = req.body;
  console.log(`Pledge received from ${name} (${email}) for ${cause}`);

  res.json({
    message: `Thanks, ${name}! Your pledge to the ${cause} resource has been received.`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

