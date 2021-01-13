var database,form,game,player
var gamestate=0
var playercount
var allplayers

function setup(){
    createCanvas(400,400);
    database = firebase.database();
    game=new Game()
    game.getstate()
    game.start()
}
function draw(){
    if(playercount===4){
        game.update(1)
    }
    if(gamestate===1){
        clear ()
        game.play()
    }
}