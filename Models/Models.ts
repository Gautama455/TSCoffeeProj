export interface DrinkModel {
    description(): string;
    price(): number;
}

export abstract class CoffeeModel implements DrinkModel{
    abstract description(): string;
    abstract price(): number;
}

export class StandartCoffee extends CoffeeModel{
    description(): string {
        return "Чёрный кофе";
    }

    price(): number {
        return 10;
    }
}

export class MilkshakeModel implements DrinkModel{
    description(): string {
        return "Милкшейк"
    }
    price(): number {
        return 20;
    }
}