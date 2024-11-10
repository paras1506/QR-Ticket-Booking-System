const express = require('express');
const { createTicket, getTicketByNumber, verifyTicket } = require('../controllers/ticketController');
const router = express.Router();


router.route('/tickets').post(createTicket);
router.get('/tickets/:ticketNumber', getTicketByNumber);
router.post('/verifyTicket', verifyTicket);
module.exports = router; 