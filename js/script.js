const returnRand = () => {
    let ranNum = 0;
    ranNum = Math.floor(Math.random() * 4);
    return ranNum
}
// console.log(ranNum);

const createMessage = () => {
    if(returnRand() === 0) {
        console.log("Everyday is your wonderful day!");
    } else if(returnRand() === 1) {
        console.log("You should be kind to others and to myself more.");
    } else if(returnRand() === 2) {
        console.log("Everything happening is meaningful for you. ");
    } else if(returnRand() === 3) {
        console.log("You are perfect human even though there are some unperfect things.");
    } else {
        console.log("Little by Little, Day by Day");
    }
} 

createMessage();