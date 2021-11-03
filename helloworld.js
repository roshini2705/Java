/*const first = [1,2,3];
const second = [4,5,6];

const combined = first.concat(second);
console.log(combined);
console.log(second)
console.log(combined.slice(2,4));

const first = [1,2,3];
const second = [4,5,6];

//const combined = first.concat(second);
const combined=[...first,...second];
console.log(combined);
//console.log(second)
console.log(combined.slice(2,4));

const first = [7,4,5];

first.sort();
console.log(first);

first.reverse();
console.log(first);*/

const students = [
    {id:1,name:"roshi"},
    {id:2,name:"monica"},
    {id:3,name:"chandler"}
];
students.sort(function(a,b){
    if(a.name< b.name) return -1;
    if(a.name> b.name) return 1;
    return 0;
});
console.log(students);