 // citing images
/*
Arrow:  http://clipart-library.com/curved-arrows.html

World: https://pixabay.com/p-1254502/?no_redirect

Computer: https://www.istockphoto.com/se/illustrationer/ipad?excludenudity=true&sort=mostpopular&mediatype=illustration&phrase=ipad

 Clock Dan Shiffman
 Video: https://youtu.be/E4RyStef-gY

purple tech icons
https://dribbble.com/shots/3469825-Tech-Icons

*/





//image variables

var img2;
var img1;
var img3;
var img4;

//recangle object
var rectangles={
  height: 100,
  width: 250,
  }

var rec1;
var rec2;
var rec3;
var rec4;
var rec5;

var x;

var nums = [100, 200, 10, 50]

//paragraph variable
var p1;

var minutefacts = ["fact1", "fact2", "fact 3", "fact4"]


function preload() {
  img1 = loadImage("computer.jpg");
  img2 = loadImage("arrow.png");
  img3 = loadImage("leftarrow.png");
  img4 = loadImage("world.png");

}

function setup() {

createCanvas(1400, 2350);
//background(300);

callbuttons();

callimages();

calltitles();

 //noLoop();

 //traingle1();



}

function draw() {
noStroke();
fill(300);
rect(610, 1150, 400, 150);
//background(300);

  let h = hour()
  let min = minute()
  let sec = second()


  fill(0);
  noStroke();
  textSize(50);
  //strokeWeight(12);

  text(h + " : " + min + " : " + sec, 610, 1230);



  }




// all buttons 1-4
function drawbutton1( x, y, a, b, c,) {
  textSize(30);
  var col = color(a, b, c);
  var button = createButton("?");


  button.position(x, y);
  button.style("background-color", col);
  button.style("border-radius", "50%");
  button.style("font-size", "30px");
  button.mousePressed(drawshow1);
  button.style("cursor","pointer");
  button.mouseReleased(setup);
  button.size(50,50);
  }

    function drawbutton2( x, y, a, b, c,) {
    textSize(30);
    var col = color(a, b, c);
    var button = createButton("?");
    button.position(x, y);
    button.style("background-color", col);
    button.style("border-radius", "50%");
    button.style("font-size", "30px");
    button.mousePressed(drawshow2);
    button.style("cursor","pointer");
    button.mouseReleased(setup);
    button.size(50,50);
    }

      function drawbutton3( x, y, a, b, c,) {
      textSize(30);
      var col = color(a, b, c);
      var button = createButton("?");
      button.position(x, y);
      button.style("background-color", col);
      button.style("border-radius", "50%");
      button.style("font-size", "30px");
      button.mousePressed(drawshow3);
      button.style("cursor","pointer");
      button.mouseReleased(setup);
      button.size(50,50);
      }

        function drawbutton4( x, y, a, b, c,) {
        textSize(30);
        var col = color(a, b, c);
        var button = createButton("?");
        button.position(x, y);
        button.style("background-color", col);
        button.style("border-radius", "50%");
        button.style("font-size", "30px");
        button.mousePressed(drawshow4);
        button.style("cursor","pointer");
        button.mouseReleased(setup);
        button.size(50,50);
        }

// functions that call stuff


function callbuttons(){
  // top buttons

  // top left
  drawbutton1(200, 280, 200, 153, 247);

  //bottom left
  drawbutton2(180, 620, 200, 153, 247);

  // top right
  drawbutton3(1210, 280, 200, 153, 247);

  // bottom right
  drawbutton4(1210, 620, 200, 153, 247);

  //>bottom buttons




  }

function callimages(){
  //computer image
    image(img1, 470, 150, 500, 500);

  // arrow images

    image(img2, 855, 110, 400, 150);

    //bottom

    image(img2, 855, 430, 400, 150);

  // left bent arrow

      image(img3, -50, -160, 900, 700);

      //bottom

      image(img3, -90, 180, 900, 700);

      //world

      image(img4, 550, 170, 360, 210);

      tablet();

      gears();

      shield();

      file();

      health();

      tools();

     }

