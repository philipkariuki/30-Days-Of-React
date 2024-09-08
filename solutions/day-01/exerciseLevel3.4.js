// Q1 Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

function userIdGeneratedByUser() {
    // Prompt the user for the number of characters and the number of IDs
    let numOfChars = prompt('Enter the number of characters for each ID:');
    let numOfIds = prompt('Enter the number of IDs to generate:');
    
    // Convert the inputs to integers
    numOfChars = parseInt(numOfChars);
    numOfIds = parseInt(numOfIds);
    
    // Characters to use for generating IDs
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    
    // Array to store the generated IDs
    let ids = [];
    
    // Generate the IDs
    for (let i = 0; i < numOfIds; i++) {
        let id = '';
        for (let j = 0; j < numOfChars; j++) {
            id += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        ids.push(id);
    }    
    
    console.log(ids);
}

userIdGeneratedByUser(); // Generates ids depending on no. of characters and no. of IDs set in the prompts eg 5, 3 will generate [ "LgoOc", "HpZnk", "5zvRw" ]



