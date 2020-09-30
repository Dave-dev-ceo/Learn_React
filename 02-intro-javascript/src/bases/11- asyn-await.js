

const getImage = async () => {
    try {
 
     const apiKey = 'FzJiTva6ttdtSqAmc7QA1Hays6ZL416q';
     const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
     const { data } = await respuesta.json();
     const {url} = data.images.original;
     const img = document.createElement('img');
     img.src = url;
     document.body.append( img );
 
    } catch (error) {
     console.error(error);   
    }
 
 }
 
 
 getImage();