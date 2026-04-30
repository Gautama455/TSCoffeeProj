import { DrinkModel } from "../Models/Models";
import { IDrinkBuildStrategy } from "./Srtategies";

export class DrinkFartory{
    private _strategy! : IDrinkBuildStrategy;

    constructor(strategy : IDrinkBuildStrategy){
        this._strategy = strategy;
    }

    setStrategy(newStrategy : IDrinkBuildStrategy){
        this._strategy = newStrategy;
    }

    makeDrink() : DrinkModel{
        return this._strategy.builddrink();
    }
}