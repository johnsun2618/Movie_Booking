

let bookingData = JSON.parse(localStorage.getItem("booking"));
console.log(bookingData);


bookingData.map(function(el){

    let box = document.createElement("div")

    let p = document.createElement("p")
    p.innerText = el.Title;

    let img = document.createElement("img")
    img.src = el.Poster;

    box.append(img, p)
    document.querySelector("#movie").append(box);

    localStorage.setItem("booking",JSON.stringify(bookingData))
    // window.location.reload()

    

})