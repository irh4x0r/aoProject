const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const fs = require('fs');


const app = express();


const PORT = process.env.PORT || 5000;

// log name last name and phone number 
let jsonFile = fs.readFileSync('./data.json');
let jsonParse = JSON.parse(jsonFile);
console.log(jsonParse);

// recursive function example


const findIndexInSortedArray = (sortedArray, search) => {
    const midIndex = Math.floor[sortedArray.length / 2];
    if(sortedArray[midIndex] === search) {
        return midIndex;
    } else if(sortedArray[midIndex] > search) {
        return findIndexInSortedArray(sortedArray.slice(0, midIndex), search);
    } else {
        return sortedArray.slice(midIndex), search;
    }
}

const nums = [3, 5, 10, 60]


findIndexInSortedArray(nums);








const server = app.listen(PORT, () => {
    console.log(`server running on ${process.env.NODE_ENV} mode and port : ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
    console.log(`error ${err.message}`);
    server.close(() => process.exit(1));
})