const tabela = document.getElementById('tabela');
var numMinas = [];

for (let i = 0; i < 10; i++) {
  const linha = document.createElement('tr');
  
  for (let y = 0; y < 10; y++) {
    const celula = document.createElement('td');
    linha.appendChild(celula);

    celula.addEventListener('click', function(){
      let RandomNum = Math.floor(Math.random() * 2) + 1;
      this.textContent = RandomNum;
      
      let RandomMina = Math.random();
      if (RandomMina < 0.2) { 
        this.textContent = "x";
      } else {
        this.textContent = RandomNum;
      }
      
      if (this.textContent === "x") {
        window.alert("Você encontrou uma mina!");
      }
    });
  }

  tabela.appendChild(linha);
}