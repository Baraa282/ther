emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

const marriageDate = new Date('2024-04-07T21:06:00');

function calculateTimeSinceMarriage() {
    const now = new Date();
    const years = now.getFullYear() - marriageDate.getFullYear();
    let months = now.getMonth() - marriageDate.getMonth();
    let days = now.getDate() - marriageDate.getDate();
    let hours = now.getHours() - marriageDate.getHours();
    let minutes = now.getMinutes() - marriageDate.getMinutes();
    let seconds = now.getSeconds() - marriageDate.getSeconds();
    
    if (seconds < 0){
        seconds +=60;
        minutes -=1;
    }

    if (minutes < 0) {
        minutes += 60;
        hours -= 1;
    }
    if (hours < 0) {
        hours += 24;
        days -= 1;
    }
    if (days < 0) {
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
        months -= 1;
    }
    if (months < 0) {
        months += 12;
    }

    return { years, months, days, hours, minutes, seconds };
}

function displayTimeSinceMarriage() {
    const { years, months, days, hours, minutes , seconds } = calculateTimeSinceMarriage();
    const resultDiv = document.getElementById('result');

    resultDiv.textContent = `Vi har varit tillsammans i ${years} år , ${months} månad(er), ${days} dag(ar), ${hours} timme(ar), ${minutes} minut(er), och ${seconds} sekund(er).`;
}


displayTimeSinceMarriage();
setInterval(displayTimeSinceMarriage, 60000); // Update every minute

// Heart Particle Animation
Loadr = new (function Loadr(id) {
    const max_size = 24;
    const max_particles = 1500;
    const min_vel = 20;
    const max_generation_per_frame = 10;

    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    var height = canvas.height;
    var center_y = height / 2;
    var width = canvas.width;
    var center_x = width / 2;
    var particles = [];
    var last = Date.now(), now = 0;
    var dt;

    function isInsideHeart(x, y) {
        x = ((x - center_x) / (center_x)) * 3;
        y = ((y - center_y) / (center_y)) * -3;
        var x2 = x * x;
        var y2 = y * y;
        return (Math.pow((x2 + y2 - 1), 3) - (x2 * (y2 * y)) < 0);
    }

    function random(size, freq) {
        var val = 0;
        var iter = freq;
        do {
            size /= iter;
            iter += freq;
            val += size * Math.random();
        } while (size >= 1);
        return val;
    }

    function Particle() {
        var x = center_x;
        var y = center_y;
        var size = ~~random(max_size, 2.4);
        var x_vel = ((max_size + min_vel) - size) / 2 - (Math.random() * ((max_size + min_vel) - size));
        var y_vel = ((max_size + min_vel) - size) / 2 - (Math.random() * ((max_size + min_vel) - size));
        var nx = x;
        var ny = y;
        var r, g, b, a = 0.05 * size;

        this.draw = function () {
            r = ~~(255 * (x / width));
            g = ~~(255 * (1 - (y / height)));
            b = ~~(255 - r);
            ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        }

        this.move = function (dt) {
            nx += x_vel * dt;
            ny += y_vel * dt;
            if (!isInsideHeart(nx, ny)) {
                if (!isInsideHeart(nx, y)) {
                    x_vel *= -1;
                    return;
                }
                if (!isInsideHeart(x, ny)) {
                    y_vel *= -1;
                    return;
                }
                x_vel = -1 * y_vel;
                y_vel = -1 * x_vel;
                return;
            }
            x = nx;
            y = ny;
        }
    }

    function movementTick() {
        var len = particles.length;
        var dead = max_particles - len;
        for (var i = 0; i < dead && i < max_generation_per_frame; i++) {
            particles.push(new Particle());
        }
        now = Date.now();
        dt = last - now;
        dt /= 1000;
        last = now;
        particles.forEach(function (p) {
            p.move(dt);
        });
    }

    function tick() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(function (p) {
            p.draw();
        });
        requestAnimationFrame(tick);
    }

    setInterval(movementTick, 16);
    tick();
})("loader");




document.getElementById("pauseButton").style.display = "none";
document.getElementById("playButton").onclick = function() {
  document.getElementById('demo').play();
  document.getElementById("pauseButton").style.display = "block";
  document.getElementById("playButton").style.display= "none";
}

document.getElementById("pauseButton").onclick = function() {
  document.getElementById('demo').pause();
  document.getElementById("pauseButton").style.display = "none";
  document.getElementById("playButton").style.display = "block";
}

 $(".element").typed({
        strings: ["Mini Dresses", "Are you real?"],
        typeSpeed: 40,
        loop: true
      });

