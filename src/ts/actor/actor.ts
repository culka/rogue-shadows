///<reference path="behavior_type.ts" />

class Actor {
    private name: string;
    private health: number;
    private behavior: Behavior_type;
    private symbol: string;

    /*
     * Performs the turn of the actor, returns a number equal to the speed of the action
     * ie time units until next turn
     */
    doTurn(): number {
        return 1;
    }

    getName(): string {
        return this.name;
    }

    getSymbol(): string {
        return this.symbol;
    }

    takeDamage(amount: number): boolean {
        this.health -= amount;
        if (this.health <= 0) {
            return true;
        }
        return false;
    }
}