/////////////////////////
///////// UTILS /////////
/////////////////////////

const drawSquircle = (ctx, geom, radii, smooth, lineWidth, color) => {
  const defaultFill = color;
  const lineWidthOffset = lineWidth / 2;
  // OPEN LEFT-TOP CORNER
  ctx.beginPath();
  ctx.lineTo(radii[0], lineWidthOffset);
  // TOP-RIGHT CORNER
  ctx.lineTo(geom.width - radii[1], lineWidthOffset);
  ctx.bezierCurveTo(
    geom.width - radii[1] / smooth,
    lineWidthOffset, // first bezier point
    geom.width - lineWidthOffset,
    radii[1] / smooth, // second bezier point
    geom.width - lineWidthOffset,
    radii[1] // last connect point
  );
  // BOTTOM-RIGHT CORNER
  ctx.lineTo(geom.width - lineWidthOffset, geom.height - radii[2]);
  ctx.bezierCurveTo(
    geom.width - lineWidthOffset,
    geom.height - radii[2] / smooth, // first bezier point
    geom.width - radii[2] / smooth,
    geom.height - lineWidthOffset, // second bezier point
    geom.width - radii[2],
    geom.height - lineWidthOffset // last connect point
  );
  // BOTTOM-LEFT CORNER
  ctx.lineTo(radii[3], geom.height - lineWidthOffset);
  ctx.bezierCurveTo(
    radii[3] / smooth,
    geom.height - lineWidthOffset, // first bezier point
    lineWidthOffset,
    geom.height - radii[3] / smooth, // second bezier point
    lineWidthOffset,
    geom.height - radii[3] // last connect point
  );
  // CLOSE LEFT-TOP CORNER
  ctx.lineTo(lineWidthOffset, radii[0]);
  ctx.bezierCurveTo(
    lineWidthOffset,
    radii[0] / smooth, // first bezier point
    radii[0] / smooth,
    lineWidthOffset, // second bezier point
    radii[0],
    lineWidthOffset // last connect point
  );
  ctx.closePath();

  if (lineWidth) {
    ctx.strokeStyle = defaultFill;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  } else {
    ctx.fillStyle = defaultFill;
    ctx.fill();
  }
};

/////////////////////////
///////// CLASS /////////
/////////////////////////

class SquircleClass {
  static get contextOptions() {
    return { alpha: true };
  }
  static get inputProperties() {
    return [
      "--squircle-radius",
      "--squircle-radius-top-left", // <-- if the order changes ...
      "--squircle-radius-top-right",
      "--squircle-radius-bottom-right",
      "--squircle-radius-bottom-left", // --> the slice values of individualRadiiProps need to be updated
      "--squircle-smooth",
      "--squircle-outline",
      "--squircle-fill"
    ];
  }

  paint(ctx, geom, properties) {
    const smoothRatio = 10;
    const distanceRatio = 1.8;
    const squircleSmooth = parseFloat(
      properties.get("--squircle-smooth") * smoothRatio
    );

    // CALCULATE RADII
    const individualRadiiProps = SquircleClass.inputProperties.slice(1, 5);

    let squircleRadii = individualRadiiProps.map((prop) => {
      const value = properties.get(prop);
      return value ? parseInt(value, 10) * distanceRatio : NaN;
    });

    let shorthand_R;

    // Check if any of the individual radii are NaN, if so, process the shorthand
    if (squircleRadii.some(isNaN)) {
      const radiusRegex = /([0-9]+[a-z%]*)/g; // Units are ignored.

      const radius_shorthand = properties.get("--squircle-radius").toString();
      const matches = radius_shorthand.match(radiusRegex);

      if (matches) {
        shorthand_R = matches.map((val) => parseInt(val, 10) * distanceRatio);

        while (shorthand_R.length < 4) {
          if (shorthand_R.length === 1) {
            // If there's only one value, duplicate it for all corners
            shorthand_R.push(shorthand_R[0]);
          } else if (shorthand_R.length === 2) {
            // If there are two values, first one applies to top and bottom, second to left and right
            shorthand_R = [
              shorthand_R[0],
              shorthand_R[1],
              shorthand_R[0],
              shorthand_R[1]
            ];
          } else if (shorthand_R.length === 3) {
            // If there are three values, first applies to top, second to right and left, third to bottom
            shorthand_R = [
              shorthand_R[0],
              shorthand_R[1],
              shorthand_R[2],
              shorthand_R[1]
            ];
          }
        }
      } else {
        // if no radii at all are provided, set default radius = 8, otherwise set undefined ones to 0
        const defaultRadius = squircleRadii.every(isNaN)
          ? 8 * distanceRatio
          : 0;
        shorthand_R = [
          defaultRadius,
          defaultRadius,
          defaultRadius,
          defaultRadius
        ];
      }
    }

    // Replace NaN values in radii with corresponding values from shorthand or default
    squircleRadii = squircleRadii.map((val, i) =>
      isNaN(val) ? shorthand_R[i] : val
    );

    const squrcleOutline = parseFloat(properties.get("--squircle-outline"), 10);
    const squrcleColor = properties.get("--squircle-fill").toString();

    const isSmooth = () => {
      if (typeof properties.get("--squircle-smooth")[0] !== "undefined") {
        if (squircleSmooth === 0) {
          return 1;
        }
        return squircleSmooth;
      } else {
        return 10;
      }
    };

    const isOutline = () => {
      if (squrcleOutline) {
        return squrcleOutline;
      } else {
        return 0;
      }
    };

    const isColor = () => {
      if (squrcleColor) {
        return squrcleColor;
      } else {
        return "#f45";
      }
    };

    const maxRadius = Math.max(...squircleRadii);
    if (maxRadius < geom.width / 2 && maxRadius < geom.height / 2) {
      drawSquircle(
        ctx,
        geom,
        squircleRadii,
        isSmooth(),
        isOutline(),
        isColor()
      );
    } else {
      const minRadius = Math.min(geom.width / 2, geom.height / 2);
      drawSquircle(
        ctx,
        geom,
        squircleRadii.map(() => minRadius),
        isSmooth(),
        isOutline(),
        isColor()
      );
    }
  }
}

/////////////////////////
/////// REGISTER ////////
/////////////////////////

if (typeof registerPaint !== "undefined") {
  registerPaint("squircle", SquircleClass);
}
