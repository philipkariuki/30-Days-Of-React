const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

// Q1 In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array

if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
  } else {
    webTechs.push('Sass');
    console.log(webTechs);  // [ "HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB", "Sass" ]
  }


//   Q2 Concatenate the following two variables and store it in a fullStack variable.
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// console.log(fullStack)

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)  //  [ "HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB" ]