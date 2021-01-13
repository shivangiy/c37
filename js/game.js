class Game{
    constructor(){

    }
    getstate(){
        database.ref('gamestate').on('value',function(data){
            gamestate=data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gamestate:state
        })
    }
    start(){
        if(gamestate==0){
            player=new Player()
            player.getcount()
            form=new Form()
            form.display()
        }
    }
    play(){
        form.hide()
        textSize(30)
        text("GAME START",450,100)
        Player.getplayerinfo()
        if(allplayers!==undefined){
            var displayposition=150
            for(var p in allplayers){
                if(p==="player"+player.index){
                    fill ("red")
                }
                else{
                    fill ("black")
                }
                

                displayposition=displayposition+20
                textSize(15)
                text(allplayers[p].name+": "+allplayers[p].distance,420,displayposition)
            }
            if(keyDown(UP_ARROW)&&player.index!==null){
              player.distance=player.distance+20
              player.update()  
            }
        }
    }
}