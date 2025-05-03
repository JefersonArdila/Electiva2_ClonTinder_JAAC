const { express } = require('express');
const { authenticationToken } = require('../../infrastructure/middlewares/auth');
const { sendMessage, getConversation } = require('../controllers/messagesController');

const router = express.Router();

router.post('messages/send-message', authenticationToken, sendMessage);
router.get('messages/conversation/:userId', authenticationToken, getConversation);

module.exports = router;