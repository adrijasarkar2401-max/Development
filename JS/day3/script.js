//ARRAYS

// array creation
//1
let arr = [1, 2, 3, 4];
//2
let ar = new Array();

// accessing
arr[0];//1
arr[3];//4
arr[40];//undefined

//modifying
arr[3] = 15;
//array methods: push,pop,shift,unshift,slice,splice,reverse,sort,map,filter,reduce,find,some,every(intro level)
let barr = [1, 2, 3, 4, 5, 6];
//push/pop --> add/deletes from the end
barr.push(15);
barr.pop();
//shift-->deletes from the front and unshift--> adds to the front 
barr.shift();
barr.unshift(7);
//splice --> deletes value from  middle arr.splice(index,how many values to remove)
barr.splice(3, 2);
//splice changes te actual array while slice returns a copy of the array, arr.slice(start,end-1)
let newarr = barr.splice(1, 1);
let carr = [11, 23, 56, 89, 45, 92];
carr.reverse();
//sort always accepts a function
let scarr = carr.sort(function (a, b) {
    return a - b;//ascending order
});
/*let scarr=carr.sort(function(a,b){
    return b-a; //descending order
});*/

// forEach--> accepts a function, each element of the array is stored one by one in val and the following code ia performed on the array
carr.forEach(function (val) {
    console.log(val);
});
carr.forEach(function (val) {
    console.log(val + 10);
});
//map--> accepts a function and returns something
//we use the map method only when we want a new array on the basis of the old array's data
let newcarr = carr.map(function (val) {
    return 12;
});//should return an array which as 12 5 times -->[12,12,12,12,12],if there is no return,then it will display undefined
let newcarray = carr.map(function (val) {
    if (val > 50) return val;
})
//filter-->makes a new aaray from the old array and leaves out some of the old array elements, retur will either be true or false 
let darr = [1, 2, 3, 4, 5, 6, 7];
darr.filter(function (val) {
    if (val > 4) return true;
});
//reduce--> reduces array to a sigle digit
darr.reduce(function (accumulator, val) {
    return accumulator + val;
}, 0);// 0 is the accumulator's initial value. The accumulator remembers its previous value
//find--> return first occurence of an element
let newdarr = darr.find(function (val) {
    //if (val===1) return val;
    return val === 1;
})

//some and every
//some checks if atleast one of the elements has passed the condition
let marks = [10, 85, 92, 67, 45];
let any = marks.some(function (val) {
    return val > 80;
});
// every checks if all of the elemets meet the condition
let eve = marks.every(function (val) {
    return val > 10;
});

//destructuring
let earr = [1, 2, 3, 4, 5];
//let [a,b]=earr;
let [a, b, , c] = earr;//skips the 3rd element
//spread operator
//let earr2=earr;
//the reference gets copied so if any changes are made to earr2 the og is also affected
let earr2 = [...arr];


//OBJECTS

let obj = {
    name: "adrija",
    age: 21,
    sex: "female",
};
//accessing elements
obj.age;
//or
obj['name'];
let aa = "name";
console.log(obj['name']);
//key:value structure
//dot vs bracket[] notation
//nesting ad deep access
const user = {
    name: "adrija",
    address: {
        city: "kolkata",
        state: "west bengal",
        pin: 700026,
        location: {
            area: "kalighat",
            lat: 22.5,
            lng: 88.4
        }
    }
}//nesting
//if you wat to address lng you have to write
user.address.location.lng;//deep access
//onject destructuring
let { lat, lng } = user.address.location;//lat ad lng are now new variables
//loops: for-in,object.keys,object.entries
let obj2 = {
    name: "adrija",
    age: 21,
    email: "adrija@gmail.com"
};
for(let key in obj2){
    console.log(key);//only keys will be displayed
}
for(let key in obj2){
    console.log(obj[key]);//values will be displayed
}
for(let key in obj2){
    console.log(key,obj[key]);//keys and values will both be displayed
}

Object.keys(obj);//will return an array with all the keys
Object.entries(obj);//will create an array within an array, every array will contain the the key and value pairs

//copying objects: spread,object.assign,deep clone
let obj3={...obj};
let obj4=Object.assign({},obj);//less common

//for nested objects, spread operator is a bad way to copy te object, as the nested object will be passed as reference so when the new obj is changed it will also change the og obj

//deep clone
JSON.stringify(obj);//converts to strings
JSON.parse('{"name":"adrija","age":21,"sex":"female"}');//converts back to its real form

let obj5=JSON.parse(JSON.stringify(obj));//deep cloning 
//now if we change the new array, it will ot affect the og array

let role ="admin";
//optional chaining and computed properties
let obj6 = {
    name: "adrija",
    age:21,
    email:"adrija@test.com",
    addresses: {
        city: "kolkata",
        state: "west bengal",
    },
    [role]:"adrija",//computed properties
}
obj6.addresses.city;
obj6?.address?.city;//will display undefined if not found(kinda like exception handeling)






