import React from 'react'

// css files
import '../css/loading.css'

class Star {


    setRandomPoint () {
        const x = Math.random() * (window.innerWidth + this.offsetX) + this.x
        const y = Math.random() * (window.innerHeight + this.offsetY) + this.y
        const life = Math.floor(Math.random() * 10) + 4
        this.star.setAttribute("cx", x);
        this.star.setAttribute("cy", y);
        this.star.setAttribute("r", Math.random() * 2);
        this.cxAnimation.setAttribute("from", x)
        this.cyAnimation.setAttribute("from", y)
        this.cxAnimation.setAttribute("to", x + Math.random() * 100)
        this.cyAnimation.setAttribute("to", y + Math.random() * 50)
        this.cxAnimation.setAttribute("dur", life + "s")
        this.cyAnimation.setAttribute("dur", life + "s")
        this.opacityAnimation.setAttribute("dur", life + "s");
    }

    createStar () {
        const star = document.createElementNS("http://www.w3.org/2000/svg", "circle")
        star.setAttribute("fill", "white");
        star.style.opacity = 0
        this.star = star
    }


    addOpacityAnimation() {
        const opacityAnimation = document.createElementNS("http://www.w3.org/2000/svg", "animate")
        opacityAnimation.setAttribute("attributeType", "CSS");
        opacityAnimation.setAttribute("attributeName", "opacity");
        opacityAnimation.setAttribute("from", 0);
        opacityAnimation.setAttribute("to", 1);
        opacityAnimation.setAttribute("values", "0; 1; 0");
        opacityAnimation.setAttribute("keyTimes", "0; 0.5; 1");
        opacityAnimation.setAttribute("repeatCount", "indefinite");
        opacityAnimation.onrepeat = () =>{
            this.setRandomPoint()
        }
        this.opacityAnimation = opacityAnimation
        this.star.appendChild(opacityAnimation)
    }

    addMoveAnimation() {
        const cxAnimation = document.createElementNS("http://www.w3.org/2000/svg", "animate")
        const cyAnimation = document.createElementNS("http://www.w3.org/2000/svg", "animate")
        cxAnimation.setAttribute("attributeName", "cx")
        cyAnimation.setAttribute("attributeName", "cy")
        cxAnimation.setAttribute("repeatCount", "indefinite");
        cyAnimation.setAttribute("repeatCount", "indefinite");
        this.cxAnimation = cxAnimation
        this.cyAnimation = cyAnimation
        this.star.appendChild(cxAnimation)
        this.star.appendChild(cyAnimation)
    }

    appendStar() {
        this.svgRef.appendChild(this.star)
    }

    constructor (x, y, offsetX, offsetY, svgRef) {
        this.x = x
        this.y = y
        this.offsetX = offsetX
        this.offsetY = offsetY
        this.svgRef = svgRef
        this.createStar()
        this.addOpacityAnimation()
        this.addMoveAnimation()
        this.setRandomPoint()
        this.appendStar()
    }
}

class Meteor {

    setRandomPoint () {
        const x = Math.random() * (window.innerWidth + this.offsetX) + this.x
        const y = Math.random() * (window.innerHeight + this.offsetY) + this.y
        const life = Math.floor(Math.random() * 4) + 1
        this.meteor.setAttribute("x1", x)
        this.meteor.setAttribute("x2", x)
        this.meteor.setAttribute("y1", y)
        this.meteor.setAttribute("y1", y)
        this.meteor.setAttribute("stroke-width", Math.random() * 2);
        const endX = x + 600
        const endY = y + 600
        this.x1Animation.setAttribute("from", x)
        this.x1Animation.setAttribute("to", endX - 50)
        this.x1Animation.setAttribute("dur", life + "s")
        this.x2Animation.setAttribute("from", x)
        this.x2Animation.setAttribute("to", endX)
        this.x2Animation.setAttribute("dur", life + "s")
        this.y1Animation.setAttribute("from", y)
        this.y1Animation.setAttribute("to", endY - 50)
        this.y1Animation.setAttribute("dur", life + "s")
        this.y2Animation.setAttribute("from", y)
        this.y2Animation.setAttribute("to", endY)
        this.y2Animation.setAttribute("dur", life + "s")
        this.opacityAnimation.setAttribute("dur", life + "s");
    }

    createMeteor () {
        const meteor = document.createElementNS("http://www.w3.org/2000/svg", "line")
        meteor.setAttribute("stroke", "white");
        meteor.style.opacity = 0
        this.meteor = meteor
    }

    addMoveAnimation() {
        const x1Animation = document.createElementNS("http://www.w3.org/2000/svg", "animate")
        const x2Animation = document.createElementNS("http://www.w3.org/2000/svg", "animate")
        const y1Animation = document.createElementNS("http://www.w3.org/2000/svg", "animate")
        const y2Animation = document.createElementNS("http://www.w3.org/2000/svg", "animate")
        x1Animation.setAttribute("attributeName", "x1")
        x1Animation.setAttribute("repeatCount", "indefinite");
        x2Animation.setAttribute("attributeName", "x2")
        x2Animation.setAttribute("repeatCount", "indefinite");
        y1Animation.setAttribute("attributeName", "y1")
        y1Animation.setAttribute("repeatCount", "indefinite");
        y2Animation.setAttribute("attributeName", "y2")
        y2Animation.setAttribute("repeatCount", "indefinite");
        this.x1Animation = x1Animation
        this.x2Animation = x2Animation
        this.y1Animation = y1Animation
        this.y2Animation = y2Animation
        this.meteor.appendChild(x1Animation)
        this.meteor.appendChild(x2Animation)
        this.meteor.appendChild(y1Animation)
        this.meteor.appendChild(y2Animation)
    }

    addOpacityAnimation() {
        const opacityAnimation = document.createElementNS("http://www.w3.org/2000/svg", "animate")
        opacityAnimation.setAttribute("attributeType", "CSS");
        opacityAnimation.setAttribute("attributeName", "opacity");
        opacityAnimation.setAttribute("from", 0);
        opacityAnimation.setAttribute("to", 1);
        opacityAnimation.setAttribute("values", "0; 1; 0");
        opacityAnimation.setAttribute("keyTimes", "0; 0.5; 1");
        opacityAnimation.setAttribute("repeatCount", "indefinite");
        opacityAnimation.onrepeat = () =>{
            this.setRandomPoint()
        }
        this.opacityAnimation = opacityAnimation
        this.meteor.appendChild(opacityAnimation)
    }

    appendMeteor() {
        this.svgRef.appendChild(this.meteor)
    }

    constructor (x, y, offsetX, offsetY, svgRef) {
        this.x = x
        this.y = y
        this.offsetX = offsetX
        this.offsetY = offsetY
        this.svgRef = svgRef
        this.createMeteor()
        this.addOpacityAnimation()
        this.addMoveAnimation()
        this.appendMeteor()
        this.setRandomPoint()
    }
}

function generateRandomStars(x, y, offsetX, offsetY, starCount, meteorCount, svgRef) {
    for (let i=0; i<starCount; i++)
        new Star(x, y, offsetX, offsetY, svgRef)
    for (let i=0; i<meteorCount; i++)
        new Meteor(x, y, offsetX, offsetY, svgRef)
}

export default function() {

    const onSvgReady = (svgRef) => generateRandomStars(-50, -20, 50, 20, 200, 100, svgRef)

    return (
        <div className="loading">
            <svg ref={onSvgReady} className="board">
                Sorry, your browser does not support inline SVG.
            </svg> 
        </div>
    )
}