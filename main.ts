import { DrinkFartory } from "./Controllers/Factory";
import { CaramelLatteBuilder, MatchaLatteBuilder, MilkShakeBuilder } from "./Controllers/Srtategies";
import { DrinkModel } from "./Models/Models";
import { DrinkView } from "./View/View";

let drinkView : DrinkView = new DrinkView();
let drinkfactory : DrinkFartory = new DrinkFartory(new CaramelLatteBuilder());

let caramelLatte : DrinkModel = drinkfactory.makeDrink();

drinkView.showDrinkView(caramelLatte);

drinkfactory.setStrategy(new MatchaLatteBuilder());

let matchaLatte : DrinkModel = drinkfactory.makeDrink();

drinkView.showDrinkPrettyView(matchaLatte);

drinkfactory.setStrategy(new MilkShakeBuilder());

let milkshake = drinkfactory.makeDrink();

drinkView.showDrinkView(milkshake);