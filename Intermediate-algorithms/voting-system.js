// Simple Voting System built with JavaScript.
// Uses Map and Set to manage poll options, track voters, and prevent duplicate votes.

const poll = new Map();

function addOption (option) {
  if (option==="") return "Option cannot be empty."
  if (!poll.has(option)){
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }
   return `Option "${option}" already exists.`;
}

function vote(option, voterId) {
  if (!poll.has(option))
    return `Option "${option}" does not exist.`
  if (poll.get(option).has(voterId))
    return `Voter ${voterId} has already voted for "${option}".`
    poll.get(option).add(voterId);
    return `Voter ${voterId} voted for "${option}".`

}

addOption("A");
addOption("B");
addOption("C");
vote("A",1);
vote("C",2);
vote("B",3);

function displayResults() {
  let results = `Poll Results:`
  poll.forEach((value, key) => {
    results += `
${key}: ${value.size} votes`
  })
  return results
}

console.log(displayResults());