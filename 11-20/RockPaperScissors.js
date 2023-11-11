function rps(p1, p2) {
  if (p1.toLowerCase() == "rock" && p2.toLowerCase() == "scissors") {
    return "The winner is p1";
  } else if (p1.toLowerCase() == "scissors" && p2.toLowerCase() == "rock") {
    return "The winner is p2";
  } else if (p1.toLowerCase() == "scissors" && p2.toLowerCase() == "paper") {
    return "The winner is p1";
  } else if (p1.toLowerCase() == "paper" && p2.toLowerCase() == "scissors") {
    return "The winner is p2";
  } else if (p1.toLowerCase() == "rock" && p2.toLowerCase() == "paper") {
    return "The winner is p2";
  } else if (p1.toLowerCase() == "paper" && p2.toLowerCase() == "rock") {
    return "The winner is p1";
  } else if (p1.toLowerCase() == "rock" && p2.toLowerCase() == "rock") {
    return "It's a draw";
  } else if (p1.toLowerCase() == "scissors" && p2.toLowerCase() == "scissors") {
    return "It's a draw";
  } else if (p1.toLowerCase() == "paper" && p2.toLowerCase() == "paper") {
    return "It's a draw";
  } else {
    return "It's a kasha malasha";
  }
}
rps("Rock", "Paper");
