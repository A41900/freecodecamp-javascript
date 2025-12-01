
const footballTeam = {
  team: "Tech team",
  year: 2001,
  headCoach: "Tech Boss",
  players: [
    {name: "Joaninha",
    position: "forward",
    isCaptain: false
    },
    {name: "Renata",
    position: "midfielder",
    isCaptain: false
    },
    {name: "Carla",
    position: "defender",
    isCaptain: false
    },
    {name: "Rita",
    position: "goalkeeper",
    isCaptain: true,
    }
  ]
}

document.querySelector("#team").textContent = footballTeam.team;

document.querySelector("#year").textContent = footballTeam.year;

document.querySelector("#head-coach").textContent = footballTeam.headCoach;

const filterTeam = document.querySelector("#players");

filterTeam.addEventListener("change", ()=> {
  const cards = filterCards(filterTeam.value);
  showCards(cards);
})

function showCards(cards){
  
  const cardsContainer = document.querySelector("#player-cards");
  cardsContainer.innerHTML = "";

  cards.forEach(player => {
     const card = document.createElement("div");
     card.classList.add("player-card");

     const h2 = document.createElement("h2");
     h2.textContent = player.isCaptain ? `(Captain) ${player.name}` : player.name;
     
     const p = document.createElement("p");
     p.textContent = `Position: ${player.position}`;

     card.appendChild(h2);
     card.appendChild(p);

     cardsContainer.appendChild(card);
  });

}

function filterCards(position){
  if(position==="all")
      return footballTeam.players;
  return footballTeam.players.filter(team => team.position===position);


}
