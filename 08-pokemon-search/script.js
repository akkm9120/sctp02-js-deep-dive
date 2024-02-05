async function getPokemon(input) {

    const respone = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
    console.log(respone.data);
    return respone.data;
}

document.addEventListener("DOMContentLoaded", async ()=>{

    document.querySelector("button").addEventListener("click",()=>{
    let input = document.querySelector('input').value;
    getPokemon(input);

    let pokemon = document.createElement("img")
    document.querySelector("div").appendChild()

}) })