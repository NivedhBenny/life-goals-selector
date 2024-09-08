const goals = [
  ["Globertrotter✈️", "Bucket List? Check.⭐"],
  ["Property Tycoon🏠", "Renovation Expert🖌️"],
  ["Know-it-all🎓", "Jack of All Trades💼"],
  ["Pet Lover🐶", "Family Focused 👨‍👩‍👧‍👦"],
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let goalTypes=[];
let goalNumbers=[];

function getGoals(players){
  for(let i=1;i<=players;i++){
    let type=getRandomInt(4);
    while(goalTypes.includes(type)){
      type=getRandomInt(4);
    }
    let index=getRandomInt(2);
    goalTypes.push(type);
    goalNumbers.push(index);
  }
}
function getAllGoals(){
  for(let i=1;i<=4;i++){
    goalTypes.push(i-1);
    goalNumbers.push(getRandomInt(2));
  }
}
function changeGoals() {
    let players = parseInt(document.getElementById('changeGoals').getAttribute('players'));
    console.log(players);
    if(players===4){
      getAllGoals();
    }else{
      getGoals(players);
    }
    for(let i=0;i<goalTypes.length;i++){
      document.getElementById(`card${i+1}`).querySelector('img').src = `images/card${goalTypes[i]}${goalNumbers[i]}.jpg`;
    }
    // document.getElementById('card1').querySelector('img').src = `images/card${firstGoalType}${firstGoalNumber}.jpg`;
    // document.getElementById('card2').querySelector('img').src = `images/card${secondGoalType}${secondGoalNumber}.jpg`;
    document.getElementById('changeGoals').innerText="Change Goals";
    goalTypes=[];
    goalNumbers=[];
}

document.getElementById('changeGoals').addEventListener('click', changeGoals);