function calltitles(){

  // title
  textSize(50);
  fill(0);
  text("Using Big Data to Understand Human Behavior", 180, 80);

  //every minute:

  textSize(40);
  fill(0);
  text("Every Internet Minute...", 520, 750);
  drawminute();



    //BIG DATA? text

    textSize(25);
    fill(35, 68, 122);
    text("Big Data.", 570, 570);

    fill(35, 68, 122);
    textSize(25);
    text("What is", 795, 570);

    fill(35, 68, 122);
    textSize(25);
    text("it?", 930, 610);

    // sources of big data

    noStroke();
    fill(230, 222, 247);
      triangle(610, 1350 ,860 , 1350, 730, 1398);
      rect(450, 1300, 600, 70);

        textSize(40);
        fill(0);
        text("Sources Of Big Data", 550, 1350);

        //changing the world

        noStroke();
        fill(230, 222, 247);
        triangle(610, 1800 ,860 , 1800, 730, 1848);
        rect(450, 1750, 600, 70);

        textSize(40);
        fill(0);
        text("Changes For Our World", 550, 1800);

        //media
        textSize(18);
        fill(100);
        text("Media", 150, 1580);


        //machine
        text("Machine", 545, 1580);

        //record
        text("Record", 1035, 1580);

        //security
        text("Security", 140, 2050);

        //health
        text("Health", 560, 2050);

        //business
        text("Business", 1025, 2050);



          }

// all function shows
function drawshow1() {
  fill(215, 227, 247);
  rec1 = rect(105, 340, 300, rectangles.height);
  //rec1.show();
  textSize(14);
  fill(0);
  text("Big data is all the information collected from users of technology, which can be analysed to reveal patterns in human behavior and decisions.", 110, 350, 300, 100);
    }

    function drawshow2() {
      fill(215, 227, 247);
      rec2 = rect(100, 680, 300, rectangles.height);
      //rec2.show();
      textSize(14);
      fill(0);
      text("Data, whether from receipts, search history or how you spend your time, can uncover trends ranging from purchasing habits, to political beliefs to how likely you are to pay back loans.", 105, 690, 300, 100);

    }

      function drawshow3() {
        fill(215, 227, 247);
        rec3 = rect(1100, 350, 300, rectangles.height);
        //rec3.show();
        textSize(14);
        fill(0);
        text("Unlike social media, where every post is carefully curated to give the appearance of perfection, Big Data discloses more about a person’s characteristics than they themselves are aware.", 1105, 355, 300, 100);
        }

          function drawshow4() {
            fill(215, 227, 247);
            rec4 = rect(1100, 680, 300, rectangles.height);
            //rec4.show();
            textSize(14);
            fill(0);
            text("Your internet activity can accurately predict your age, gender, where you work and when you are going to quit, probability of committing a crime, emotional stability and so much more. ", 1105, 690, 300, 100);
              }





