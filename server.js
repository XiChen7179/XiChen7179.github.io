const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

app.post('/submit-form', async (req, res) => {
  const { name, email, project, details } = req.body;

  const { error } = await supabase.from('collaborator_messages').insert([
    { name, email, project, details }
  ]);

  if (error) {
    console.error('Insert failed:', error);
    return res.status(500).json({ success: false, error });
  }

  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
