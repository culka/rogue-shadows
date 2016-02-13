///<reference path="itemenums.ts" />
class Item {
    private slot: Itemslot;
    private size: Itemsize;
    private type: Itemtype;
    private subtype: Itemsubtype;
    private weight: number;
    private charges: number; // Ammo etc.

    canEquip(slot: Itemslot): boolean {
        return slot === this.slot;
    }

    getWeight(): number {
        return this.weight;
    }

    getSize(): Itemsize {
        return this.size;
    }

    getType(): Itemtype {
        return Itemtype.OTHER;
    }
}