   
async function getPhotographers() {
    // Récupèrer les données json grace à la méthode fetch
    const res = await fetch("./data/photographers.json");
    if (res.ok) {
        const data = await res.json();
        return {
          photographers: data.photographers,
          media: data.media,
        };
    } else {
      return "erreur"
    }
  }
  //pour afficher les données dans le console
  console.log(getPhotographers());

  
