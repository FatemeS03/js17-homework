// ? Display the following array on the page
// ? First, watch the video in the help folder.
// todo-1: In the next step, review the HTML and CSS files.
// todo-2: Iterate over the "data" array and create a card for each array index.
// todo-3: Append the created card to the element with the class "cards".
// todo-4: Each card should have a button; when clicked, the card title should be displayed on the element with the class "cardSelected".

const wrapper = document.querySelector(".cards");
const data = [
  {
    id: 1,
    title: "ravel Monkey Club #1",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item-9.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 2,
    title: "ravel Monkey Club #2",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 3,
    title: "ravel Monkey Club #3",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 4,
    title: "ravel Monkey Club #4",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
];

// !Answer:
const cards = document.querySelector(".cards");

data.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = item.src;

  const h1 = document.createElement("h1");
  h1.textContent = item.title;
  const div= document.createElement("div")
div.classList.add("div")

  const img2 = document.createElement("img");
  img2.src = item.accountImage;
  img2.addEventListener("mouseover", () => {
    img2.style.borderRadius = "15px"; 
  });

  img2.addEventListener("mouseout", () => {
    img2.style.borderRadius = "0px";
  });
  const h3 = document.createElement("h3");
  h3.textContent = item.account;

  const button = document.createElement("button");
  button.textContent = "click";
  button.addEventListener("click", () => {
    const cardSelected = document.querySelector(".cardSelected");
    cardSelected.textContent = item.title;
    button.style.borderRadius = "15px"
    button.style.backgroundColor= "blueviolet"

  });
div.append(img2, h3, button)
  card.append(img, h1, img2, div);
  cards.append(card);
});