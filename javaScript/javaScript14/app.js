let url  = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1";

async function getFact() {

    try {
        let res  = await axios.get(url);
    } catch (e) {
        console.log(e);
    }
    
}

//fetch dog pic api

let dogUrl = "https://dog.ceo/api/breeds/image/random";

async function getDogPic() {
    try {
        let res = await axios.get(dogUrl);
        console.log(res.data.message);
    } catch (e) {
        console.log(e);
    }
}

getDogPic();