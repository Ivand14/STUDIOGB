const imagenGaleria=document.querySelectorAll('.img-galeria')
let imagenesLight=document.querySelector('.agregar-imagen')
const contenedorLight=document.querySelector('.light')
const close=document.querySelector('#close')

let imagenes=[...imagenGaleria];


imagenes.forEach(imagen=>{
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})


const aparecerImagen=(imagen)=>{     
    imagenesLight.src=imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImg') }


close.addEventListener('click',(e)=>{
    if(e.target!=imagenGaleria){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImg')
    }
})

//Menu

const menuH=document.querySelector('.menuH')
const contIt=document.querySelector('#contIt')
const nav=document.querySelector('.nav')
const crossH=document.querySelector('.crossH')
const cruz=document.querySelector('.cruz')

menuH.addEventListener('click',()=>{
    contIt.classList.add('abrir')
})

window.addEventListener('click',(e)=>{
    if(contIt.classList.contains('abrir') && e.target!=contIt && e.target!=menuH){
        contIt.classList.toggle('abrir')
    }
})

const menu=()=>{
    let desplazamiento=window.scrollY;
    if (desplazamiento > 8 ) {
        nav.classList.add('nav1') 
        nav.style.transition='2s'
    } else {
        nav.classList.remove('nav1')
    }
}

window.addEventListener('scroll',menu)

window.addEventListener('load',()=>{
    const load=document.querySelector('#load')
    const body=document.querySelector('#body')
    const contLoader=document.querySelector('.contLoader')
    contLoader.style.display='none';
    load.style.display='none';
    body.style.display='flex,column';
    body.classList.remove('hidden');
    menu()
})