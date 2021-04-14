class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html(" BERRY COLLECTOR");
        this.title.position(500, 80);
        this.title.style('font-size', '90px');
        this.title.style('color', 'black');
        this.input.position(830,600);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lightGreen');
        this.button.position(845,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightGreen');
        this.reset.position(880, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightGreen');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello ! " + player.name)
            this.greeting.position(500,250);
            this.greeting.style('color', 'black');
            this.greeting.style('font-size', '100px');
        });

    }
}