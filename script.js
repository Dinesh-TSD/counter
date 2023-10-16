// let btn=document.getElementById("btn")

// btn.addEventListener

function counter() {

   let display = document.getElementById("count")
   let contain = document.getElementById("container")

   setTimeout(function ten() {

      display.innerHTML = "10"
      let audi=document.createElement("audio")
      audi.src="count.mp3"
      audi.controls="true"
      audi.autoplay="true"

      display.append(audio)
      
   },)

   setTimeout(function ten() {
      display.innerHTML = "9"
   }, 1000)

   setTimeout(function ten() {
      display.innerHTML = "8"
   }, 2000)

   setTimeout(function ten() {
      display.innerHTML = "7"
   }, 3000)

   setTimeout(function ten() {
      display.innerHTML = "6"
   }, 4000)

   setTimeout(function ten() {
      display.innerHTML = "5"
   }, 5000)

   setTimeout(function ten() {
      display.innerHTML = "4"
   }, 6000)

   setTimeout(function ten() {
      display.innerHTML = "3"
   }, 7000)

   setTimeout(function ten() {
      display.innerHTML = "2"
   }, 8000)

   setTimeout(function ten() {
      display.innerHTML = "1"
   }, 9000)

   setTimeout(function ten() {
      display.innerHTML = ""
   }, 9500)

   setTimeout(function ten() {

      let hack=document.createElement("h2")
      hack.setAttribute("class","blink")
      hack.innerHTML = "Hacked"
      display.append(hack)

      let audi=document.createElement("audio")
      audi.src="warn.mp3"
      audi.autoplay="true"

      display.append(audi)
   }, 10000)
}


