let container = document.createElement("div");
container.setAttribute('class','container');
// maindiv.innerHTML = "Main container";
document.body.append(container);

let button = document.createElement("button");
button.innerHTML = "Click Here for POKEMON DETAILS";
button.setAttribute('class','button')
button.addEventListener("click", foo);
container.append(button);

var maindiv = document.createElement("div");
maindiv.setAttribute('class','Main-container');
// maindiv.innerHTML = "Main container";
container.append(maindiv);
///////////////////////////////////////////////////////////////////////////
// var table=document.createElement('table');
// table.setAttribute('class','table');

// var thead=document.createElement('thead');
// thead.setAttribute('class','thead');

// var tr=document.createElement('tr')
// var th1= createthtd('th','PokemonName');
// var th2= createthtd('th','PokemonAbility');
// var th3= createthtd('th','PokemonMoves');
// var th4= createthtd('th','PokemonWeight');

// tr.append(th1,th2,th3,th4);
// thead.append(tr);

// var tbody=document.createElement('tbody');
// tbody.setAttribute('class','tbody');

// var tr1=document.createElement('tr')
// var td11= createthtd('td','Guvi');
// var td12= createthtd('td','Geek');
// var td13= createthtd('td','Guvi');
// var td14= createthtd('td','Geek');

// var tr2=document.createElement('tr')
// var td21= createthtd('td','Asritha');
// var td22= createthtd('td','Pokuru');
// var td23= createthtd('td','Guvi');
// var td24= createthtd('td','Geek');

// tr1.append(td11,td12,td13,td14);
// tr2.append(td21,td22,td23,td24);
// tbody.append(tr);
// table.append(thead,tbody);
// document.body.append(table);


// function createthtd('tagname','value')
// {
// var tag=document.createElement('tagname');
// tag.innerHtml =value;
// return tag;
// }

/////////////////////////////////////////////////////////////////////////////

async function foo()
 {
  let pokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
  let pokemondata = await pokemon.json();
  let results = pokemondata.results;
  for (let x = 0; x < results.length; x++) 
  {

    //no use of singlepokename
    var singlePokename = document.createElement("div");
    singlePokename.setAttribute('class','single-pokemmon');
    maindiv.append(singlePokename);




    var Pokename = document.createElement("div");
    // Pokename.setAttribute('id','individual-pokemmon');
    var pokemonname = results[x].name;
    Pokename.innerHTML = `Pokemon Name : ${pokemonname}`;
    singlePokename.append(Pokename);
    //   console.log(pokemonname);

    let pokemonurl = results[x].url;
    //   console.log(pokemonurl);

    
    let pokemonchar = await fetch(pokemonurl);
    // console.log(pokemonchar);
    let pokemonchardata = await pokemonchar.json();
    // console.log(pokemonchardata);

    let abilities = pokemonchardata.abilities;
    //   let pokemonabilityname;
    for (let i = 0; i < abilities.length; i++) {
      var Pokeabilities = document.createElement("div");
    //   Pokeabilities.setAttribute('class','Pokeabilities')
      var pokemonabilityname = abilities[i].ability.name;
      Pokeabilities.innerHTML = `Pokemon Abilities : ${pokemonabilityname}`;
      singlePokename.append(Pokeabilities);
      // console.log(pokemonabilityname);
    }

    let moves = pokemonchardata.moves;
    for (let i = 0; i < moves.length; i++) {
      var Pokemoves = document.createElement("div");
      var pokemonmovename = moves[i].move.name;
      Pokemoves.innerHTML = `Pokemon moves : ${pokemonmovename}`;
      singlePokename.append(Pokemoves);
      // console.log(pokemonmovename);
    }

    var Pokeweight = document.createElement("div");
    var pokemonweight = pokemonchardata.weight;
    Pokeweight.innerHTML = `Pokemon weight : ${pokemonweight}`;
    singlePokename.append(Pokeweight);
    //   console.log(pokemonweigth);
    
  }
}








