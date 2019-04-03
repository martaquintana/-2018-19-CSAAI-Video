function main()
{
  var display;


  console.log("Video 01...")
  video1 = document.getElementById("video1")
  video2 = document.getElementById("video2")
  video3 = document.getElementById("video3")
  boton1 = document.getElementById("boton1")
  boton2 = document.getElementById("boton2")
  boton3 = document.getElementById("boton3")

  video1.play()
  video2.play()
  video3.play()

  video1.width = 200;
  video1.height= 100;
  video2.width = 200;
  video2.height= 100;
  video3.width = 200;
  video3.height= 100;

display = document.getElementById('display');
display.width = 600;
display.height = 400;

var v = [
        "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4",
        "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4",
        "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
        ];


  boton1.onclick=()=>{cambiarvideo(0);}
  boton2.onclick=()=>{cambiarvideo(1);}
  boton3.onclick=()=>{cambiarvideo(2);}

function cambiarvideo(n){
  console.log('hey')
  videosource = document.getElementById('pantalla');
    videosource.setAttribute('src', v[n]);
    display.load();
    display.setAttribute('src', v[n]);
    display.play();
  }


}
