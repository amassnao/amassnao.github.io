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

function generateRandomStars(x, y, offsetX, offsetY, count, svgRef) {
    for (var i=0; i<count; i++)
        new Star(x, y, offsetX, offsetY, svgRef)
}

export default function() {

    const onSvgReady = (svgRef) => generateRandomStars(-50, -20, 50, 20, 200, svgRef)

    return (
        <div className="loading">
            <svg ref={onSvgReady} className="board">
                Sorry, your browser does not support inline SVG.
            </svg> 
        </div>
    )
}