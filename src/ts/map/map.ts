///<reference path="tile.ts" />
///<reference path="../actor/actor.ts" />

class Map {
    private tiles: Array<Array<Tile>>;
    private actors: Array<Actor>;

    constructor(xsize: number, ysize: number) {
        for (let i = 0; i < ysize; ++i) {
            this.tiles.push(new Array(xsize));
        }
    }

    isPassable(x: number, y: number): boolean {
        if (this.tiles.length < y && this.tiles[y].length < x) {
            return this.tiles[y][x].isPassable();
        }
        return false;
    }
}