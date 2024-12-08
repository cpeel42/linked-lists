import { LinkedList } from './classes.mjs'

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("fish")

// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");

console.log(list) //( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
// console.log(`The size is ${list.size()}`)
// console.log(`The head is ${list.head()}`)
// console.log(`The tail is ${list.tail()}`)

console.log(list.toString())

