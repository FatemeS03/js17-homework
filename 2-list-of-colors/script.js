function listOfColours(colours) {
  // Write your code here...
  const content = document.querySelector("#content")
  const select = document.createElement("select")
  const p = document.createElement("p")
  p.textContent = "please chose a colour"
  colours.forEach(colour => {
    const option= document.createElement("option")
    option.textContent= colour
    option.value = colour
    select.append(option)
  });
  select.addEventListener('change', function() {
    const selectColour = select.value;
    p.textContent = `You selected: ${selectColour}` 
    p.style.color = selectColour
  })
  content.appendChild(p)
  content.appendChild(select)
  
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
