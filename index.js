// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    const handletext = document.querySelector("#text");
   const addtext = document.createElement('p');

   addtext.innerHTML = '<p id="text">This is really cool</p>';

   handletext.parentNode.replaceChild(addtext, handletext);
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  
