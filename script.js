if(localStorage.getItem('record5k')==null){
    localStorage.setItem('record5k','0')
}else if(localStorage.getItem('record10k')==null){
    localStoarge.setItem('record10k','0')
}else if(localStorage.getItem('record15k')==null){  
    localStorage.setItem('record15k','0') 
}else if(localStorage.getItem('record30k')==null){
    localStorage.setItem('record30k','0')
}

window.addEventListener('load',
    ()=>{viewrecord.innerHTML = `MAIOR PONTUAÇÃO COM 5s: ${localStorage.getItem('record5k')}`
})
const btnclick = [
    document.querySelector('.btn_one'),
    document.querySelector('.btn_two'),
    document.querySelector('.btn_three')
]
const painelplay = document.querySelector('.painelplay')
const tela = document.querySelector('.tela')
const placar = document.querySelector('#placar')
const viewrecord = document.querySelector('#record')
const audio = document.querySelector('.audio');
const audioimg = document.querySelector('.audioimg')
const audiopainel = document.querySelector('.audiopainel')
let point = 0
let record = +localStorage.getItem('record5k')
let timertxt = document.querySelector('.timertxt')

function escolheu(){
    select = +document.querySelector('#selec').value
    if(select==5000){gameover5k()
    } else if(select==10000){gameover10k()
    } else if(select==15000){gameover15k()
    } else if(select==30000){gameover30k()
    }
    timertxt.innerHTML = `Timer: ${select/1000}s`
}
function play(){btnrandomizer()//aleatoriza os botoes
    audio.play()
    gamescreen()
    select = +document.querySelector('#selec').value
    if(select/1000 == 5){
        setTimeout(gameover5k,select)
    } else if(select/1000 == 10){
        setTimeout(gameover10k,select)
    } else if(select/1000 == 15){
        setTimeout(gameover15k,select)
    }else if(select/1000 == 30){
        setTimeout(gameover30k,select)
    }
        setTimeout(gameover,select)
}
const btn = (n)=>{
    point++
    placar.innerHTML =`Sua pontuação: ${point}`
    posrandom(1,n)//1=y
    posrandom(0,n)//0=x
}
const posrandom= (xy,n)=>{
    var newpos = randomnum(0,4)
    //console.log(newpos)
    if(xy==1){     
        selecposy(newpos,n)  
    } else{
        selecposx(newpos,n)
    }
}
function selecposy(newpos,btnn){
    btnclick[btnn].style.top = `${newpos*100}px`
}
function selecposx(newposs,btnn){
    btnclick[btnn].style.left = `${newposs*100}px`
}
const randomnum = (a,b)=>{
        return Math.floor(Math.random() * (b - a + 1)) + a
    }//retorna numero random
    

const btnrandomizer = ()=>{
    for(var i = 0; i < 3; i++){
        posrandom(0,i);posrandom(1,i)
    }
}
const gamescreen = ()=>{
    placar.style.display = 'flex'
    painelplay.style.display = 'none'
    tela.style.display = 'flex'
}
function mute(){
    audiopainel.style.display = 'none'
    audio.src = ''
}
const gameover5k=()=>{
    if(point > +localStorage.getItem('record5k')){
       localStorage.setItem('record5k', point) 
    }//guarda o record dos 5k
    viewrecord.innerHTML = `MAIOR PONTUAÇÃO COM 5s: ${localStorage.getItem('record5k')}`
}
const gameover10k = ()=>{
    if(point > +localStorage.getItem('record10k')){
        localStorage.setItem('record10k', point)
    }//guarda o record dos 10k
    viewrecord.innerHTML = `MAIOR PONTUAÇÃO COM 10s: ${localStorage.getItem('record10k')}`
}
const gameover15k = ()=>{
    if(point > +localStorage.getItem('record15k')){
        localStorage.setItem('record15k', point)
    }//guarda o record dos 10k
    viewrecord.innerHTML = `MAIOR PONTUAÇÃO COM 15s: ${localStorage.getItem('record15k')}`
}
const gameover30k = ()=>{
    if(point > +localStorage.getItem('record30k')){
        localStorage.setItem('record30k', point)
    }//guarda o record dos 10k
    viewrecord.innerHTML = `MAIOR PONTUAÇÃO COM 30s: ${localStorage.getItem('record30k')}`
}
const gameover=()=>{
    placar.innerHTML = `Seu ultimo placar foi ${point} `
    point = 0
    painelplay.style.display = 'flex'
    tela.style.display = 'none'
}