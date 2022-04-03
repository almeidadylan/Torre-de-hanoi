const body = document.querySelector("body");
const h1 = document.createElement("h1");
const h3 = document.createElement("h3");
const section = document.createElement("section");
const div = document.createElement("div");
const span = document.createElement("span");
const board = document.createElement("div");
const torre1 = document.createElement("div");
body.appendChild(section)
board.appendChild(torre1);
torre1.className = "torre1";
const torre2 = document.createElement("div");
board.appendChild(torre2);
torre2.className = "torre2";
const torre3 = document.createElement("div");
board.appendChild(torre3);
torre3.className = "torre3";
board.className = "Tabuleiro";
section.appendChild(h1);
section.appendChild(h3);
h3.innerHTML = "Selecione a quantidade de discos";
h1.innerHTML = "Torre de Hanoi";
section.appendChild(span);
span.innerHTML = "Maximo de 9 discos e minimo de 3 discos";
const modalVitoria = document.createElement("section");
modalVitoria.setAttribute("id", "modal_vitoria");
const btnSair = document.createElement("button");
btnSair.innerHTML = "X";
btnSair.className = "btn_sair";
const h2 = document.createElement("h2");
h2.innerHTML = "Parabéns. Você ganhou!";
h2.className = "h2_win";
modalVitoria.appendChild(btnSair);
modalVitoria.appendChild(h2)
btnSair.addEventListener("click", function (e) {
  modalVitoria.style.display = "none"
})


let dificult;
let disco = 0;
let jogadas = 0;
let win = false;

const listDisk = [ 
  { name: "disco1", value: 1, color: "blue" },
  { name: "disco2", value: 2, color: "yellow" },
  { name: "disco3", value: 3, color: "red" },
  { name: "disco4", value: 4, color: "green" },
  { name: "disco5", value: 5, color: "cyan" },
  { name: "disco6", value: 6, color: "pink" },
  { name: "disco7", value: 7, color: "orange" },
  { name: "disco8", value: 8, color: "brown" },
  { name: "disco9", value: 9, color: "greenyellow" }
];

const tower1 = [];
const tower2 = [];
const tower3 = [];

function idDisco (torre) {  
  
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
          return console.log("error: disco maior");
        };
      };

      deletarElemento(torre);
      torre.splice(0, 0, listDisk[i]);
      jogadas += 1; 
      h3.innerHTML = `Número de jogadas: ${jogadas}`;

      if ( tower3.length == dificult ) {
        const btn = document.createElement("button")
        btn.innerHTML = "voltar"
        btn.className = "button_voltar"
        section.appendChild(btn)
        btn.addEventListener("click", function (e) {location.reload();})
        body.appendChild(modalVitoria)
        win = true;
      };

      return disco = null;
    };
  };
};

function remover ( tower, torre ) {

  for ( let i = 0; i <= tower.length; i++) {

    if (tower[i] == disco) {
      tower.splice(i, 1);
      mostrarTorre(tower, torre);
    };
  };
};

function deletarElemento (torre) {

  if ( torre == tower1 ) {

    if ( tower2.includes(disco)) {
      remover(tower2, torre2);    
    };
    if ( tower3.includes(disco)) {
      remover(tower3, torre3);  
    };
  };
  if ( torre == tower2 ) {

    if( tower1.includes(disco)) {
      remover(tower1, torre1);  
    };
    if ( tower3.includes(disco)) {
      remover(tower3, torre3);
    };
  };
  if ( torre == tower3 ) {

    if ( tower1.includes(disco)) {
      remover(tower1, torre1);  
    };
    if ( tower2.includes(disco)) {
      remover(tower2, torre2);    
    };
  };
};

function mostrarTorre (array, torre) {

  torre.innerHTML = "";

  for ( let i = 0; i < array.length; i++ ) {

    const disk = document.createElement("div");
    disk.className = array[i].name;
    disk.setAttribute("id", array[i].value);
    disk.style.backgroundColor = array[i].color;

    disk.addEventListener("click", function (e) {
      
      disco = array[0];
     
    });
    torre.appendChild(disk);
  };
};

function selectDificult() {

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

    if (parseInt(id.value) > 9) {

      dificult = 9;

    };
    if (parseInt(id.value) < 3) {

      dificult = 3;

    };
    createBoard();
  });
};

selectDificult();


function createBoard() {
 
  section.innerHTML = "";
  section.appendChild(h1);
  section.appendChild(h3);
  h3.innerHTML = "Número de jogadas: 0";
  section.appendChild(board);

  for ( let i = 0; i < dificult; i++ ) {
    tower1.push(listDisk[i]);
  };

  mostrarTorre(tower1, torre1);
  mostrarTorre(tower3, torre3);

};


torre1.addEventListener("click", function (e) {

  idDisco(tower1);

  mostrarTorre(tower1, torre1);

});


torre2.addEventListener("click", function (e) {

  idDisco(tower2);

  mostrarTorre(tower2, torre2);

});


torre3.addEventListener("click", function (e) {

  idDisco(tower3);

  mostrarTorre(tower3, torre3);

});
