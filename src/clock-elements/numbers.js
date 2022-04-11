import React from "react";

export default class Numbers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startNumber: 1,
            endNumber: 12,
            currentNumber: 1,
            initialX: 320,
            initialY: 120,
            currentX: 320,
            currentY: 120
        }
    }

    componentDidMount() {
        this.drawNumbers();
    }

    calculateNumberPosition(position, radius) {
        let centerX = 235;
        let centerY = 265;
        let angle = ((position * 2 * Math.PI) / 12 ) +11;
        let x = centerX + radius * Math.cos(angle);
        let y = centerY + radius * Math.sin(angle);
        return { x: x, y: y };
    }

    drawNumbers() {
    
        for (let i = this.state.startNumber; i <= this.state.endNumber; i++) {
            // console.log(i);
            var canvas = document.getElementById("numbers");
            var ctx = canvas.getContext("2d");
            ctx.font = "48px Arial";
            let { x, y } = this.calculateNumberPosition(i, 170);

            this.setState({ currentY: y, currentX: x });

            ctx.strokeText(this.state.currentNumber, x, y);
            // console.log(this.state.currentNumber);
            this.setState({ currentNumber: this.state.currentNumber++ });
        }
    }

    render() {
        return (
            <div>
                <canvas id="numbers" width="500" height="500"></canvas>
            </div>
        );
    }
}