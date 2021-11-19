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
    down() {

    }

    up() {

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
}

// Se define la clase con las caracteristicas de las barras laterales
class Bar{
    constructor(x, y, width, height, board){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;
        this.kind = "rectangle";
        this.board.bars.push(this);
    }
}

// Función para dibujar las barras en pantalla
function draw(ctx, element){
    if(element !== null && element.hasOwnProperty("kind")){    
        switch(element.kind){
            case "rectangle":                
                ctx.fillRect(element.x, element.y, element.width, element.height);
                break;
        }
    }
}

window.addEventListener("load", main);

// Metodo principal para instanciar las clases
function main(){
    var board = new Board(1200, 600);
    var bar = new Bar(20, 100, 40, 100, board);
    var bar = new Bar(1140, 100, 40, 100, board);
    var canvas = document.getElementById("canvas");
    var boardView = new BoardView(canvas, board);
    boardView.draw();
}