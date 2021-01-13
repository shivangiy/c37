class Form{
    constructor(){
        this.input=createInput('')
        this.button=createButton('play')
        this.greeting=createElement('h2')
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        var title = createElement('h1');
        title.html("Subway Surfer Game");
        title.position(450,0);

       this.input.position(420,150);

        this.button.position(420,200);

 

        this.button.mousePressed(()=>{
          this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playercount = playercount+1;
            player.index=playercount
            player.update();
            player.updatecount(playercount)

            this.greeting.html("Welcome!!! "+player.name)
            this.greeting.position(450,250);
        })
    }
}