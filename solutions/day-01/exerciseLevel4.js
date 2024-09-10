const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
  }



// output
// Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)


// Q Create a function called getPersonInfo. The getPersonInfo function takes an object parameter. The structure of the object and the output of the function is given as shown above. Try to use both a regular way and destructuring and compare the cleanness of the code.

// i) Regular way
function getPersonInfo(person) {
    const firstName = person.firstName;
    const lastName = person.lastName;
    const age = person.age;
    const country = person.country;
    const job = person.job;
    const skills = person.skills.join(', ');
    const languages = person.languages.join(', ');
  
    return `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${skills}. He speaks ${languages}.`;
  }
    
console.log(getPersonInfo(person));  // Asabeneh Yetayeh lives in Finland. He is 250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python, D3.js. He speaks Amharic, English, Suomi(Finnish).