function drawminute(){
  var col = color(255, 254, 255);
  var button = createButton(" click here");
  button.style("background-color", col);
  button.style("font-size", "30px");
  button.position(450, 850);
  button.size(600,250);

  button.mousePressed(drawminute1);
  button.style("cursor","pointer");
  button.mousePressed(draw);


  fill(186, 207, 239);
  rect(425, 825, 650, 300);

    }

    function drawminute1(){
    var col = color(255, 254, 255);
    var button = createButton(" 500,000,000 links are shared");
    button.style("background-color", col);
    button.style("font-size", "30px");
    button.position(450, 850);
    button.size(600,250);
    button.mousePressed(drawminute2);
    button.style("cursor","pointer");
    fill(186, 207, 239);
    rect(425, 825, 650, 300);

    }

      function drawminute2(){
      var col = color(255, 254, 255);
      var button = createButton(" 3,500,000 searches are made ");
      button.style("background-color", col);
      button.style("font-size", "30px");
      button.position(450, 850);
      button.size(600,250);

      button.mousePressed(drawminute3);
      button.style("cursor","pointer");

      }

        function drawminute3(){
          var col = color(255, 254, 255);
          var button = createButton(" 570 websites are created ");
          button.style("background-color", col);
          button.style("font-size", "30px");
          button.position(450, 850);
          button.size(600,250);

          button.mousePressed(drawminute4);
          button.style("cursor","pointer");

          }

            function drawminute4(){
              var col = color(255, 254, 255);
              var button = createButton(" 500 hours of footage is uploaded ");
              button.style("background-color", col);
              button.style("font-size", "30px");
              button.position(450, 850);
              button.size(600,250);

              button.mousePressed(drawminute5);
              button.style("cursor","pointer");

              }

                function drawminute5(){
                  var col = color(255, 254, 255);
                  var button = createButton(" $750,000 is spent online");
                  button.style("background-color", col);
                  button.style("font-size", "30px");
                  button.position(450, 850);
                  button.size(600,250);

                  button.mousePressed(drawminute6);
                  button.style("cursor","pointer");

                  }

                    function drawminute6(){
                      var col = color(255, 254, 255);
                      var button = createButton(" This is occuring 24/4. Just let that sink in for a second. That's an awful lot and yet it's only a drop in the ocean. Calling this Big Data is the understatment of the decade! ");
                      button.style("background-color", col);
                      button.style("font-size", "30px");
                      button.position(450, 850);
                      button.size(600,250);

                      button.mousePressed(drawminute1);
                      button.style("cursor","pointer");

                    }

function drawfacts0()  {

    p1 = createP(minutefacts[0]);
    p1.position(650, 950);
 }

function drawfacts1()  {

    p1 = createP(minutefacts[1]);
    p1.position(650, 950);
}




// icon images functions here



function tablet(){

  function change(){
    textSize(20);
    fill(60);
    text("Ditigal material created by social media (i.e. texts, photos, videos, ", 100, 1660);
    text("facebook) and communication outlets (i.e. articels, podcasts, blogs).", 100, 1690);

    //fill(0);
    //  rect(450, 1650 ,60, 60);
        }

  button = createImg('tablet.png');
  button.position(200, 1400);
  button.mousePressed(change);
  button.style("cursor","pointer");
  button.mouseReleased(setup);



}


function gears(){

      button = createImg('gears.png');
      button.position(615, 1410);
      button.mousePressed(change2);
      button.style("cursor","pointer");
      button.mouseReleased(setup);
      }

        function change2(){
          textSize(20);
          fill(60);
          text("Data generated by computers and machines genreally without ", 500, 1660);
          text("human intervention (i.e. sensors, phone calls).", 500, 1690);

                }

function shield(){

    button = createImg('shield.png');
    button.position(1100, 1400);
    button.mousePressed(change3);
    button.style("cursor","pointer");
    button.mouseReleased(setup);
      }

        function change3(){
          textSize(20);
          fill(60);
          text("Data about the environment (i.e weather traffic) ", 900, 1660);
          text("documents, forms, purchases and other records.", 900, 1690);
            }

function file(){

      button = createImg('file.png');
      button.position(1100, 1900);
      button.mousePressed(change4);
      button.style("cursor","pointer");
      button.mouseReleased(setup);
        }

      function change4(){
        textSize(20);
        fill(60);
        text("The way business is done can be optimized by  ", 900, 2130);
        text("data driven decisions. ", 900, 2160);
            }

function health(){

      button = createImg('health.png');
      button.position(650, 1930);
      button.mousePressed(change5);
      button.style("cursor","pointer");
      button.mouseReleased(setup);
                    }

              function change5(){
                textSize(20);
                fill(60);
                text("It allows us to find new cures, better understand and ", 500, 2130);
                text("predict desease patterns.", 500, 2160);
                        }

function tools(){

          button = createImg('tools.png');
          button.position(210, 1900);
          button.mousePressed(change6);
          button.style("cursor","pointer");
          button.mouseReleased(setup);
                    }

                  function change6(){
                    textSize(20);
                    fill(60);
                    text("Big Data can be used to predict criminal activities, conduct ", 100, 2130);
                    text("investigations and ultimately, catch criminals faster.", 100, 2160);
                              }
