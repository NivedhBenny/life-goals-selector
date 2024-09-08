const goals = [
  ["Globertrotter✈️", "Bucket List? Check.⭐"],
  ["Property Tycoon🏠", "Renovation Expert🖌️"],
  ["Know-it-all🎓", "Jack of All Trades💼"],
  ["Pet Lover🐶", "Family Focused 👨‍👩‍👧‍👦"],
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}





function changeImages() {
    let firstGoalType = getRandomInt(4);
    let firstGoalNumber = getRandomInt(2);
    let firstGoal = goals[firstGoalType][firstGoalNumber];
    
    let secondGoalType = getRandomInt(4);
    while (secondGoalType == firstGoalType) {
      secondGoalType = getRandomInt(4);
    }
    
    let secondGoalNumber = getRandomInt(2);
    
    let secondGoal = goals[secondGoalType][secondGoalNumber];
    document.getElementById('card1').querySelector('img').src = `images/card${firstGoalType}${firstGoalNumber}.jpg`;
    document.getElementById('card2').querySelector('img').src = `images/card${secondGoalType}${secondGoalNumber}.jpg`;
}

document.getElementById('changeGoals').addEventListener('click', changeImages);


console.log(firstGoal);
console.log(secondGoal);