

// http://www.omdbapi.com/?apikey=377b4bbf&s=

let bookingData = JSON.parse(localStorage.getItem("booking")) || [];

let movies_div = document.getElementById("movies");

// set the id in global 
let id;

async function searchMovies(){

    try{

        const search = document.getElementById("search").value

        let res = await fetch(`http://www.omdbapi.com/?apikey=377b4bbf&s=${search}`)
    
        let data = await res.json();
        // console.log("data:",data);
        let movies = data.Search;

        // appendMovies(movies);

        return movies;
        // searchMovies is a async function tht's why is shows or gives the data as promise  

    }

    catch(err){
        console.log("err:",err);
    }

}

    function appendMovies(data){

        // optimization - #1 
        // if(data === undefined){
        //     return false;
        // }

        // optimization - #2
        movies_div.innerHTML = null;


        data.forEach(function(el){

            let p = document.createElement("p")
            p.innerText = el.Title;

            let img = document.createElement("img")
            img.src = el.Poster;

            let btn = document.createElement("button")
            btn.innerText = "Book";
            btn.addEventListener("click",function(){
                bookMovies(el)
            })

            movies_div.append(img, p, btn);

        })

        function bookMovies(el){
            console.log(el);
            bookingData.push(el)

            localStorage.setItem("booking",JSON.stringify(bookingData))
        }
    }


        async function main(){

            // let data = searchMovies();

            // it shows as a promise tht's why we use await
            // then use async before function
            let data = await searchMovies();
            // console.log("data:",data);

            if(data === undefined){
                return false;
            }

            appendMovies(data);

        }


                // debouncing
                function debounce(func, delay){

                    if(id){
                        clearTimeout(id)
                    }

                id = setTimeout(function(){
                        func();
                    }, delay);
                }