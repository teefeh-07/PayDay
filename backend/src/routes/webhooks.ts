// Webhook management endpoints
import express from 'express';


const router = express.Router();


// GET /webhooks
router.get('/', async (req, res) => {
  try {
    res.json({ status: 'ok', data: [] });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


// POST /webhooks
router.post('/', async (req, res) => {
  try {
    const body = req.body;
    res.status(201).json({ status: 'created', data: body });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


// PUT /webhooks/:id
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    res.json({ status: 'updated', id });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


// DELETE /webhooks/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    res.json({ status: 'deleted', id });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Middleware for webhooks
router.use((req, res, next) => {
  console.log(`[webhooks] ${req.method} ${req.path}`);
  next();
});
