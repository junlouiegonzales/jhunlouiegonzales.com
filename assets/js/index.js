// function mouseMove(event) {
//     var cursor = document.querySelector(".cursor");
//     var x = event.pageX;
//     var y = event.pageY;
//     cursor.style.top = y + "px";
//     cursor.style.left = x + "px";
// }

// document.addEventListener("mousemove",mouseMove);

function animateNavigation () 
{
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("nav-container").classList.add("bg-default");
    document.getElementById("nav-container").classList.remove("bg-active");
  } else {
    document.getElementById("nav-container").classList.add("bg-active");
    document.getElementById("nav-container").classList.remove("bg-default");
  }
}

function animateOnScroll (selector) 
{
  var elems = document.querySelectorAll(selector);
  for (var i = 0; i < elems.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = elems[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
          elems[i].classList.add("active");
      } 
  }
}

function animateBody () {
  var elem = document.getElementById("about");
  if(!elem) return;
  var windowHeight = window.innerHeight;
  var elementTop = elem.getBoundingClientRect().top;
  var elementVisible =550;

  if (elementTop < windowHeight - elementVisible) {
      document.body.classList.add("active");
  } 
  else {
    document.body.classList.remove("active");
  }
}

window.addEventListener("scroll", function() 
{
  animateNavigation();
  animateBody();
  animateOnScroll('.experience-wrapper');
  animateOnScroll('.expertise-wrapper');
  animateOnScroll('.testimontial-wrapper');
});

window.addEventListener("load", function()
{
  document.getElementById("menu").onclick = function () {
    var coll = document.getElementById("collapsible");
    if(coll.classList.contains("active")) {
      coll.classList.remove("active");
    } else {
      coll.classList.add("active");
    }
  };

  document.getElementById("collapsible").onclick = function (event) {
    event.stopPropagation();
  }

  var elems = document.querySelectorAll("#collapsible nav ul li a");
  var coll = document.getElementById("collapsible");
  elems.forEach(function (element)
  {
    element.onclick = function () {
      if(coll) {
        coll.classList.remove("active");
      }
    }
  });
});

window.addEventListener("click", function(event)
{
  if(event.target.id == "menu") return;
  var coll = document.getElementById("collapsible");
  if(coll) {
    coll.classList.remove("active");
  }
})