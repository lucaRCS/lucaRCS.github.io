import { HitBoxes } from "./Colision.js"
import { interaction, x,y } from "./main.js"
import {text,escritaText,pressingM} from './main.js'
const canvas = document.getElementById('canva1')
const cxt = canvas.getContext('2d')
const maxWidth = 490
const lineHeight = 30
let xPos = 350
let yPos = 650
let choice = false
let yes = false
let what = ''
let colaboration = false
let chager = (booleandes) => {colaboration = booleandes}
function wrapText(context, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';

    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = context.measureText(testLine);
        const testWidth = metrics.width;

        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    context.fillText(line, x, y);
}

let caixa = new Image()
caixa.onload = function (){
    cxt.drawImage(caixa,0,0)
}
caixa.src = 'images/CaixaDialogo.png'
class Criador_de_falas{
    constructor(fala,semana){
        this.fala = fala
        this.semana = semana
    }
    escrita(but,helper,x){
        if(but){
            cxt.drawImage(caixa,300,600)
            cxt.fillStyle = 'white'
            cxt.font = '23px comic Sans'
            if (this.fala[x][helper]!==undefined) {
                escritaText(this.fala,x,helper)
                yes = true
            }else{
                choice = true
            }
            wrapText(cxt, text, xPos, yPos, maxWidth, lineHeight);
            if (choice) {
                cxt.fillText('sim                                                      não',370,720)
                if(yes){
                    cxt.fillText('*',358,720)
                }else{
                    cxt.fillText('*',700,720)
                }
                if (pressingM[1]) {
                    yes = false
                }
                if(pressingM[0]){
                    yes = true
                }
                if (pressingM[5]) {
                    what = yes
                    choice = false
                    colaboration = true
                }
            }
            return true
        }
        return false
    }
}
let chageMd = (bool) =>{choice = bool}
export {Criador_de_falas,colaboration,chager,choice,chageMd}