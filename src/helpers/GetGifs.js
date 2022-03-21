export const getGifs = async(category) =>{
    /* const apikey= 'jp4YdfzMnx4UaFQkSFgKxQ4k76FlfkR6';
    const endpoint = 'api.giphy.com/v1/gifs/search'; */
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jp4YdfzMnx4UaFQkSFgKxQ4k76FlfkR6&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        };
    });
    
    return gifs;    
}