/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styles from "./style.module.scss";

import Range from "../../components/Range";

const HowItWorksSection = () => {
  const canvasRef = React.useRef(null);
  const [radius, setRadius] = React.useState(80);
  const [smooth, setSmooth] = React.useState(4);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawBezLine = (color, pointOne, PointTwo) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(pointOne.x, pointOne.y);
      ctx.lineTo(PointTwo.x, PointTwo.y);
      ctx.stroke();
    };

    const drawDot = (color, x, y) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
    };

    const draw = (containerWidth) => {
      let geom = { width: containerWidth / 1.4, height: 600 };
      let shiftFigure = {
        x: (containerWidth - containerWidth / 1.4) / 2,
        y: 20,
      };

      ///////////////////////
      // BEZIER DOTS
      let oneBezPoint = {
        x: shiftFigure.x,
        y: radius / smooth + shiftFigure.y,
      };
      let twoBezPoint = {
        x: radius / smooth + shiftFigure.x,
        y: shiftFigure.y,
      };
      let threeBezPoint = {
        x: geom.width - radius / smooth + shiftFigure.x,
        y: shiftFigure.y,
      };
      let fourBezPoint = {
        x: geom.width + shiftFigure.x,
        y: radius / smooth + shiftFigure.y,
      };

      // RECT DOTS
      let oneRectDot = { x: shiftFigure.x, y: radius + shiftFigure.y };
      let twoRectDot = { x: radius + shiftFigure.x, y: shiftFigure.y };
      let threeRectDot = {
        x: geom.width - radius + shiftFigure.x,
        y: shiftFigure.y,
      };
      let fourRectDot = {
        x: geom.width + shiftFigure.x,
        y: radius + shiftFigure.y,
      };

      ///////////////////////
      // DRAW BEZIER LINE
      let bezLineColor = "#f45";
      drawBezLine(bezLineColor, oneBezPoint, oneRectDot);
      drawBezLine(bezLineColor, twoBezPoint, twoRectDot);
      drawBezLine(bezLineColor, threeBezPoint, threeRectDot);
      drawBezLine(bezLineColor, fourBezPoint, fourRectDot);

      ///////////////////////
      // DRAW BEZIER CONTROL DOTS
      let bezDotColor = "#7F7CFF";
      drawDot(bezDotColor, oneBezPoint.x, oneBezPoint.y);
      drawDot(bezDotColor, twoBezPoint.x, twoBezPoint.y);
      drawDot(bezDotColor, threeBezPoint.x, threeBezPoint.y);
      drawDot(bezDotColor, fourBezPoint.x, fourBezPoint.y);

      ///////////////////////
      // DRAW RECTANGLE
      // OPEN LEFT-TOP CORNER
      ctx.beginPath();
      ctx.lineTo(radius + shiftFigure.x, shiftFigure.y);
      // TOP-RIGHT CORNER
      ctx.lineTo(geom.width - radius + shiftFigure.x, shiftFigure.y);
      ctx.bezierCurveTo(
        geom.width - radius / smooth + shiftFigure.x,
        shiftFigure.y, // first bezier point
        geom.width + shiftFigure.x,
        radius / smooth + shiftFigure.y, // second bezier point
        geom.width + shiftFigure.x,
        radius + shiftFigure.y // last connect point
      );
      // BOTTOM-RIGHT CORNER
      ctx.lineTo(
        geom.width + shiftFigure.x,
        geom.height - radius + shiftFigure.y
      );
      ctx.bezierCurveTo(
        geom.width + shiftFigure.x,
        geom.height - radius / smooth + shiftFigure.y, // first bezier point
        geom.width - radius / smooth + shiftFigure.x,
        geom.height + shiftFigure.y, // second bezier point
        geom.width - radius + shiftFigure.x,
        geom.height + shiftFigure.y // last connect point
      );
      // BOTTOM-LEFT CORNER
      ctx.lineTo(radius + shiftFigure.x, geom.height + shiftFigure.y);
      ctx.bezierCurveTo(
        radius / smooth + shiftFigure.x,
        geom.height + shiftFigure.y, // first bezier point
        shiftFigure.x,
        geom.height - radius / smooth + shiftFigure.y, // second bezier point
        shiftFigure.x,
        geom.height - radius + shiftFigure.y // last connect point
      );
      // CLOSE LEFT-TOP CORNER
      ctx.lineTo(shiftFigure.x, radius + shiftFigure.y);
      ctx.bezierCurveTo(
        shiftFigure.x,
        radius / smooth + shiftFigure.y, // first bezier point
        radius / smooth + shiftFigure.x,
        shiftFigure.y, // second bezier point
        radius + shiftFigure.x,
        shiftFigure.y // last connect point
      );
      ctx.closePath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(0,0,0,1";
      ctx.stroke();

      ///////////////////////
      // DRAW RECTANGLE CONTROL DOTS
      let rectDotColor = "#f45";
      drawDot(rectDotColor, oneRectDot.x, oneRectDot.y);
      drawDot(rectDotColor, twoRectDot.x, twoRectDot.y);
      drawDot(rectDotColor, threeRectDot.x, threeRectDot.y);
      drawDot(rectDotColor, fourRectDot.x, fourRectDot.y);
    };

    const resizeCanvas = () => {
      let parent = canvas.parentNode.parentNode;
      let styles = getComputedStyle(parent);
      let w = parseInt(styles.getPropertyValue("width"), 10);

      canvas.width = w / 2;
      canvas.height = 360;
      if (window.innerWidth < 1100) {
        canvas.width = w;
        canvas.height = 240;
      }
      draw(canvas.width);
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas, false);
  }, [radius, smooth]);

  return (
    <div className={styles.wrapWidth}>
      <div className={styles.wrap}>
        <div className={styles.canvasWrap}>
          <canvas ref={canvasRef} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.h2}>How it works</h2>
          <div className={`${styles.controls}`}>
            <Range
              className={styles.range}
              value={radius}
              min={30}
              max={120}
              onChange={(e) => {
                setRadius(Number(e.target.value));
              }}
            />
            <Range
              className={styles.range}
              value={smooth}
              min={1}
              max={10}
              step={1}
              onChange={(e) => {
                setSmooth(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
