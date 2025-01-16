"use strict";

const setCubeInteractive = () => {
    const cubeElement = document.querySelector(".cube");
    const sideElements = document.querySelectorAll(".side");

    // Cube move effect in "3D space" via mousemove event
    window.addEventListener("mousemove", Event => {
        const divider = 1.5;
        const xAxis = (window.innerWidth / 2 - Event.pageX) / divider;
        const yAxis = (window.innerHeight / 2 - Event.pageY) / divider;

        // "-" xAxis means move left/ right in more intuitive way <=> just x-Axis reverse direction
        cubeElement.style.transform = `rotateX(${yAxis}deg) rotateY(${-xAxis}deg)`;
    });

    // Actual time in cube
    const timeInterval = () => {
        sideElements.forEach(element => element.textContent = (new Date()).toLocaleTimeString());
        setTimeout(timeInterval, 1000);
    };

    // init
    timeInterval();
};

window.onload = setCubeInteractive;


