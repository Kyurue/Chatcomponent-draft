import {template} from "./modules/template.js";
import {Message} from './components/message.js';
import {SenderMessage} from './components/senderMessage.js';

//attach templates
template.attachTemplates();

//create components
const messageComponent = new Message("Test");
const senderComponent = new SenderMessage("Test")

//append components
var chat = document.getElementById("chat");
chat.prepend(senderComponent);
chat.prepend(messageComponent);

