/*global fetch*/

document.getElementById("findCard").addEventListener("click", function(event) {
  event.preventDefault();
  

  
  const value = document.getElementById("magicInput").value;
  if (value === "")
    return;
  //console.log(value);

const url = "https://api.magicthegathering.io/v1/cards?name=" + value;
  fetch(url)
  .then(function(response) {
      return response.json();
    }).then(function(json) {
        //console.log(json);
        let stats = "";
        
        if (json.cards.length === 0)
        {
            stats = "Not Found";
            document.getElementById("magicResults").innerHTML = stats;
        }
        else
        {
            stats += "<p>Name: " + json.cards[0].name + "</br>";
            stats += "Rarity: " + json.cards[0].rarity + "</br>";
            stats += "Description: " + json.cards[0].text + "</br>";
            if (json.cards[0].flavor != null) {
                stats += json.cards[0].flavor + "</br>";
            }
        
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

const url = "https://api.magicthegathering.io/v1/cards?name=" + value;
console.log(url);
  fetch(url)
  .then(function(response) {
      return response.json();
    }).then(function(json) {
        console.log(json);
        let photo = "";
        
        if (json.cards.length === 0)
        {
            photo = "Not Found";
            document.getElementById("magicResults").innerHTML = photo;
        }
        else
        {
            photo += "<img src = \"" + json.cards[0].imageUrl + "\"></p>";
                
        
            console.log(photo);
            document.getElementById("magicResults").innerHTML = photo;
        }
    
    });
});

document.getElementById("sortType").addEventListener("click", function(event) {
  event.preventDefault();
  
  document.getElementById("magicResults").innerHTML = "";
  
  const value = document.getElementById("magicInput").value;
  if (value === "")
    return;
  console.log(value);

const url = "https://api.magicthegathering.io/v1/cards?type=" + value;
  fetch(url)
  .then(function(response) {
      return response.json();
    }).then(function(json) {
        //console.log(json);
        let list = "";
        
        if (json.cards.length === 0)
        {
            list = "Not Found";
            document.getElementById("magicResults").innerHTML = list;
        }
        else
        {
        
        for (let i = 0; i < json.cards.length; i++) {
            list += "<p>Name: " + json.cards[i].name + "</br>";
            list += "Rarity: " + json.cards[i].rarity + "</br>";
            list += "Description: " + json.cards[i].text + "</br>";
            if (json.cards[i].flavor != null) {
                list += json.cards[i].flavor + "</br>";
            }
            list += "</br>";
            
        }
        
            //console.log(stats);
            document.getElementById("magicResults").innerHTML = list;
        }
    
    });
});