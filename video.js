function main()
{
  console.log("Video 01...")

  video1 = document.getElementById("video1")
  boton1 = document.getElementById("boton1")
  videoDIRECTO=document.getElementById("videoDIRECTO")
  video1.src  ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video1.pause()
  video1.width = 200;
  video1.height= 100;
  boton1.onclick=()=>{
    video1.play();
    videoDIRECTO=video1;
    videoDIRECTO.play();
    videoDIRECTO.width = 200;
    videoDIRECTO.height= 100;
  }
/*
  video2 = document.getElementById("video2")
  boton2 = document.getElementById("boton2")
  video2.pause()
  video2.width = 200;
  video2.height= 100;
  boton2.onclick=()=>{video2.play()}

  video3 = document.getElementById("video3")
  boton3 = document.getElementById("boton3")
  video3.pause()
  video3.width = 200;
  video3.height= 100;
  boton3.onclick=()=>{video3.play()}*/
}
