
const apiKey = 'FzJiTva6ttdtSqAmc7QA1Hays6ZL416q';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// 1----- opcion del como presentar la respuesta
// peticion.then( resp => {
//     console.log(resp)
// })
// .catch(console.warn);


// 2-----la opcion para desempaquetar la data de la peticion e info de la api con mucho codigo

// peticion.then( resp => {
//     resp.json().then( (data) => {
//         console.log(data)
//     } )
// })
// .catch(console.warn);

// 3------ peticion de url de la imagen y crear la imagen en el body del html

peticion
    .then( resp => resp.json())
    .then( ({ data }) => {
        const {url} = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch(console.warn);