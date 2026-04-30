Данный проект енацелен показать в действии реализацию паттернов Decoratot, Factory Method, Strategy, MVC.

Примерная структура проекта:
1. Слой Model - хранит в себе данные
   1.1 Обощенный интерфейс для моделей напитков
   ```typescript
     export interface DrinkModel {
        description(): string;
        price(): number;
    }
   ```
   + реализации
   1.3 Абстракция обобщенного декоратора:
   ```typescript
   export abstract class DrinkDecorator implements DrinkModel{
      protected _model! : DrinkModel;
  
      constructor(model : DrinkModel){
          this._model = model;
      }
  
      description(): string {
          return this._model.description();
      }
  
      price(): number {
          return this._model.price();
      }
    }
   ```
   + реализации
2. Слой Controller
  2.1 Обобщенная стратегия создания моделей:
      ```typescript
      export interface IDrinkBuildStrategy{
          builddrink() : DrinkModel;
      }
      ```
   2.2 + Реализации способом декорирования объектов, пример:
   ```typescript
   export class LatteBuilder implements IDrinkBuildStrategy{
        builddrink(): CoffeeModel {
            return new Milk( new Milk( new Milk(new StandartCoffee())));
        }
    }

   export class CaramelLatteBuilder implements IDrinkBuildStrategy{
        builddrink(): CoffeeModel {
            return new Caramel(new LatteBuilder().builddrink());
        }
    }
   ```
   2.3 Обобщенная фабрика:
     ```typescript
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
     ```
4. Слой View - представляет из себя класс прокладку для условной имитации работы слоя представления
      Представляет из  себя простой класс с двумя вариантами вызова console.log()
6. main.ts - демонстрация работы кода
       
