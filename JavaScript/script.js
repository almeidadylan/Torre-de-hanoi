btnSair.addEventListener("click", function (e) {
  modalVitoria.style.display = "none";
});


function moveDisk ( torre ) {  
  
  if (win) {
    return "";
  };
  for ( let i = 0; i < dificult; i++ ) {

    if ( disco.value == listDisk[i].value ) {
      
      if ( torre.includes(listDisk[i]) ) {
        return "error";
      };
      
      if ( torre.length > 0 ) {
        if ( torre[0].value < disco.value ) {
          return "error: disco maior";
        };
      };

      deleteElement(torre);
      torre.splice(0, 0, listDisk[i]);
      jogadas += 1; 
      h3.innerHTML = `Número de jogadas: ${jogadas}`;

      if ( tower3.length == dificult ) {
        const btn = document.createElement("button");
        btn.innerHTML = "voltar";
        btn.className = "button_voltar";
        section.appendChild(btn);
        btn.addEventListener("click", function (e) {location.reload();});
        body.appendChild(modalVitoria);
        win = true;
      };

      return disco = null;
    };
  };
};

function remover ( tower, torre ) {

  for ( let i = 0; i <= tower.length; i++ ) {

    if ( tower[i] == disco ) {
      tower.splice(i, 1);
      showTower(tower, torre);
    };
  };
};

function deleteElement ( torre ) {

  if ( torre == tower1 ) {

    if ( tower2.includes(disco) ) {
      remover(tower2, torre2);    
    };
    if ( tower3.includes(disco) ) {
      remover(tower3, torre3);  
    };
  };
  if ( torre == tower2 ) {

    if( tower1.includes(disco) ) {
      remover(tower1, torre1);  
    };
    if ( tower3.includes(disco) ) {
      remover(tower3, torre3);
    };
  };
  if ( torre == tower3 ) {

    if ( tower1.includes(disco) ) {
      remover(tower1, torre1);  
    };
    if ( tower2.includes(disco) ) {
      remover(tower2, torre2);    
    };
  };
};

function showTower ( array, torre ) {

  torre.innerHTML = "";

  for ( let i = 0; i < array.length; i++ ) {

    const disk = document.createElement("div");
    disk.className = array[i].name;
    disk.setAttribute("id", array[i].value);
    disk.style.backgroundColor = array[i].color;
    disk.innerHTML = array[i].value

    disk.addEventListener("click", function (e) {
      
      disco = array[0];
     
    });
    torre.appendChild(disk);
  };
};

function selectDifficulty () {

  section.appendChild(div);

  const input = document.createElement("input");
  input.id = "digitado";
  input.value = 0;
  input.type = "number";
  input.placeholder = "0";
  div.appendChild(input);

  const button = document.createElement("button");
  div.appendChild(button);
  const algo = document.querySelector("button");
  algo.innerHTML = "enviar";

  algo.addEventListener("click", function (e) {

    e.preventDefault;

    const id = document.getElementById("digitado");
    dificult = parseInt(id.value);

    if ( parseInt(id.value) > 9 ) {

      dificult = 9;

    };
    if ( parseInt(id.value) < 3 ) {

      dificult = 3;

    };
    createBoard();
  });
};

selectDifficulty();


function createBoard () {
 
  section.innerHTML = "";
  section.appendChild(h1);
  section.appendChild(h3);
  h3.innerHTML = "Número de jogadas: 0";
  section.appendChild(board);

  for ( let i = 0; i < dificult; i++ ) {
    tower1.push(listDisk[i]);
  };

  showTower(tower1, torre1);
  showTower(tower3, torre3);

};


torre1.addEventListener("click", function (e) {

  moveDisk(tower1);

  showTower(tower1, torre1);

});


torre2.addEventListener("click", function (e) {

  moveDisk(tower2);

  showTower(tower2, torre2);

});


torre3.addEventListener("click", function (e) {

  moveDisk(tower3);

  showTower(tower3, torre3);

});
