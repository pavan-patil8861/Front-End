import { emp } from "./employee.js";
import { textFormate } from "./function.js";
import { getProducts } from "./product.js";

console.log(emp)

let userName = textFormate(emp.name)
console.log(userName)

let categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing"
]

let select = document.querySelector('#select')