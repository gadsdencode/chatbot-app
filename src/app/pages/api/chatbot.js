import axios from 'axios';

export default async function handler(req, res) {
  const { message } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: message,
      max_tokens: 50,
      temperature: 0.6,
      n: 1,
    }, {
      headers: {
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json',
      },
    });

    const { choices } = response.data;
    const reply = choices[0].text.trim();
    res.status(200).json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}