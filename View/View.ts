import { DrinkModel } from "../Models/Models";

export class DrinkView{
    showDrinkView(drink : DrinkModel){
        console.log(`Заказ: ${drink.description()}, стоимость: ${drink.price()}`)
    }

    showDrinkPrettyView(drink: DrinkModel) {
        const width = drink.description().length;

        const line = this.repeat("─", width);

        const pad = (text: string) => {
            const space = width - text.length + 2;
            return `│ ${text}${this.repeat(" ", space > 0 ? space : 0)}│`;
        };

        console.log(`┌${line}┐`);
        console.log(pad("НАПИТОК"));
        console.log(`├${line}┤`);
        console.log(pad(`Описание: ${drink.description()}`));
        console.log(pad(`Цена: ${drink.price()} руб.`));
        console.log(`└${line}┘`);
    }

    private repeat(str: string, count: number): string {
        let result = "";
        for (let i = 0; i < count; i++) {
            result += str;
        }
        return result;
    }
}