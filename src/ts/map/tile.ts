///<reference path="tile_type.ts" />

class Tile {
    private symbol: string;
    private type: TileType;

    isPassable(): boolean {
        return this.type === TileType.FLOOR;
    }
}