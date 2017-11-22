/* @flow */

import { Router } from 'express';
import Conversation from '../lib/watson/conversation';
import logger from '../../tools/logger';

const router = new Router();
const conversation = new Conversation();

// Register your routes here.

const beginConversation = async (req, res) => {
  let stringifiedOutput: string = '';
  try {
    const response: Object = await conversation.message('Hello');
    const { output: { text } } = response;
    stringifiedOutput = text.join('. ');
  } catch (error) {
    logger.error(error);
    stringifiedOutput = `There was an error getting a response from the conversation service!`;
  }
  res.send(stringifiedOutput);
};

router.get('/', beginConversation);

export default router;
