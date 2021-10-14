
food_eaten = localStorage.getItem("food");
document.getElementById("food_eaten").innerHTML = "You ate - "+food_eaten+" "+
"Well Done! But remember one thing excess of anything is detrimental for your Health."

function logout() 
{
  localStorage.removeItem("user_name");
  window.location.replace("index.html");
}


