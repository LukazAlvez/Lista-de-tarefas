let myLi = document.getElementsByTagName('li');
let fechar = document.getElementsByClassName('botao');

btnAddList = () =>{
  let nome = document.getElementById('nomeDaList');
  if(nome.value === ''){ 
    nome.style.border = "2px solid red";
  }else{
    document.querySelector('#addList').style.visibility = 'hidden';
    document.querySelector('.lista').style.visibility = 'visible';
    let nomeDaLista = document.getElementById('nomeList').innerHTML = nome.value;
  }
};

addTarefa = () =>{
  let texto = document.getElementById('nomeTarefa').value;
  let li = document.createElement('li');
  let t = document.createTextNode(texto);

  li.appendChild(t);

  if(texto === ''){
    alert('Digite o nome da lista')
  }else{
    document.getElementById("myUl").appendChild(li);
    document.getElementById('nomeTarefa').value = ''
  }
  
    let span = document.createElement('SPAN');
    texto = document.createTextNode('Excluir');
    span.className = 'botao';
    span.appendChild(texto);
    li.appendChild(span);

    for(i = 0; i < fechar.length ; i++){
        fechar[i].onclick = function (){
           this.parentNode.remove();
        }
    }

    
}


