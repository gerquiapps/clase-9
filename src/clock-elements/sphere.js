import React from "react";

export default class Sphere extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.draw();
        this.drawCenter();  
    }

    draw() {
        var canvas = document.getElementById('sphere');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            var X = canvas.width / 2;
            var Y = canvas.height / 2;
            var R = 200;
            ctx.beginPath();
            ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
            ctx.lineWidth = 6;
            ctx.strokeStyle = '#FF0000';
            ctx.stroke();
            
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
            ctx.font = "24px Arial";
            ctx.strokeText('Time Machine', 180, 350);

            var R2 = 210;
            ctx.beginPath();
            ctx.arc(X, Y, R2, 0, 2 * Math.PI, false);
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#656565';
            ctx.stroke();

        }
    }

    drawCenter() {
        var canvas = document.getElementById('sphere');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            var X = canvas.width / 2;
            var Y = canvas.height / 2;
            var R = 10;
            ctx.beginPath();
            ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
            ctx.lineWidth = 20;
            ctx.strokeStyle = '#C70F25';
            ctx.stroke();
        }
    }

    render() {
        return (
            <div>
                <canvas id="sphere" width="500" height="500"></canvas>
            </div>
        );
    }
}