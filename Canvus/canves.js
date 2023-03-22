var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");

      // Define the circles and arrows
      var circles = [
        { x: 50, y: 50, radius: 30, color: "red", hit: false },
        { x: 50, y: 150, radius: 30, color: "green", hit: false },
        { x: 50, y: 250, radius: 30, color: "blue", hit: false },
        { x: 50, y: 350, radius: 30, color: "yellow", hit: false },
      ];

      var arrows = [
        { x1: 250, y1: 50, x2: 350, y2: 50,  hit: false },
        { x1: 250, y1: 150, x2: 350, y2: 150,  hit: false },
        { x1: 250, y1: 250, x2: 350, y2: 250,  hit: false },
        { x1: 250, y1: 350, x2: 350, y2: 350,  hit: false },
      ];
      
      // Draw the circles and arrows
      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        circles.forEach(function (circle) {
          ctx.beginPath();
          ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
          ctx.fillStyle = circle.color;
          ctx.fill();
        });
        
        arrows.forEach(function (arrow) {
          ctx.beginPath();
          ctx.moveTo(arrow.x1, arrow.y1);
          ctx.lineTo(arrow.x2, arrow.y2);
          ctx.lineWidth = 5;
          ctx.strokeStyle = "black";
          ctx.stroke();
        });
        //   drawArrow(ctx, 100, 120, 140, 140, 5, 'black');
      }

      draw();

      // Add event listeners to the circles
      canvas.addEventListener("click", function (event) {
        var x = event.clientX - canvas.offsetLeft;
        var y = event.clientY - canvas.offsetTop;

        circles.forEach(function (circle, index) {
          if (
            Math.sqrt(
              (x - circle.x) * (x - circle.x) + (y - circle.y) * (y - circle.y)
            ) <= circle.radius
          ) {
            arrows[index].hit = true;
            circle.color = "gray";
          }
        });
      });

      // Update the arrow positions and redraw the canvas
      function update() {
        arrows.forEach(function (arrow, index) {
          if (!arrow.hit) {
            return;
          }

          if (arrow.x2 > circles[index].x) {
            arrow.x2 -= 10;
          }

          if (arrow.x2 <= circles[index].x) {
            arrow.x2 = circles[index].x+30;
            arrow.hit = false;
          }
        });

        draw();
      }

      setInterval(update, 30);

      var button = document.querySelector('button').addEventListener("click", function(){
        document.location.reload();
      });

  

