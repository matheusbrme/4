var path,boy, leftBoundary,rightBoundary,a1,a2;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  a1 = loadImage ("path.png")
  //loadAnimation (carregarAnimação) de corrida para o menino
   a2 = loadAnimation ("runner-1.png","runner-2.png")
}

function setup(){
  
  createCanvas(400,400);


  path  =  createSprite(200,0);
  path.addImage(a1)

  boy  =  createSprite(200,300);
  boy.addAnimation("correr",a2)

 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

//crie um sprite de menino
//adicione uma animação de corrida para ele
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
 
  rightBoundary.visible = false
   
  leftBoundary.visible = false

  // mover o menino com o mouse usando mouseX
  boy.x = mouseX
  edges= createEdgeSprites();
  boy.collide(edges)
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }





  
  drawSprites();
}
