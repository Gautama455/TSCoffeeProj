import { Milk, Caramel, Matcha, Sugar } from "../Models/Decorators";
import { CoffeeModel, DrinkModel, MilkshakeModel, StandartCoffee } from "../Models/Models";

export interface IDrinkBuildStrategy{
    builddrink() : DrinkModel;
}

export class MilkShakeBuilder implements IDrinkBuildStrategy{
    builddrink(): DrinkModel {
        return new Milk(new Milk(new Sugar(new Caramel(new MilkshakeModel()))));
    }
}

export class LatteBuilder implements IDrinkBuildStrategy{
    builddrink(): CoffeeModel {
        return new Milk( new Milk( new Milk(new StandartCoffee())));
    }
}

export class StandartCoffeeBuilder implements IDrinkBuildStrategy{
    builddrink(): CoffeeModel {
        return new StandartCoffee();
    }
}

export class CaramelLatteBuilder implements IDrinkBuildStrategy{
    builddrink(): CoffeeModel {
        return new Caramel(new LatteBuilder().builddrink());
    }
}

export class MatchaLatteBuilder implements IDrinkBuildStrategy{
    builddrink(): CoffeeModel {
        return new Matcha(new LatteBuilder().builddrink());
    }
}