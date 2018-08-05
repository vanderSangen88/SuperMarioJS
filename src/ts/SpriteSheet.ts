export default class SpriteSheet {
    private image:any;
    private width:number;
    private height:number;
    private tiles:any;

    constructor(
        image:any, 
        width:number, 
        height:number
    ) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
    }

    define(
        name:string, 
        x:number, 
        y:number
    ) {
        const buffer = document.createElement('canvas');
        buffer.width = this.width;
        buffer.height = this.height;
        buffer.getContext('2d')
            .drawImage(
                this.image, 
                x * this.width, 
                y * this.height, 
                this.width, 
                this.height, 
                0, 
                0, 
                this.width, 
                this.height
        );
        this.tiles.set(name, buffer);
    }

    draw(
        name:string, 
        context:any, 
        x:number, 
        y:number
    ){
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, x, y);
    }

    drawTile(
        name:string,
        context: any,
        x: number,
        y: number
    ){
        this.draw(name, context, x * this.width, y * this.height);
    } 
}