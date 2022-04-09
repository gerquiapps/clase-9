import React from "react";
import moment from "moment";

export default class Hands extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            secondPosition: moment().seconds(),
            minutePosition: moment().minutes(),
            hourPosition: moment().hours(),
        }
    }

    componentDidMount() {
        this.start();
    }

    start() {
        setInterval(() => {
            this.setState({
                secondPosition: moment().seconds(),
                minutePosition: moment().minutes(),
                hourPosition: moment().hours(),
            });
            console.log(this.state.secondPosition, this.state.minutePosition, this.state.hourPosition);
            let seconds = this.calculateNumberPosition(this.state.secondPosition, 170, 60);
            let minutes = this.calculateNumberPosition(this.state.minutePosition, 170, 60);
            let hours = this.calculateNumberPosition(this.state.hourPosition, 170, 12);
            this.draw(seconds, minutes, hours);
        }, 1000);
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
        var canvas = document.getElementById("hands");
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

        //seconds
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#488A9F";
        ctx.moveTo(250, 250);
        ctx.lineTo(seconds.x, seconds.y);
        ctx.stroke();

        var X = canvas.width / 2;
        var Y = canvas.height / 2;
        var R = 5;
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#DC5B2A';
        ctx.stroke();
    }

    render() {
        return (
            <div>
                <canvas id="hands" width="500" height="500"></canvas>
            </div>
        );
    }
}