// forEach from scratch

const allMyFriends = ["John", "Jeremy", "Jabecky", "Jamatha", "Jeremia", "John 2"]

//Pass array into argument
const forEachFromScratch = (yourArray) => {
   //create for loop based of length of array
    for (let i = 0; i < yourArray.length; i++){

        //print elements
        console.log(`${yourArray[i]}`);
        //print index
        console.log(`${[i]}`)
    }
}

forEachFromScratch(allMyFriends)


// Put's visible break in the console
console.log('*********************************')


//For each not from scratch

const forEachArgument = (element, index, array) => {
    console.log(`${element}`);
    console.log(`${index}`)
}

allMyFriends.forEach(forEachArgument)

// I hope this is what I was supposd to do