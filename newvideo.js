function main(){

  console.log("Video 01...")
  video1 = document.getElementById("video1")
  video2 = document.getElementById("video2")
  video3 = document.getElementById("video3")
  boton1 = document.getElementById("boton1")
  boton2 = document.getElementById("boton2")
  boton3 = document.getElementById("boton3")
console.log(video1.src)

  video1.width = 200;
  video1.height= 100;
  video2.width = 200;
  video2.height= 100;
  video3.width = 200;
  video3.height= 100;

display = document.getElementById('display');
display.width = 600;
display.height = 400;


boton1.onclick = () => {
    console.log("Ver1")
    console.log(video1.src)

    //-- Indicar la fuente del vídeo
    display.src =video1.src;
    display.play();
  }
  boton2.onclick = () => {
      console.log("Ver2")

      //-- Indicar la fuente del vídeo
      display.src =video2.src;
      display.play();
    }

    boton3.onclick = () => {
        console.log("Ver3")

        //-- Indicar la fuente del vídeo
        display.src = video3.src;
        display.play();
      }


    video1.play();
    video2.play();
    video3.play();

}
