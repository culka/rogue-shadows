///<reference path="interface/messaging.ts"/>


function hello(text: string): void {
    let msg = new Messaging();

    msg.displayMessage(text);
    msg.displayMessage(text);
}

hello("hello");