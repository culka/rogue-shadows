///<reference path="reference/rot.d.ts"/>

function hello(text: string): void {
    let display = new ROT.Display({ width: 20, height: 5 });
    document.body.appendChild(display.getContainer());
    display.drawText(1, 1, text);
    display.drawText(3, 3, text);
}

hello("hello");