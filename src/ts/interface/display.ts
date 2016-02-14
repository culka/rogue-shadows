///<reference path="../reference/rot.d.ts"/>
///<reference path="symbol.ts"/>
const DEFAULT_WIDTH: number = 80;
const DEFAULT_HEIGHT: number = 40;
const DEFAULT_FONT: string = "Monospace";

class DisplayManager {

    display: ROT.Display;
    symbols: Array<Array<Symbol>>;
    ysize: number;
    xsize: number;

    constructor(xsize_: number, ysize_: number) {
        this.display = new ROT.Display({width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT, fontFamily: DEFAULT_FONT});
        this.ysize = ysize_;
        this.xsize = xsize_;

        for (let i = 0; i < this.ysize; ++i) {
            this.symbols.push(new Array(this.xsize));
        }
    }

    draw(): void {
        for (let y = 0; y < this.ysize; ++y) {
            for (let x = 0; x < this.xsize; ++x) {
                this.display.draw(x, y, this.symbols[y][x].char, this.symbols[y][x].fg, this.symbols[y][x].bg);
            }
        }
    }
}