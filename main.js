// Se define la clase con las caracteristicas del juego PingPong
class Board{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.playing = false;
        this.gameOver = false;
        this.bars = [];
        this.ball = null;
    }
}

// Se define la clase con la tabla del juego
class BoardView{
    constructor(canvas, board){
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d")
    }
}

// Se le agrega un nuevo metodo a la clase Board
Board.prototype = {
    getElements(){
        var elements = this.bars;
        elements.push(ball);
        return elements
    }
}

window.addEventListener("load", main);

// Metodo principal para instanciar las clases
function main(){
    var board = new Board(1200, 600);
    var canvas = document.getElementById("canvas");
    var boardView = new BoardView(canvas, board);
}