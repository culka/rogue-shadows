
class Messaging {

    MAXIMUM_MESSAGES: number = 100;

    messageBuffer: Array<string>;
    messageArea: Node;
    messageCount: number;

    constructor() {
        this.messageArea = document.getElementById("messages");
    }

    displayMessage(message: string) {
        let newelem = document.createElement("span");
        newelem.innerText = message;
        this.messageArea.appendChild(newelem);
        this.messageCount++;

        if (this.messageCount > this.MAXIMUM_MESSAGES) {
            this.messageArea.removeChild(this.messageArea.firstChild);
            this.messageCount--;
        }
    }
}