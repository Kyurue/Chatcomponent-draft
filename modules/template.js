//Chat message (still need to add user)
const chatMessage = {
    id: 'chat-message-tpl',
    template: `
    <p class="message" data-bind="message"></p>
    `
}

//Chat message for sender (still need to add text "You" (since "you're" the sender))
const senderMessage = {
    id: 'sender-message-tpl',
    template: `
    <p class="message senderMessage" data-bind="message"></p>
    `
}

//template class
class Template
{
    attachTemplates(){
        this.attachTemplate(chatMessage);
        this.attachTemplate(senderMessage);
    }

    //attach template individually
    attachTemplate(tplObject){
        const templateNode = document.createElement('template');
        templateNode.id = tplObject.id;
        templateNode.innerHTML = tplObject.template;
        const body = document.querySelector('body');
        body.appendChild(templateNode);
    }

}

//initialize and export template
const template = new Template();
export {template};
