// 1.1
const btn = document.getElementById("btnToClick");
btn.addEventListener("click", (e) => {
  console.log(e);
})

// 1.2 && 1.3
const inList = document.querySelectorAll("input");

for (const element of inList) {
  element.addEventListener("focus", () => {
    console.log(element.value);
  })

  element.addEventListener("input", () => {
    console.log(element.value);
  })
}