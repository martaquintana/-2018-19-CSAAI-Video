function main()
{
  var display;


  console.log("Realizador...")
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

  video1.onmouseover = () => {
          console.log("Mouse over 1!!");
          //video1.muted=false;
          video1.style.borderStyle = "double";
  }

  video1.onmouseout = () => {
          console.log("Mouse out 1!!");
          //video1.muted= true;
          video1.style.borderStyle = "";
  }

  video2.onmouseover = () => {
          console.log("Mouse over 2!!");
          //video2.muted=false;
          video2.style.borderStyle = "double";
  }
  video2.onmouseout = () => {
          console.log("Mouse out 2!!");
          //video2.muted=true;
          video2.style.borderStyle = "";
  }

  video3.onmouseover = () => {
          console.log("Mouse over 3!!");
          //video3.muted=false;
          video3.style.borderStyle = "double";
  }
  video3.onmouseout = () => {
          console.log("Mouse out 3!!");
          //video3.muted=true;
          video3.style.borderStyle = "";
  }


  boton1.onclick=()=>{
    cambiarvideo(0);
    display.currentTime = video1.currentTime;
    video1.style.borderColor= "red";
    video2.style.borderColor= "";
    video3.style.borderColor= "";
    boton1.style.borderStyle = "double";
    boton2.style.borderStyle = "";
    boton3.style.borderStyle = "";
  }
  boton2.onclick=()=>{
    cambiarvideo(1);
    display.currentTime = video2.currentTime;
    video1.style.borderColor= "";
    video2.style.borderColor= "red";
    video3.style.borderColor= "";
    boton1.style.borderStyle = "";
    boton2.style.borderStyle = "double";
    boton3.style.borderStyle = "";

  }
  boton3.onclick=()=>{
    cambiarvideo(2);
    display.currentTime = video3.currentTime;
    video1.style.borderColor= "";
    video2.style.borderColor= "";
    video3.style.borderColor= "red";
    boton1.style.borderStyle = "";
    boton2.style.borderStyle = "";
    boton3.style.borderStyle = "double";
  }

function cambiarvideo(n){
    console.log(v[n])
    videosource = document.getElementById('pantalla');
    videosource.setAttribute('src', v[n]);
    display.load();
    display.setAttribute('src', v[n]);
    display.play();

  }
}
