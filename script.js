/*global fetch*/

/*global require*/
document.getElementById("findCard").addEventListener("click", function(event) {
  event.preventDefault();
  
  document.getElementById("magicResults").innerHTML = "";
  
  const value = document.getElementById("magicInput").value;
  if (value === "")
    return;
  console.log(value);

const url = "https://api.magicthegathering.io/v1/cards";
  fetch(url)
  .then(function(response) {
      return response.json();
    }).then(function(json) {
        //console.log(json);
        let stats = "";
        
        var foundMatch = false;
        
        for (let i = 0; i < json.cards.length; i++) {
            if (json.cards[i].name === value) {
                stats += "<p>Name: " + json.cards[i].name + "</br>";
                stats += "Rarity: " + json.cards[i].rarity + "</br>";
                stats += "Description: " + json.cards[i].text + "</br>";
                if (json.cards[i].flavor != null) {
                    stats += json.cards[i].flavor + "</br>";
                }
                foundMatch = true;
                break;
            }
            
        }
        
        if (foundMatch == false)
        {
            stats = "Not Found";
            document.getElementById("magicResults").innerHTML = stats;
        }
        else
        {
            //console.log(stats);
            document.getElementById("magicResults").innerHTML = stats;
        }
    
    });
});


document.getElementById("displayPhoto").addEventListener("click", function(event) {
  event.preventDefault();
  
  document.getElementById("magicResults").innerHTML = "";
  
  const value = document.getElementById("magicInput").value;
  if (value === "")
    return;
  console.log(value);

const url = "https://api.magicthegathering.io/v1/cards";
  fetch(url)
  .then(function(response) {
      return response.json();
    }).then(function(json) {
        //console.log(json);
        let photo = "";
        
        var foundMatch = false;
        
        for (let i = 0; i < json.cards.length; i++) {
            if (json.cards[i].name === value) {
                photo += "<img src = \"" + json.cards[i].imageUrl + "\"></p>";
                foundMatch = true;
                break;
            }
            
        }
        
        if (foundMatch == false)
        {
            photo = "Not Found";
            document.getElementById("magicResults").innerHTML = photo;
        }
        else
        {
            //console.log(stats);
            document.getElementById("magicResults").innerHTML = photo;
        }
    
    });
});