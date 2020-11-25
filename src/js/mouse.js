export default class Mouse {
    constructor(canvas) {
        this.x = 0;
        this.y = 0;
        this.rect = canvas.getBoundingClientRect();

        canvas.addEventListener('mousemove', this.canvasMouseMoveHandler.bind(this));
    }

    canvasMouseMoveHandler(e){
        this.x = e.clientX - this.rect.left;
        this.y = e.clientY - this.rect.top;
    }
}