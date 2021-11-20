// Se define la clase con las caracteristicas del juego PingPong con sus respectivos metodos
class Board{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.playing = false;
        this.gameOver = false;
        this.bars = [];
        this.ball = null;
    }
    get elements() {
        var elements = this.bars;
        elements.push(this.ball);
        return elements
    }
}

// Se define la clase con la tabla del juego y sus respectivos metodos
class BoardView{
    constructor(canvas, board){
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d")
    }
    draw(){
        for(var i = this.board.elements.length - 1; i >= 0 ; i--){
            var el = this.board.elements[i];
            draw(this.ctx, el);
        }
    }
    clean(){
        this.ctx.clearRect(0, 0, this.board.width, this.board.height);
    }
    play(){
        this.clean();
        this.draw();
    }
}

// Se define la clase con las caracteristicas de las barras laterales con sus respectivos metodos
class Bar{
    constructor(x, y, width, height, board){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;
        this.kind = "rectangle";
        this.speed = 10;

        this.board.bars.push(this);
    }
    down() {
        this.y += this.speed;
    }

    up() {
        this.y -= this.speed;
    }
}

//  Se define la clase con las caracteristicas de la esfera
class Ball{
    constructor(x, y, radius, board){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = 5;
        this.speedY = 0;
        this.speedX = 3;
        this.board = board;
        board.ball = this;

        this.kind = "circle";
    }
}

// Función para dibujar las barras en pantalla
function draw(ctx, element){
    if(element !== null && element.hasOwnProperty("kind")){    
        switch(element.kind){
            case "rectangle":                
                ctx.fillRect(element.x, element.y, element.width, element.height);
                break;
            case "circle":
                ctx.beginPath();
                ctx.arc(element.x, element.y, element.radius, 0, 7);
                ctx.fill();
                ctx.closePath();
                break;
        }
    }
}

window.addEventListener("load", main);
window.requestAnimationFrame(mover);

// Asignación de metodos a las teclas
document.addEventListener("keydown", e => {
    console.log(e);
    e.preventDefault();
    if(e.keyCode == 38){
        bar2.up();
    } else if (e.keyCode == 40){
        bar2.down();
    }
    else if (e.keyCode == 87){
        bar1.up();
    }
    else if (e.keyCode == 83){
        bar1.down();
    }
});

// Metodo principal para instanciar las clases
var bar1;
var bar2;
var boardView;
function main(){
    var board = new Board(1200, 600);
    bar1 = new Bar(20, 100, 40, 100, board);
    bar2 = new Bar(1140, 100, 40, 100, board);
    var canvas = document.getElementById("canvas");
    boardView = new BoardView(canvas, board);
    var ball = new Ball(350, 100, 10, board);
    mover();
}

function mover(){
    boardView.play();
    window.requestAnimationFrame(mover);
}