const baseURL = "https://pokeapi.co/api/v2";

//GET- Returns (150 list of Pokemon off set of 20)
const getPokemon =(method, endpoint, limit, offset) => {
    let url = baseURL + endpoint + '?' + 'offset='+ offset+'&limit='+limit;
    return makeRequest(method,url);
}


//Handles all request
const makeRequest =(method,url) =>{
    const options = {
        mode: 'cors',
        method:method,
        headers: new Headers({'Content-Type':'application/json'}),
    };

    //Fetch response & convert to JSON
    return fetch(url, options).then(response=>response.json())
}

//Export workflow functions
export default {getPokemon}