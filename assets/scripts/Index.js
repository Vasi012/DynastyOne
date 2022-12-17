// Loose vars
const cardTitle = document.getElementById("card-title");
const cardContent = document.getElementById("card-content");
const cardSender = document.getElementById("card-sender");
const image = document.querySelector("#img-color")

// Function to change bg image
function changeImage(element) {
  image.src = "assets/images/" + element.value + ".jpg"
}
const createCard = () => {
  let setTitle = document.getElementById("title").value;
  let setContent = document.getElementById("content").value;
  let setSender = document.getElementById("destiny").value;

  if (setTitle.length && setSender.length && setContent.length >= 1) {
    cardTitle.innerHTML = setTitle;
    cardContent.innerHTML = setContent;
    cardSender.innerHTML = setSender;
  } else {
    console.log("missig fields");
  }
};
