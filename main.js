var album=["https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_01.png","https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_02.png","https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_03.png","https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_04.png","https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_05.png","https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_06.png","https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_07.png","https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_08.png","https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_09.png","https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_10.png"];
var move=0;
function Move(){
    document.getElementById("Monkey").src=album[move];
    move++;
    if(move==9){
        move=0;
    }
}