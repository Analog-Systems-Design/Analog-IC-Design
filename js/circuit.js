/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */


"use strict"

var wW = 100px;
var wH = window.innerHeight;
var canvasHTML = document.getElementById("canvas");
canvasHTML.width = wW;
canvasHTML.height = wH;
var ctx = canvasHTML.getContext("2d");
var ix;
var iy;
var x;
var y;
var d;
var dx;
var dy;

function beginCircuit(a, b) {
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    x = a;
    y = b;
    d = 0;
    dx = 1;
    dy = 0;
    ix = x;
    iy = y;
    ctx.moveTo(x, y);
    drawWire(50);
    drawPower();
}

function endCircuit() {
    ctx.lineTo(ix, iy);
    ctx.stroke();
}

function drawWire(l) {
    x += dx * l;
    y += dy * l;
    ctx.lineTo(x, y);
}

function drawPower() {
    var n;
    drawWire(10);
    n = 3;
    ctx.moveTo(x + 10 * dy, y + 10 * dx);
    ctx.lineTo(x - 10 * dy, y - 10 * dx);
    x += dx * 5;
    y += dy * 5;
    while (n--) {
        ctx.moveTo(x + 15 * dy, y + 15 * dx);
        ctx.lineTo(x - 15 * dy, y - 15 * dx);
        x += dx * 5;
        y += dy * 5;
        ctx.moveTo(x + 10 * dy, y + 10 * dx);
        ctx.lineTo(x - 10 * dy, y - 10 * dx);
        if (n != 0) {
            x += dx * 5;
            y += dy * 5;
        }
    }
    ctx.moveTo(x, y);
    drawWire(10);
}

function drawCapacitor() {
    drawWire(22.5);
    ctx.moveTo(x + 10 * dy, y + 10 * dx);
    ctx.lineTo(x - 10 * dy, y - 10 * dx);
    x += dx * 5;
    y += dy * 5;
    ctx.moveTo(x + 10 * dy, y + 10 * dx);
    ctx.lineTo(x - 10 * dy, y - 10 * dx);
    ctx.moveTo(x, y);
    drawWire(22.5);
}

function drawInductor() {
    var n, xs, ys;
    drawWire(9);
    n = 4;
    xs = 1 + Math.abs(dy);
    ys = 1 + Math.abs(dx);
    x += dx * 6;
    y += dy * 6;
    ctx.scale(xs, ys);
    while (n--) {
        //ctx.moveTo(x/xs+5*Math.abs(dx),y/ys+5*dy);
        ctx.moveTo(x / xs + 5 * Math.abs(dx), y / ys + 5 * dy);
        ctx.arc(x / xs, y / ys, 5, Math.PI / 2 * dy, Math.PI + Math.PI / 2 * dy, 1);
        x += 6.5 * dx;
        y += 6.5 * dy;
        if (n != 0) {
            if (dx >= 0) {
                ctx.moveTo(x / xs - 5 * dx, y / ys - 5 * dy);
                //ctx.lineTo(0,0);
            }

            ctx.moveTo(x / xs - 5 * dx, y / ys - 5 * dy);
            //alert("a"+ctx.stroke());
            ctx.arc(x / xs - 6.5 / 2 * dx, y / ys - 6.5 / 2 * dy, 1.5, Math.PI + Math.PI / 2 * dy, Math.PI / 2 * dy, 1);
        }
    }
    ctx.moveTo(x / xs - 1.75 * dx, y / ys - 1.75 * dy);
    ctx.scale(1 / xs, 1 / ys);
    ctx.lineTo(x, y);
    drawWire(9);
}

function drawTrimmer() {
    ctx.moveTo(x + 35 * dx - 7 * dy, y + 35 * dy - 7 * dx);
    ctx.lineTo(x + 15 * dx + 7 * dy, y + 15 * dy + 7 * dx);
    ctx.moveTo(x + 13 * dx + 4 * dy, y + 13 * dy + 4 * dx);
    ctx.lineTo(x + 17 * dx + 10 * dy, y + 17 * dy + 10 * dx);
    ctx.moveTo(x, y);
    drawCapacitor();
}

function drawResistor() {
    var n;
    drawWire(10);
    n = 5;
    x += dx * 5;
    y += dy * 5;
    while (n--) {
        ctx.lineTo(x - 5 * dy, y - 5 * dx);
        ctx.lineTo(x + 5 * dy, y + 5 * dx);
        x += 5 * dx;
        y += 5 * dy;
    }
    ctx.lineTo(x, y);
    drawWire(10);
}

function turnClockwise() {
    d++;
    dx = Math.cos(1.570796 * d);
    dy = Math.sin(1.570796 * d);
}

function turnCounterClockwise() {
    d--;
    dx = Math.cos(1.570796 * d);
    dy = Math.sin(1.570796 * d);
}

beginCircuit(100, 50);
drawWire(50);
turnClockwise();
drawWire(50);
drawCapacitor();
drawWire(50);
turnClockwise();
drawWire(25);
drawInductor();
drawWire(25);
turnClockwise();
drawResistor();
turnCounterClockwise();
drawTrimmer();
endCircuit();

beginCircuit(100, 250);
drawWire(50);
turnClockwise();
drawWire(50);
turnClockwise();
drawWire(50);
drawTrimmer();
drawWire(50);
turnClockwise();
endCircuit();

beginCircuit(100, 250);
drawWire(50);
turnClockwise();
drawWire(100);
turnClockwise();
drawWire(50);
drawResistor();
drawWire(50);
turnClockwise();
endCircuit();

beginCircuit(100, 250);
drawWire(50);
turnClockwise();
drawWire(150);
turnClockwise();
drawWire(50);
drawInductor();
drawWire(50);
turnClockwise();
endCircuit();