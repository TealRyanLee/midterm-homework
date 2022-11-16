var song
var songIsplay=false 
// 設定此變數為'假'(false)，收到按下滑鼠把變數改為"真"(true)
var amp
var vol
function preload(){
  song = loadSound("Spooky Boop - Otis McDonald.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  // mic=new p5.AudioIn();
  // mic.start();

}

  // let x=width/2
  // let y=height/2
function draw() {
    background('#e9edc9')
  textSize(50)
  text("X:"+mouseX+"  Y:"+mouseY,50,50)

  push()
  translate(width/2,height/2)
  noStroke()
  fill('#00b4d8')
  // ellipse(width/2,height/2,500)
  ellipse(0,0,500) //face

  stroke(0)
  fill(255)
  strokeWeight(5)
  ellipse(-75,-80,100)
  ellipse(25,-80,100) //eyes

  fill(0)
  ellipse(-75+map(mouseX,0,width,-20,20),-80+map(mouseY,0,height,-20,20),10)
  ellipse(25+map(mouseX,0,width,-20,20),-80+map(mouseY,0,height,-20,20),10) //eyeball

  if(!songIsplay){
    noStroke()
    fill('#e9edc9')
    ellipse(-80,100,400,200) //mouth
  }
  else{
    vol = amp.getLevel() 
    noStroke()
    fill('#e9edc9')
    ellipse(-150,100,400,100)
  }
  
  pop()
}
function mousePressed()
  {
    if(!songIsplay){
      song.play()
      songIsplay = true
      amp=new p5.Amplitude()
  
    }
    else{
      song.pause()
      songIsplay = false
  
    }
    
  }

//   stroke(0)
//   strokeWeight(5)
//   ellipse(-75,-80,100)
//   ellipse(25,-80,100) //eyes

//   ellipse(-75,-80,10)
//   ellipse(25,-80,10) 
// var face_x,face_y,face_size
// var face_x = [] 
// var face_y = []
// // var face_size = []
// // var face_num = 10

// var song
// var songIsplay=false 
// // 設定此變數為'假'(false)，收到按下滑鼠把變數改為"真"(true)
// var amp
// var vol
// function preload(){
//   song = loadSound("Spooky Boop - Otis McDonald.mp3");
// }

// music_btn = createButton("音樂跳舞")
// music_btn.position(10,10)
// music_btn.size(350, 100);
// music_btn.style('background-color', 'black');
// music_btn.style('font-size', '44px');
// music_btn.style('color', 'white');
// music_btn.mousePressed(music_btn_pressed)

// mouse_btn = createButton("滑鼠跳動")
// mouse_btn.position(370,10)
// mouse_btn.size(350, 100);
// mouse_btn.style('background-color', 'black');
// mouse_btn.style('font-size', '44px');
// mouse_btn.style('color', 'white');
// mouse_btn.mousePressed(mouse_btn_pressed)

// Speech_btn = createButton("語音辨識(跳舞/不要跳)")
// Speech_btn.position(740,10)
// Speech_btn.size(350, 100);
// Speech_btn.style('background-color', 'black');
// Speech_btn.style('font-size', '32px');
// Speech_btn.style('color', 'white');
// Speech_btn.mousePressed(Speech_btn_pressed)


// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   // angleMode(DEGREES)
// //   // face_size = 400
// //   // face_x = width/2
// //   // face_y = height/2

// //   for(var i=0;i<face_num;i++){
// //     face_size[i] = random(100,400)  
// //     face_x[i] = random(0,width)
// //     face_y[i] = random(0,height)
// //   }
// }

// function music_btn_pressed(){
//   song.stop()
//   song.play()
//   songIsplay = true
//   mosueIsplay = false
//   amp=new p5.Amplitude()  

// }

// function mouse_btn_pressed(){
//   song.pause()
//   mosueIsplay = true
//   songIsplay = false

// }

// function Speech_btn_pressed(){
//   myRec.onResult = showResult;
//   myRec.start();  

// }

// function showResult()
// {
// 	if(myRec.resultValue==true) {
// 	     result = myRec.resultString
//          if(myRec.resultString==="跳舞")
//             {
//                 music_btn_pressed()
//              }
//          if(myRec.resultString==="不要跳")
//             {
 
//               mouse_btn_pressed()
//              }
// 	}
// }

// function draw() {
//   // background(220);
//   background('#e9edc9')
//   textSize(50)
//   text("X:"+mouseX+"  Y:"+mouseY,50,50)

//   push()
//   translate(width/2,height/2)
//   noStroke()
//   fill('#00b4d8')
//   // ellipse(width/2,height/2,500)
//   ellipse(0,0,500) //face

//   stroke(0)
//   fill(255)
//   strokeWeight(5)
//   ellipse(-75,-80,100)
//   ellipse(25,-80,100) //eyes

//   fill(0)
//   ellipse(-75+map(mouseX,0,width,-20,20),-80+map(mouseY,0,height,-20,20),10)
//   ellipse(25+map(mouseX,0,width,-20,20),-80+map(mouseY,0,height,-20,20),10) //eyeball

//   // if(mouseIsPressed){
//   // noStroke()
//   // fill('#e9edc9')
//   // ellipse(-80,100,400,200) //mouth
//   // }
//   // else{
//   //   noStroke()
//   //   fill('#e9edc9')
//   //   ellipse(-150,100,400,100)
//   // }
//   if(!songIsplay){
//     noStroke()
//     fill('#e9edc9')
//     ellipse(-80,100,400,200) //mouth
//   }
//   else{
//     vol = amp.getLevel() //取得聲音值(值為0~1之間)
//     noStroke()
//     fill('#e9edc9')
//     ellipse(-150,100,400,100)
//   }

//   pop()
// }

// function mousePressed()
// {
//   if(!songIsplay){
//     song.play()
//     songIsplay = true
//     amp=new p5.Amplitude()

//   }
//   else{
//     song.pause()
//     songIsplay = false

//   }
  
// }