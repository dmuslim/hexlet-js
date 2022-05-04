import fs from "fs";
// По общепринятому соглашению, lodash импортируется под именем _
import _ from "lodash";

// Пересечение массивов
console.log(_.intersection([2, 1], [2, 3])); // => [2]

// capitalize делает первую букву заглавной
console.log(_.capitalize("hello")); // Hello

console.log(_.last(['one', 'two']));
