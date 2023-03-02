let btn = document.querySelector("button")
btn.addEventListener(`click`,()=>{
  let x = Math.floor(Math.random() * 256)
  let y = Math.floor(Math.random() * 256)
  let z = Math.floor(Math.random() * 256)
  let bgColor = `rgb(${x}, ${y}, ${z})`
  document.body.style.background = bgColor;
})
  

let inputArea=document.querySelector("input");
let btnone = document.querySelector(".btnone")
let btntwo = document.querySelector(".btntwo")
inputArea.addEventListener(`mouseup`,()=>{
  btntwo.innerHTML=inputArea.value.length;
  let txt = inputArea.value.trim();
  btnone.textContent=txt.split(/\s+/).filter(
    (item)=>item).length;
})
