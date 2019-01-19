let count = 0;

const cc = (card) => {
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      ++count
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      --count
      break;
  }
  switch(count) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return count + " Bet"
      break;
    case 0:
      return count + " Hold"
      break;
    case -1:
    case -2:
    case -3:
    case -4:
    case -5:
      return count + " Hold"
      break;
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
