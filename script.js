function showNav() {
    const nav = document.querySelector ("ul li");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

// original
//function myFunction() {
//    var x = document.getElementById("myLinks");
//    if (x.style.display === "block") {
//      x.style.display = "none";
//    } else {
//      x.style.display = "block";
//    }
//  } 