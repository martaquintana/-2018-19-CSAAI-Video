function main()
{
  var canvas = document.getElementById('display')
  canvas.width = 600;
  canvas.height = 400;

  var ctx = canvas.getContext("2d");
  video = document.getElementById("video1")


  setInterval(ctx.drawImage(video, 0, 0, canvas.width, canvas.height), 30);


  console.log("Video 01...")
  videos=[video1, video2, video3]
  video1 = document.getElementById("video1")
  video2 = document.getElementById("video2")
  video3 = document.getElementById("video3")
  boton1 = document.getElementById("boton1")
  boton2 = document.getElementById("boton2")
  boton3 = document.getElementById("boton3")

  video1.pause()
  video2.pause()
  video3.pause()
  video1.width = 200;
  video1.height= 100;
  video2.width = 200;
  video2.height= 100;
  video3.width = 200;
  video3.height= 100;
  console.log(videos)
  boton1.onclick=()=>{video1.play();
    setInterval(ctx.drawImage(video1, 0, 0, canvas.width, canvas.height), 20);}
  boton2.onclick=()=>{video2.play();
    setInterval(ctx.drawImage(video2, 0, 0, canvas.width, canvas.height), 20);}
  boton3.onclick=()=>{video3.play();
    setInterval(ctx.drawImage(video3, 0, 0, canvas.width, canvas.height), 20);}
}
