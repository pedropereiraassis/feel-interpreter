# feel-interpreter
feel-interpreter, like the name tells, is an interpreter of FEEL (Friendly Enough Expression Language) language. It works converting the expression written in FEEL into decision logics to return what is expected. FEEL is an expression language based on DMN specification and is a very powerful language built with the purpose of defining rules in Business Rule Engines.

## Installation
Installation is done using the npm install command:

```
$ npm install feel-interpreter
```
## Example Usage

```js
const { convertExpression } = require("feel-interpreter");

const numberComparison = convertExpression("124 in (>=124)");

console.log(numberComparison);
// the output will be: true

const nameInList = convertExpression("Alice in ['Arthur', 'Brad', 'John']");

console.log(nameInList);
// the output will be: false
```

## Valid FEEL expressions (for now)

```
5 in (<=5)
5 in (>=5)
8++
Brad in ['Arthur', 'Brad', 'John']
Dish==Dish
Dish==Dish and Steak==Steak
Dish==Dish and Steak==Steak and Soda==Soda
Dish==Dish or Steak==Steak
Dish==Dish or Steak==Steak or Soda==Soda
If Car==Car then Car else Bike
```