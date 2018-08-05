import SpriteSheet from "./SpriteSheet";
import { loadImg, loadLevel } from "./loaders";

function drawBackground(background:any, context:any, sprites:SpriteSheet){
    background.ranges.forEach(([x1, x2, y1, y2]) => {
        for(let x = x1; x < x2; x++) {
            for(let y = y1; y < y2; y++) {
                sprites.drawTile(background.tile, context, x, y);
            }
        }
    })
}

const canvas = <HTMLCanvasElement> document.querySelector("#screen");
const context = canvas.getContext('2d');

loadImg('./img/tiles.png')
.then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define('ground', 0, 0);
    sprites.define('sky', 3, 23);

    loadLevel('1-1')
        .then(level => { 
            level.backgrounds.forEach(background => {
                drawBackground(background, context, sprites);
            })
        });
});
