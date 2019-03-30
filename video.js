function main()
{
  var canvas = document.getElementById('display')
  canvas.width = 600;
  canvas.height = 400;

  var ctx = canvas.getContext("2d");
  console.log("Video 01...")
  videos=[video1, video2, video3]
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

  console.log(videos)
  function draw(v,c,w,h,b) {
    c.drawImage(v,0,0,w,h);
    setTimeout(draw,20,v,c,w,h);
  }
  boton1.onclick=()=>{
    draw(video1,ctx,canvas.width,canvas.height,boton1);
  }
  boton2.onclick=()=>{
    draw(video2,ctx,canvas.width,canvas.height,boton2);}
  boton3.onclick=()=>{
    draw(video3,ctx,canvas.width,canvas.height,boton3);
    }
  }
