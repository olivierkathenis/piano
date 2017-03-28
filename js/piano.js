/* Pour éviter accès aux variables dans le navigateur*/
function onDomReady () {
        let myNotes = document.querySelectorAll(".note");

        let Note = function (element) {
                this.element = element;
                this.element.addEventListener("click", this.select);
        }
        Note.prototype.select = function(event){
                let selectNote = event.target.classList[1];
                playNotes(selectNote);
        };

        let press = document.onkeyup = function(event) {
                let keypress = event.key;
                console.log(keypress);
                playNotes(keypress);
        }

        let playNotes = function (argument) {
                let monMP3 = new Audio();
                monMP3.src = "sounds/piano-" + argument + ".mp3";
                console.log(monMP3);
                monMP3.play();
        }

        let start = function () {
                for(let i = 0; i < myNotes.length; i++){
                        let newNote = new Note(myNotes[i]);
                }
        }

        start();
}
/*Attendre que le dom soit charger entièrement*/
window.addEventListener("DOMContentLoaded", onDomReady);
/*pour retirer => deuxième intéret pour externaliser la fonction*/
/*window.removeEventListener("DOMContentLoaded", onDomReady);*/

