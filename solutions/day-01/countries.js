const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

// Q1 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');    //  ETHIOPIA
} else {
    countries.push('Ethiopia');
}


// Q2 Slice the first ten countries from the countries array(Ex Lvl3)
let slicedCtrys = countries.slice(0,10)
console.log(slicedCtrys) // [ "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan" ]


// Q3 Find the middle country(ies) in the countries array
let middleCtryIndex = Math.floor((countries.length)/2)  // 5
let middleCtry = countries[middleCtryIndex]  // value of index 5
console.log(middleCtry)  // Finland


// Q4 Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.



const middleIndex = Math.ceil(countries.length / 2);  // we use math.ceil method to round up so that the first half has more elements if not even i.e. odd

// slice selects from a given start, up to but not inclusive of a given end
const firstHalf = countries.slice(0, middleIndex);  // selects elements from index 0 to 6 but doesn't include element 6
const secondHalf = countries.slice(middleIndex); // selects elements from index 6 to the end by default, unless the intended end is defined

console.log(firstHalf); // [ "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland" ]
console.log(secondHalf); // [ "Germany", "Hungary", "Ireland", "Japan", "Kenya" ]
