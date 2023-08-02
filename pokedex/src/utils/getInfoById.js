
function responseStatus(response){
    if(response.status !== 200){
        return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response);
}

function json(response){
    return response.json();
}

const getInfoById = (id) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    let data = fetch(url)
    .then(responseStatus)
    .then(json)
    .then((pokemon) => pokemon)
    .catch(function(err){
        console.log('error -->', err);
    })

    return data
}

export default getInfoById;