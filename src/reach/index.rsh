"reach 0.1";
//Outcome array
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3); 

//This computes the winner of the game
const winner = (x, hand1, hand2) => {
  if (x.includes(hand1) && !x.includes(hand2)){
    return A_WINS;
  }
  else if(!x.includes(hand1) && x.includes(hand2)){
    return B_WINS;
  }
  else if (x.includes(hand1) && x.includes(hand2)){
    return DRAW;
  }
  else  return DRAW;

};
// Generates the random number
const combineRandom1 = (randomAlice1, randomBob1) => {
  const result1 = randomAlice1 + randomBob1;
  return result1;
};
const combineRandom2 = (randomAlice2, randomBob2) => {
    const result2 = randomAlice2 + randomBob2;
    return result2;
  };
  const combineRandom3 = (randomAlice3, randomBob3) => {
    const result3 = randomAlice3 + randomBob3;
    return result3;
  };
  const combineRandom4 = (randomAlice4, randomBob4) => {
    const result4 = randomAlice4 + randomBob4;
    return result4;
  };
  const combineRandom5 = (randomAlice5, randomBob5) => {
    const result5 = randomAlice5 + randomBob5;
    return result5;
  };


// Makes the required payment to the winner
const payWinner = (outcome, wager, Alice, Bob) => {
  if (outcome == DRAW) {
    each([Alice, Bob], () => {
      interact.seeOutcome(outcome)
    });
    transfer(wager).to(Alice);
    transfer(wager).to(Bob);
  }
  else if(outcome == A_WINS) {
    transfer(2*wager).to(Alice);
    each([Alice, Bob], () => {
      interact.seeOutcome(outcome);
    });
  }
  else {
    transfer(2*wager).to(Bob);
    each([Alice, Bob], () => {
      interact.seeOutcome(outcome);
    });
  }
}


//Player abilities
const Player = {
  ...hasRandom,
  getHand: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
  getRandom1: Fun([], UInt),
  getRandom2:Fun([], UInt),
  getRandom3:Fun([], UInt),
  getRandom4:Fun([], UInt),
  getRandom5:Fun([], UInt),
};


export const main = Reach.App(() => {
//Alice interface
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt, 
    deadline: UInt,
    
  });
//Bob interface
  const Bob   = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
    
  });
  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };

  const seeOutcome = (outcome) => {
    each([Alice, Bob], () => {
      interact.seeOutcome(outcome);
    });
  };
//Alice wager and the deadline for the timeout
  Alice.only(() => {
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
    const randomAlice1 = declassify(interact.getRandom1());
    const randomAlice2 = declassify(interact.getRandom2());
    const randomAlice3 = declassify(interact.getRandom3());
    const randomAlice4 = declassify(interact.getRandom4());
    const randomAlice5 = declassify(interact.getRandom5());
   
  });
  Alice.publish(wager, deadline, randomAlice1, randomAlice2, randomAlice3, randomAlice4, randomAlice5)
    .pay(wager);
  commit();



//Bob accepting or rejecting the wager
  Bob.only(() => {
    interact.acceptWager(wager);
    const randomBob1 = declassify(interact.getRandom1());
    const randomBob2 = declassify(interact.getRandom2());
    const randomBob3 = declassify(interact.getRandom3());
    const randomBob4 = declassify(interact.getRandom4());
    const randomBob5 = declassify(interact.getRandom5());
    
  });
  Bob.publish(randomBob1, randomBob2, randomBob3, randomBob4, randomBob5)
  .pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));


//The random number
  const random1 = combineRandom1(randomAlice1, randomBob1);
  const random2 = combineRandom2(randomAlice2, randomBob2);
  const random3 = combineRandom3(randomAlice3, randomBob3);
  const random4 = combineRandom4(randomAlice4, randomBob4);
  const random5 = combineRandom5(randomAlice5, randomBob5);

  const x = array(UInt, [random1, random2, random3, random4, random5] );

//While loop that loops 3 times  if the users inputs arent correct
  var [hand1, hand2 ] = [0,0];
  invariant( balance() == 2 * wager);

  while (!x.includes(hand1) && !x.includes(hand2)) {
    commit();

    Alice.only(() => {
      const _handAlice = interact.getHand();
      
      const [_commitAlice, _saltAlice] = makeCommitment(interact, _handAlice);
      const commitAlice = declassify(_commitAlice);
      });
    Alice.publish(commitAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    commit();

    unknowable(Bob, Alice(_handAlice, _saltAlice));
    Bob.only(() => {
      const handBob = declassify(interact.getHand());
      
    });
    Bob.publish(handBob)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    commit();

    Alice.only(() => {
      const saltAlice = declassify(_saltAlice);
      const handAlice = declassify(_handAlice);
    });
    Alice.publish(saltAlice, handAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    checkCommitment(commitAlice, saltAlice, handAlice);
    
  //Outcome = winner(getResult1,handAlice, handBob);
    [hand1, hand2] = [handAlice, handBob];
    continue;

  }
  //Using the winner function with arguments of the users inputs and the random number to get the winner
  const outcome = winner(x, hand1, hand2);
  seeOutcome(outcome);

//Uses the outcome to pay the winner
  payWinner(outcome,wager, Alice, Bob);

  commit();

});