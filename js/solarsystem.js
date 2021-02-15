const c = document.getElementById("solar-system");
const ctx = document.getElementById("solar-system").getContext('2d');
let planet1
let planet2
let planet3
let planets
let sun
let G = 0.5;

function init() {
    c.width = 300;
    c.height = 300;

    sun = new Body(30, {x: 150, y: 150}, {x: 0, y: 0, mag: 0}, '#ffe41e');

    planet1 = new Body(2, randPlanetPos(), {x: 1, y: 1, mag: 0.5}, 'rgba(67, 84, 107, 1)');
    planet2 = new Body(2, randPlanetPos(), {x: 1, y: 1, mag: 0.5}, 'rgba(67, 84, 107, 1)');
    planet3 = new Body(2, randPlanetPos(), {x: 1, y: 1, mag: 0.5}, 'rgba(67, 84, 107, 1)');

    planets = [];

    for(let i = 0; i < 100; i++) {
      planets[i] = new Body(2, randPlanetPos(), {x: 1, y: 1, mag: 0.5}, '#1D2228');
    }

    //planet1.vel = circularOrbitVel(planet1);
    //planet2.vel = circularOrbitVel(planet2);
    //planet3.vel = circularOrbitVel(planet3);

    window.requestAnimationFrame(draw);
}

function draw(c) {

  ctx.clearRect(0, 0, 400, 400);
  /*
  sun.attract(planet1);
  sun.attract(planet2);
  sun.attract(planet3);

  planet1.show();
  planet2.show();
  planet3.show();
  */

  for(let i = 0; i < planets.length; i++) {
    sun.attract(planets[i]);
    planets[i].show();
  }

  sun.show();


  window.requestAnimationFrame(draw);

}

function Body(_mass, _pos, _vel, _color) {
  this.mass = _mass;
  this.pos = _pos;
  this.vel = _vel;
  this.r = this.mass;
  this.color = _color;

  this.show = () => {
    drawCircle(this.pos.x, this.pos.y, this.r, this.color);
    this.update();
  }

  this.update = () => {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

  }

  this.applyForce = (f, fMag) => {
    this.vel.x -= (f.x * fMag) / this.mass;
    this.vel.y -= (f.y * fMag) / this.mass;
  }

  this.attract = (orbiter) => {
    let dx = orbiter.pos.x - this.pos.x;
    let dy = orbiter.pos.y - this.pos.y;

    let r = Math.sqrt( (dx * dx) + (dy * dy) );

    let f = {x: dx, y: dy};
    let fMag = G * this.mass * orbiter.mass / (r * r);

    orbiter.applyForce(f, fMag);

  }

}

function randPlanetPos() {
  let r = Math.random(sun.r, 200);
  let theta = Math.random(2 * Math.PI);
  let planetPos = {x: 300 * r * Math.cos(theta), y: 300 * r * Math.sin(theta)};
  return planetPos;

}

function circularOrbitVel(planet) {
  let planetVel = planet.pos;
  planetVel.x = planet.pos.y;
  planetVel.y = -planet.pos.x;
  planetVel.mag = Math.sqrt(G * sun.mass / planet.vel.mag);

  return planetVel;

}

function drawCircle(x, y, r, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, false);
  ctx.fill();
}


init();
