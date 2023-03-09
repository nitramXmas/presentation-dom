/* // initialisation d'une constante myMain et attribtion de l'element <main></main> de la page HTML
const myMain = document.querySelector('main');

// initialisation d'un constante myDiv avec creation de l'element HTML <div></div>
const myDiv = document.createElement('div');

// initialisation d'un constante myPar avec creation de l'element HTML <p></p>
const myPar = document.createElement('p');

// definition de myDiv comme enfant de myMain (ma div est dans mon main)
myMain.appendChild(myDiv);

// definition de myPar comme enfant de myDiv (mon paragraphe est dans ma div)
myDiv.appendChild(myPar);

// affectation d'un texte a myPar
myPar.innerHTML = "Mr Propre lorsqu'il revient de Basic-Fit";

// affectation d'une classe : le CSS suit
myPar.classList.add('text-format');

// identification d'un element de la page HTML et modification directe du style
document.getElementById('vroom').style.rotate = '180deg';

//initialisation d'un variable myButton et attribution de l'element <button></button> de la page HTML
let myButton = document.querySelector('button');

//modification du texte du boutton
myButton.innerHTML = 'Vous pouvez cliquer';

//verification de la presence d'un attribut et affectation d'une classe au bouton : le CSS suit
myButton.hasAttribute('class');
myButton.setAttribute('class', 'button-style');
myButton.hasAttribute('class');
myButton.getAttribute('class');

//fonction d'alerte "warning" avec message texte
function warning() {
  return alert('Il est renversant !');
}

//appel de la fonction d'alerte sur un evenement de clic
myButton.addEventListener('click', warning); */
