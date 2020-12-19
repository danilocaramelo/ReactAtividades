fetch = require("node-fetch");

// function catFacts() {
//     fetch('https://cat-fact.herokuapp.com/facts')
//         .then(response => response.json())
//         .then(console.log)
// }

// catFacts()

async function catFacts() {
    let response = await fetch('https://cat-fact.herokuapp.com/facts')
    let data = await response.json()
    return data;
}

catFacts()
    .then(data => {
        let sorte = Math.floor(Math.random() * 5);
        console.log(data[sorte].text)
    });