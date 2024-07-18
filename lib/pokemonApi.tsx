const POKEMON_API = "https://pokeapi.co/api/v2/";

{/* 
api response json format for getPokemonList

count:1302
next:"https://pokeapi.co/api/v2/pokemon?offset=2&limit=2"
previous:null
results:[
    {
        name:"bulbasaur"
        url:"https://pokeapi.co/api/v2/pokemon/1/"
    },
]    
*/}

export async function getPokemonList() {
    const response = await fetch(POKEMON_API+"pokemon?limit=151&offset=0");
    const data = await response.json();
    return data.results;
}


export async function getPokemon(name:string) {
    const response = await fetch(POKEMON_API+"pokemon/"+name);
    const data = response.json();
    return data;
}