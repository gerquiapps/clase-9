import React from "react";
import AlarmButton from "./alarm-button";

export default class Alarm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            minutePosition: 0,
            hourPosition: 0,
            activated: false,
            buttonText: 'Activar Alarma'
        }
        this.buttonActionCallback = this.buttonActionCallback.bind(this);
        this.onClick = this.onClick.bind(this);
        this.canvas = null;
    }

    componentDidMount() {
        // console.log('alarm mounted');
        this.canvas = document.getElementById("alarm-canvas");
        this.canvas.addEventListener("click", this.onClick, false);
    }

    buttonActionCallback() {
        this.setState({ activated: !this.state.activated });
        this.setState({ buttonText: this.state.activated ? 'Activar Alarma' : 'Desactivar Alarma' });
    }

    onClick(event) {
        console.log('click on canvas');
        let x = 200;
        let y = 200;
        let dx = 4;
        let dy = 4;
        let d = 5;
        let width, height;
        let element = this.canvas;
        let offsetX = 0,
            offsetY = 0

        if (element.offsetParent) {
            do {
                offsetX += element.offsetLeft;
                offsetY += element.offsetTop;
            } while ((element == element.offsetParent));
        }

        x = event.pageX - offsetX;
        y = event.pageY - offsetY;

        // document.getElementById("info").value = "x: " + x + ", y: " + y;

        function pixelIndex(x, y) {
            return 4 * (y * element.width + x);
        }

        // data is an array where each 4 elements define a pixed, these are red,green,blue,alpha
        var ctx = element.getContext('2d');
        var data = ctx.getImageData(0, 0, element.width, element.height).data;
        var pixelIndexStart = pixelIndex(x, y);
        // only need the first three to see if there's something drawn there
        var red = 255 - data[pixelIndexStart + 0];
        var green = 255 - data[pixelIndexStart + 1];
        var blue = 255 - data[pixelIndexStart + 2];
        var hasLine = red + green + blue > 0;
        // document.getElementById("info").value = 'has line: ' + hasLine;
        console.log('tiene linea', hasLine);
    }

    start() {
        this.canvas.addEventListener("click", this.onClick, false);
    }


    calculateNumberPosition(position, radius, segments) {
        let centerX = 250;
        let centerY = 250;
        let angle = ((position * 2 * Math.PI) / segments) + 11;
        let x = centerX + radius * Math.cos(angle);
        let y = centerY + radius * Math.sin(angle);
        return { x: x, y: y };
    }

    draw(seconds, minutes, hours) {
        // console.log(x, y)
        let canvas = this.canvas;
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //hours
        ctx.beginPath();
        ctx.lineWidth = 12;
        ctx.strokeStyle = "#4A555E";
        ctx.moveTo(250, 250);
        ctx.lineTo(hours.x, hours.y);
        ctx.stroke();

        //minutes
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#C28C48 ";
        ctx.moveTo(250, 250);
        ctx.lineTo(minutes.x, minutes.y);
        ctx.stroke();

    }

    render() {
        return (
            <div>
                <canvas id="alarm-canvas" width="500" height="500"></canvas>
                <AlarmButton
                    activatedClass={this.state.activated ? 'btn-secondary' : 'btn-primary'}
                    buttonActionCallback={this.buttonActionCallback}
                    buttonText={this.state.buttonText} />
            </div>
        );
    }

}