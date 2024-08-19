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


