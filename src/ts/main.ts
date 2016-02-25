///<reference path="interface/messaging.ts"/>

interface Test {
    asdf: number;
}

function loadJSONFromURL<T>(location: string, callback: (result: Array<T>) => void): void {

    let request = new XMLHttpRequest();
    request.onload = function() {
        let result: Array<T> = JSON.parse(this.responseText);
        callback(result);
    };
    request.open("get", location, true);
    request.send();
}


function hello(text: string): void {
    let msg = new Messaging();

    msg.displayMessage(text);
    msg.displayMessage(text);

    loadJSONFromURL<Test>("data/test.json", function(items: Array<Test>): void {
        console.log(items);
    });
}

hello("hello");