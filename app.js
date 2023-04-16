import {template} from "./modules/template.js";
import {Message} from './components/message.js';
import {SenderMessage} from './components/senderMessage.js';

//attach templates
template.attachTemplates();

//create components
const messageComponent = new Message("eerste", "17:09", "user1");
const senderComponent = new SenderMessage("tweede", "17:09")

//append components
var chat = document.getElementById("chat");
chat.prepend(senderComponent);
chat.prepend(messageComponent);

