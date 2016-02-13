///<reference path="item.ts" />
enum WeaponType {
    PISTOL,
    RIFLE,
    MELEE,
    THROWN
}

class Weapon extends Item {
    private weapontype: WeaponType;

    getType(): Itemtype {
        return Itemtype.WEAPON;
    }
}