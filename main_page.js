
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addMessage()
{
    var food = ""
    
      var radios = document.getElementsByName('fav_food');
      for (var radio of radios)
      {
          if (radio.checked) {
              food = radio.value;
          }
      }
  
  localStorage.setItem("food",food);
  window.location = "remarks_page.html";
}

