
// PRVI ZADATAK TO DO LISTA
let plus_btn = document.querySelector('.plus-btn');
let minus_btn = document.querySelector('.minus-btn');

plus_btn.addEventListener('click', function(){ 
    let input = document.querySelector('#vrijednost').value;

    if(input === ''){ 
        alert("unesite neku vrijednost!")
    }else{
    let lista = document.querySelector('.lista');
    lista.style.display = "flex";
    
    lista.innerHTML += ` <div class="lista2">
    <div class="paragraph">
      <p>${input}</p>
    </div>
    <div class="buton">
      <button>
        <span onclick="remove(this)" class="minus-btn">
            <i class="far fa-minus-square" ></i>
        </span>
       
    </button>
  </div>
 
  </div><br>
 `;
 
    }

    let input_after = document.querySelector('#vrijednost').value = '';
   
})
function remove(element) { 
    
    let glavni = element.closest('.lista2');
   glavni.remove();
}


// zadatak filmovi


let Total = 0;

let btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){ 

  btn.addEventListener('click', ()=>{ 
    
   
    let glavni = btn.closest('.films-item');
    let imeFilma = glavni.querySelector('h1 ').innerText;
    let cijenaFilma = glavni.querySelector(' span').innerText;

    cijenaFilma = cijenaFilma.slice(0,-1);

    cijenaFilma = parseInt(cijenaFilma);
   
    

    let korpa = document.querySelector('.films-kart');

    korpa.innerHTML += `

    <div class="kupljeni-filmovi">
    <h1>${imeFilma}</h1>
    <h3>  <span>${cijenaFilma}</span>$</h3><br>
    <button onclick="removeFilms(this)">Izbrisi</button>
  </div>

    
    `;

    glavni.style.backgroundColor = "gray";
    btn.innerText = "Kupljeno";
    btn.setAttribute('disabled', 'true');
    btn.style.color = "black";

Total = Total + cijenaFilma;
  console.log(Total);

  document.querySelector('.total h1').innerHTML = `Ukupno za platiti: ${Total}$`;
    
  })

})

function removeFilms(el){ 
  let glavni = el.closest('.kupljeni-filmovi');
  let cijenaFilma = glavni.querySelector( 'span').innerText;
  let imeFilma = glavni.querySelector('h1 ').innerText;
  cijenaFilma = parseInt(cijenaFilma);
  

  Total = Total-cijenaFilma;
  document.querySelector('.total h1').innerHTML = `Ukupno za platiti: ${Total}$`;

  let filmovi = document.querySelectorAll('.films-item');

  filmovi.forEach(function(film){ 

    let naziv = film.querySelector('h1').innerText;

    if(naziv == imeFilma){ 

      film.querySelector('button').innerText = "Kupi";
      film.querySelector('button').removeAttribute('disabled');
      film.querySelector('button').style.color = "white";
      
      film.style.backgroundColor = "rgb(83, 83, 187)";
      
    }
  })

  glavni.remove();
}




