import React, { Component } from 'react';
import * as PIXI from "pixi.js";
import mo from '../images/mo2.png';
import '../style.scss';


const rendererWidth = 930;
let rendererHeight = 800;
const frameWidth = 10;
const frameHeight = 10;
const frameMargin = 0;
const xOffest = frameWidth + frameMargin;
const yOffest = frameHeight + frameMargin;
const maxSpeed = 40;
// const DEFAULT_IMG = require("../images/mo2.png");
const url = require("../images/mo2.png");
// const DEFAULT_IMG =
//   "https://image.dhgate.com/0x0s/f2-albu-g6-M01-E7-89-rBVaSFve0OWAC9-FAAPF_kC49Mw936.jpg/black-mesh-fabrics-sexy-girls-beach-bikini.jpg";
const pixiAPP = new PIXI.Application({
    backgroundColor: 0xffffff,
    width: rendererWidth,
    height: rendererHeight,
    autoResize: true
});
pixiAPP.stage.interactive = true;
let particles = [];
class Particle {
    constructor(posX, posY, scale, baseTexture) {
        this.posX = posX;
        this.posY = posY;
        this.scale = scale;
        this.speedX = 0;
        this.speedY = 0;
        this.sprite = new PIXI.Sprite(new PIXI.Texture(baseTexture));
        this.sprite.scale.set(scale, scale);
        this.sprite.texture.frame = new PIXI.Rectangle(posX / scale, posY / scale, frameWidth / scale, frameHeight / scale);
        this.sprite.x = Math.random() * rendererWidth;
        this.sprite.y = Math.random() * rendererHeight;
        pixiAPP.stage.addChild(this.sprite);
    }
    update(mouseX, mouseY) {
        this.speedX = ((this.posX - this.sprite.x) / rendererWidth) * maxSpeed;
        this.speedY = ((this.posY - this.sprite.y) / rendererHeight) * maxSpeed;
        // console.log(`speedX is ${this.speedX}`);
        // console.log(`speedY is ${this.speedY}`);
        const distance = Math.sqrt(Math.pow(mouseX - this.sprite.x, 2) + Math.pow(mouseY - this.sprite.y, 2));
        if (distance < 30) {
            const accX = mouseX - this.sprite.x;
            // console.log(`accX is ${accX}`);
            this.speedX -= accX;
            const accY = mouseY - this.sprite.y;
            // console.log(`accY is ${accY}`);
            this.speedY -= accY;
        }
        this.sprite.x += this.speedX;
        this.sprite.y += this.speedY;
    }
    destroy() {
        pixiAPP.stage.removeChild(this.sprite);
        this.sprite.destroy();
    }
}

class PixiImage extends Component {
  constructor() {
    super();
    this.mouseX = Number.MAX_VALUE;
    this.mouseY = Number.MAX_VALUE;
    this.isOnSetup = false;
    this.handleMouseMove = (evt) => {
        this.mouseX = evt.data.originalEvent.clientX;
        this.mouseY = evt.data.originalEvent.clientY;
    };
    this.setUp = () => {
        this.setState({ hasError: false });
        particles.forEach(d => d.destroy());
        particles = [];
        // const url = (this.refs.input as HTMLInputElement).value;
        // const url = DEFAULT_IMG;
        if (!pixiAPP.loader.resources[`${mo}`].texture) {
            return this.setState({ hasError: true });
        }
        const texture = pixiAPP.loader.resources[`${mo}`].texture.baseTexture;
        rendererHeight = rendererWidth / (texture.width / texture.height);
        pixiAPP.renderer.resize(rendererWidth, rendererHeight);
        const scale = rendererWidth / texture.width;
        const xLoopCount = Math.floor(rendererWidth / xOffest) - 1;
        const yLoopCount = Math.floor(rendererHeight / yOffest) - 1;
        for (let i = 0; i < xLoopCount; i++) {
            for (let j = 0; j < yLoopCount; j++) {
                particles.push(new Particle(i * xOffest, j * yOffest, scale, texture));
                // console.log(`xoffset is ${xOffest}`);
                // console.log(`yoffset is ${yOffest}`);
                // console.log(`scale is ${scale}`);
                // console.log(`texture is ${texture}`);
            }
        }
        this.isOnSetup = false;
    };
    this.renderingLoop = () => {
        if (this.isOnSetup) {
            return;
        }
        const mouseX = this.mouseX - pixiAPP.renderer.view.offsetLeft;
        const mouseY = this.mouseY - pixiAPP.renderer.view.offsetTop;
        // console.log(`mouseX is ${mouseX}`);
        // console.log(`offsetx is ${this.offsetLeft}`);
        // console.log(`mouseY is ${mouseY}`);
        particles.forEach(element => element.update(mouseX, mouseY));
        pixiAPP.render();
    };
    this.renderParticles = () => {
        this.isOnSetup = true;
        // const url = DEFAULT_IMG;
        if (pixiAPP.loader.resources[`${mo}`]) {
            return this.setUp();
        }
        const load = pixiAPP.loader.add(`${mo}`).load(this.setUp);
    };
    this.state = { hasError: false };
      }
  componentDidMount() {
      // Letting pixi finishs its initiliazation stuff, that why it needs 10ms
      setTimeout(() => {
          this.refs.pixi.appendChild(pixiAPP.view);
          this.renderParticles();
      }, 10);
      pixiAPP.loader.onError.add(() => setTimeout(this.setState({ hasError: true })));
      pixiAPP.stage.on("mousemove", this.handleMouseMove);
      pixiAPP.ticker.add(this.renderingLoop);
  }
  render() {
    return (
      <div className="pixi_main">
        <div className="pixi_container" ref="pixi" />
      </div>
    );
  }
}


export default PixiImage;