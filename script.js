/*global fetch*/

document.getElementById("findCard").addEventListener("click", function(event) {
  event.preventDefault();
  
  document.getElementById("magicResults").innerHTML = "";
  
  let stats = "";
  
  const value = document.getElementById("magicInput").value;
  
  if (value === "")
  {
    var randomNum = Math.random() * 4000;
    randomNum = Math.ceil(randomNum);
    const url = "https://api.magicthegathering.io/v1/cards/" + randomNum;
  fetch(url)
  .then(function(response) {
      return response.json();
    }).then(function(json) {

            stats += "<p class = \"details\">Name: " + json.card.name + "</br>";
            stats += "Rarity: " + json.card.rarity + "</br>";
            stats += "Description: " + json.card.text + "</br>";
            stats += "Set: " + json.card.setName + "</br>";
            if (json.card.flavor != null) {
                stats += json.card.flavor + "</br>";
            }
            document.getElementById("magicResults").innerHTML = stats;

        
    }); 
    
  }
  
  
  else
  {

const url = "https://api.magicthegathering.io/v1/cards?name=\"" + value + "\"";
  fetch(url)
  .then(function(response) {
      return response.json();
    }).then(function(json) {

        
        if (json.cards.length === 0)
        {
            stats = "<p class = \"details\">Not Found</p>";
            document.getElementById("magicResults").innerHTML = stats;
        }
        else
        {
            stats += "<p class = \"details\">Name: " + json.cards[0].name + "</br>";
            stats += "Rarity: " + json.cards[0].rarity + "</br>";
            stats += "Description: " + json.cards[0].text + "</br>";
            stats += "Set: " + json.cards[0].setName + "</br>";
            if (json.cards[0].flavor != null) {
                stats += json.cards[0].flavor + "</br>";
            }
            document.getElementById("magicResults").innerHTML = stats;

        }
    }); 
  }
    
});


document.getElementById("displayPhoto").addEventListener("click", function(event) {
  event.preventDefault();
  
  document.getElementById("magicResults").innerHTML = "";
  
  let photo = "";
  
  const value = document.getElementById("magicInput").value;
  if (value === "")
  {
    var randomNum = Math.random() * 4000;
    randomNum = Math.ceil(randomNum);
    console.log(randomNum);
    const url = "https://api.magicthegathering.io/v1/cards/" + randomNum;
  fetch(url)
  .then(function(response) {
      return response.json();
    }).then(function(json) {
       
        
            photo += "<img src = \"" + json.card.imageUrl + "\"></p>";
            
            document.getElementById("magicResults").innerHTML = photo;
        
    });
  }
  
  else
  {

const url = "https://api.magicthegathering.io/v1/cards?name=\"" + value + "\"";
  fetch(url)
  .then(function(response) {
      return response.json();
    }).then(function(json) {

        
        if (json.cards.length === 0)
        {
            photo = "<p class = \"details\">Not Found</p>";
            document.getElementById("magicResults").innerHTML = photo;
        }
        else
        {
            photo += "<img src = \"" + json.cards[0].imageUrl + "\"></p>";
                
        
            document.getElementById("magicResults").innerHTML = photo;
        }
    
    });
  }
});  

document.getElementById("setSearch").addEventListener("click", function(event) {
  event.preventDefault();
  
  document.getElementById("magicResults").innerHTML = "";
  
  let list = "";
  
  const value = document.getElementById("magicInput").value;
  if (value === "")
  {
    const url = "https://api.magicthegathering.io/v1/sets/";
  fetch(url)
  .then(function(response) {
      return response.json();
    }).then(function(json) {

        var randomNum = Math.random() * 495;
        randomNum = Math.ceil(randomNum);

        
            list += "<p class = \"details\">Name: " + json.sets[randomNum].name + "</br>";
            list += "Type: " + json.sets[randomNum].type + "</br>";
            list += "Release Date: " + json.sets[randomNum].releaseDate + "</br>";
            list += "</br>";
            
        
        
            document.getElementById("magicResults").innerHTML = list;
    });
  }
  
  else 
  {
const url = "https://api.magicthegathering.io/v1/sets?name=" + value;
  fetch(url)
  .then(function(response) {
      return response.json();
    }).then(function(json) {

        
        if (json.sets.length === 0)
        {
            list = "<p class = \"details\">Not Found</p>";
            document.getElementById("magicResults").innerHTML = list;
        }
        else
        {
        
            list += "<p class = \"details\">Name: " + json.sets[0].name + "</br>";
            list += "Type: " + json.sets[0].type + "</br>";
            list += "Release Date: " + json.sets[0].releaseDate + "</br>";
            list += "</br>";
            
        
            document.getElementById("magicResults").innerHTML = list;
        }
    
    }); 
  }
}); 