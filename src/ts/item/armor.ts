///<reference path="item.ts" />
class Armor extends Item {

    getType(): Itemtype {
        return Itemtype.ARMOR;
    }
}