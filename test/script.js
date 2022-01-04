const clickables = document.getElementsByClassName("clickable");

let prev = -1,
  current = -1;
const changeTheme = (e) => {
  if (prev > 0) {
    clickables[prev].classList.remove("text-white");
    clickables[prev].classList.remove("bg-green-800");
    clickables[prev].classList.add("bg-white");
    clickables[prev].classList.add("text-black");
  }
  e.target.classList.add("text-white");
  e.target.classList.add("bg-green-800");
  prev = e.target.innerText - 1;
};

for (let i of clickables) {
  i.addEventListener("click", changeTheme);
}
