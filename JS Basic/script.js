let movies=[
    {
        name:"Avengers",
        poster:"https://img.fruugo.com/product/7/41/14532417_max.jpg",
        rating:8,
        casts:"Robert Downey Jr, Chris Hemsworth, Chris Evans, Scarlett Johanson, Mark Ruffalo"
    },
    {
        name:"Titanic",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1QUe7eMWi0xq6C3oZDZUf0IU7LaHxzYFnKw&s",
        rating:7.9,
        casts:"Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates, Bill Paxton"
    },
    {
        name:"Uncharted",
        poster:"https://assets-prd.ignimgs.com/2022/01/13/uncharted-poster-full-1642086040683.jpg",
        rating:6.3,
        casts:"Tom Holland, Sophia Taylor Ali, Rudy Pankov, Alana Boden, Nolan North"
    },
    {
        name:"Joker",
        poster:"https://rukminim2.flixcart.com/image/850/1000/keuagsw0/poster/d/j/w/medium-joker07-joker-movie-poster-with-frame-joker-framed-original-imafvfmduhx3n6av.jpeg?q=90&crop=false",
        rating:8.4,
        casts:"Joaquinn Pheonix, Robert De Niro, Zazie Beetz, Glen Fleshler,Bryan callen"
    },
    {
        name:"FREE GUY",
        poster:"https://m.media-amazon.com/images/M/MV5BN2I0MGMxYjUtZTZiMS00MzMxLTkzNWYtMDUyZmUwY2ViYTljXkEyXkFqcGc@._V1_.jpg",
        rating:7.1,
        casts:"Ryan Reynolds, Hugh Jackman, Jodie Comer, Joe Keery, Camilli Kostek, Dwayne Johnson  "
    },
    {
        name:"DUNE",
        poster:"https://preview.redd.it/something-i-noticed-in-the-official-dune-movie-posters-v0-xnaop52pwymc1.jpg?width=640&crop=smart&auto=webp&s=82c405cc460d327447d05054daf3b1f83a280508",
        rating:8,
        casts:"Timothee Chalamet, Zendaya, Rebecca Ferguson, Oscar Isaac, Jason Momoa, Dave Bautista"
    },
    {
        name:"First Man",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbFhDq40fZjO8L0tqxdiZ8i-ZSyqgLOJN3Q&s",
        rating:7.3,
        casts:"Ryan Gosling, Claire Foy, Mark Armstrong, Patrick Fugit, Lucas Haas"
    },
    {
        name:"Spiderman : Homecoming",
        poster:"https://m.media-amazon.com/images/I/81mWQYawyqL._AC_UF1000,1000_QL80_.jpg",
        rating:7.4,
        casts:"Tom Holland, Zendaya, Jacob batalon, Marisa Tomei, Robert Downey Jr"
    }
]

function searchMovie(){
 let movieName = document.getElementById('search').value
 
 if(movieName!==""){
 let result= movies.filter(function(movie){
    return movie.name.toUpperCase().includes(movieName.toUpperCase())
})

displayMovies(result);

 }
 else{
    displayMovies(movies);
 }
}

function displayMovies(data){
    document.getElementById("movies").innerHTML="";

    let htmlString=``;

    for(let i=0;i<data.length;i++){
        htmlString=htmlString+`
        <div class="movies">
            <div class="movie">
                <div class="overlay">
                    <div class="video">
    
                    </div>
                    <div class="details">
                        <h1>${data[i].name}</h1>
                        <h2>IMDB :${data[i].rating}</h2>
                        <p>${data[i].casts}</p>
                    </div>
    
                </div>
                <img class="poster" src="${data[i].poster}" alt="poster">
            </div>
        </div>
        `
    }
    document.getElementById("movies").innerHTML=htmlString;
    console.log(htmlString);
}



displayMovies(movies);