/* @flow */

import { Router } from 'express';
import Conversation from '../lib/watson/conversation';
import logger from '../logger';

const router = new Router();
const conversation = new Conversation();

// Middleware for default route
const message = async (req, res) => {
  try {
    const response: Object = await conversation.message(req.text, req.context);
    const { output: { text } } = response;
    const { context } = response;
    res.text = text;
    res.context = context;
  } catch (error) {
    logger.error(error);
    res.text = `I was unable to understand what you said. I think it was my fault. My wiring might be a bit off!`;
  }
  res.end();
};

// Register your routes and middleware to handle them here!!
router.post('/api/message', message);

export default router;
