class ViewFilme{
        constructor(model) {
          this._model = model;
        }
      
        template(again) {
          return `
              <div class="d-flex justify-content-center p-md-1 m-md-1 modalContent">
                  <img class="poster p-3" id="poster" src="${again.poster}">
                  <div class=" m-3 p-3">
                    <h3 class="mb-5" id="title"><b>${again.title}</b></h3>
                    <p id="year"><b>YEAR</b>: ${again.year}</p>
                    <p id="director"><b>DIRECTOR</b>: ${again.director}</p>
                    <p id="runtime"><b>RUNTIME</b>: ${again.runtime}</p>
                    <p id="rating"><b>RATING</b>: ${again.rating}</p>
                    <p id="release"><b>RELEASE DATE</b>: ${again.release}</p>
                    <p id="synopsis"><b>SYNOPSIS</b>: ${again.plot}</p>
                  </div>
              </div>
          `;
        }
      
        update(again) {
          this._model.innerHTML = this.template(again);
        }
      }
      let novo= new ViewFilme(model)
      novo.template(again);
      console.log(novo);