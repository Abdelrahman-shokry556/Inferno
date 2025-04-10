const express = require('express');
const router = express.Router();

const {
  createMessage,
  deleteMessage,
  getAllMessages,
  getMessage,
} = require('../controllers/messages');

router.route('/').post(createMessage).get(getAllMessages);
router.route('/:id').get(getMessage).delete(deleteMessage);

module.exports = router; 