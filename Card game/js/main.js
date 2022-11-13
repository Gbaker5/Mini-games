//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', drawTwo)


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

document.querySelector()

