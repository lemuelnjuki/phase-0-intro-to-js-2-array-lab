// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    return cats.push("Ralph");
}
function destructivelyPrependCat() {
    return cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    return cats.pop("Garfield");
}
function destructivelyRemoveFirstCat() {
    return cats.shift("Milo");
}
function appendCat() {
    let LemCats = [...cats];
    LemCats.push("Broom");
    return LemCats;
}
function prependCat() {
    let LemCats =[...cats];
    LemCats.unshift("Arnold");
    return LemCats;
}
function removeLastCat() {
    let LemCats =[...cats];
    LemCats.pop();
    return LemCats;
}
function  removeFirstCat() {
    let LemCats =[...cats];
    LemCats.shift();
    return LemCats;
}
