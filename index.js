// Write your solution here!
let cats = ["Milo", "Otis","Garfield" ]
function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}
function destructivelyRemoveLastCat(){
  cats.pop();
  return cats; 
}
function destructivelyRemoveFirstCat(){
 cats.shift();
  return cats;
}
function appendCat(name) {   
  const newCats = [...cats, name];
  return newCats;
}
function prependCat(name) {
  const newCats = [name,...cats];
  return newCats;
}
function removeLastCat() {
const copyOfCats = [...cats];
copyOfCats.pop();
return copyOfCats;
}
function removeFirstCat() {
  const newCatsArray = [...cats]
  newCatsArray.shift();
  return newCatsArray; 
 } 