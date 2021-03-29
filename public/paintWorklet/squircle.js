const drawSquircle = (ctx, geom, radius, smooth) => {
  // OPEN LEFT-TOP CORNER
  ctx.beginPath();
  ctx.lineTo(radius, 0);
  // TOP-RIGHT CORNER
  ctx.lineTo(geom.width - radius, 0);
  ctx.bezierCurveTo(
    geom.width - radius / smooth,
    0, // first bezier point
    geom.width,
    radius / smooth, // second bezier point
    geom.width,
    radius // last connect point
  );
  // BOTTOM-RIGHT CORNER
  ctx.lineTo(geom.width, geom.height - radius);
  ctx.bezierCurveTo(
    geom.width,
    geom.height - radius / smooth, // first bezier point
    geom.width - radius / smooth,
    geom.height, // second bezier point
    geom.width - radius,
    geom.height // last connect point
  );
  // BOTTOM-LEFT CORNER
  ctx.lineTo(radius, geom.height);
  ctx.bezierCurveTo(
    radius / smooth,
    geom.height, // first bezier point
    0,
    geom.height - radius / smooth, // second bezier point
    0,
    geom.height - radius // last connect point
  );
  // CLOSE LEFT-TOP CORNER
  ctx.lineTo(0, radius);
  ctx.bezierCurveTo(
    0,
    radius / smooth, // first bezier point
    radius / smooth,
    0, // second bezier point
    radius,
    0 // last connect point
  );
  ctx.closePath();

  ctx.fillStyle = "black";
  ctx.fill();
};

// eslint-disable-next-line no-undef
registerPaint(
  "squircle",
  class {
    static get inputProperties() {
      return ["--squircle-radius", "--squircle-smooth"];
    }

    paint(ctx, geom, properties) {
      const distanceRatio = 1.8;
      const squircleSmooth = properties.get("--squircle-smooth") * 10;
      const squircleRadius =
        parseInt(properties.get("--squircle-radius"), 10) * distanceRatio;

      if (squircleRadius < geom.width / 2 && squircleRadius < geom.height / 2) {
        drawSquircle(
          ctx,
          geom,
          squircleRadius,
          squircleSmooth !== 0 ? squircleSmooth : 1
        );
      } else {
        drawSquircle(
          ctx,
          geom,
          Math.min(geom.width / 2, geom.height / 2),
          squircleSmooth !== 0 ? squircleSmooth : 1
        );
      }
    }
  }
);
