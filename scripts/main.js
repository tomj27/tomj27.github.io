const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
} 
 
// Store a reference to the <h3> in a variable
const mysubHeading = document.querySelector("h3");
// Update the text content of the <h3>
mysubHeading.textContent = "Hello world!";

// image changer
const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Ziom.jpg") {
    myImage.setAttribute("src", "images/Spellbound.bmp");
  } else {
    myImage.setAttribute("src", "images/Ziom.jpg");
  }
}
);

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});

//personalized welcome message
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
 //   myName = "noname";  //setUserName();
    const myName = prompt("Please enter your name.");
    if (!myName) {
   myHeading.textContent = `Mozilla is cool, nameless`;
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
 }

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
}
);

