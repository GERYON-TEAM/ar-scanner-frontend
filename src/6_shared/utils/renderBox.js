import labels from "./labels.json";

/**
 * Render prediction boxes
 * @param {HTMLCanvasElement} canvasRef canvas tag reference
 * @param {Array} boxes_data boxes array
 * @param {Array} scores_data scores array
 * @param {Array} classes_data class array
 * @param {Array[Number]} ratios boxes ratio [xRatio, yRatio]
 */
export const renderBoxes = (canvasRef, boxes_data, scores_data, classes_data, ratios) => {
  const ctx = canvasRef.getContext("2d");
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // clean canvas

  const colors = new Colors();

  // font configs
  const font = `${Math.max(
    Math.round(Math.max(ctx.canvas.width, ctx.canvas.height) / 40),
    14
  )}px Arial`;
  ctx.font = font;
  ctx.textBaseline = "top";

  // Filter boxes with scores_data > 0.75
  const highScoreBoxes = [];
  for (let i = 0; i < scores_data.length; i++) {
    if (scores_data[i] > 0.5) {
      highScoreBoxes.push({
        index: i,
        score: scores_data[i],
        box: boxes_data.slice(i * 4, (i + 1) * 4),
      });
    }
  }

  // Find the box with the maximum area among high-score boxes
  let maxAreaBox = null;
  let maxArea = 0;
  for (const highScoreBox of highScoreBoxes) {
    const [y1, x1, y2, x2] = highScoreBox.box;
    const width = (x2 - x1) * ratios[0];
    const height = (y2 - y1) * ratios[1];
    const area = width * height;

    if (area > maxArea) {
      maxArea = area;
      maxAreaBox = highScoreBox;
    }
  }
  console.log(maxAreaBox)
  if (maxAreaBox !== null) {
    const { index, score, box } = maxAreaBox;
    const [y1, x1, y2, x2] = box;
    const width = (x2 - x1) * ratios[0];
    const height = (y2 - y1) * ratios[1];

    // Calculate area
    const area = width * height;

    // draw box.
    const color = colors.get(classes_data[index]);
    ctx.fillStyle = Colors.hexToRgba(color, 0.2);
    ctx.fillRect(x1 * ratios[0], y1 * ratios[1], width, height);

    // draw border box.
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(Math.min(ctx.canvas.width, ctx.canvas.height) / 200, 2.5);
    ctx.strokeRect(x1 * ratios[0], y1 * ratios[1], width, height);

    // Draw the label background.
    ctx.fillStyle = color;
    const textWidth = ctx.measureText(`${labels[classes_data[index]]} - ${score * 100}% - Area: ${area.toFixed(2)} px^2`).width;
    const textHeight = parseInt(font, 10); // base 10
    const yText = y1 * ratios[1] - (textHeight + ctx.lineWidth);
    ctx.fillRect(
      x1 * ratios[0] - 1,
      yText < 0 ? 0 : yText,
      textWidth + ctx.lineWidth,
      textHeight + ctx.lineWidth
    );

    // Draw labels
    ctx.fillStyle = "#ffffff";
    ctx.fillText(`${labels[classes_data[index]]} - ${score * 100}% - Area: ${area.toFixed(2)} px^2`, x1 * ratios[0] - 1, yText < 0 ? 0 : yText);
    // Display the image of the maxAreaBox on the page
    
  }
};


class Colors {
  // ultralytics color palette https://ultralytics.com/
  constructor() {
    this.palette = [
      "#FF3838",
      "#FF9D97",
      "#FF701F",
      "#FFB21D",
      "#CFD231",
      "#48F90A",
      "#92CC17",
      "#3DDB86",
      "#1A9334",
      "#00D4BB",
      "#2C99A8",
      "#00C2FF",
      "#344593",
      "#6473FF",
      "#0018EC",
      "#8438FF",
      "#520085",
      "#CB38FF",
      "#FF95C8",
      "#FF37C7",
    ];
    this.n = this.palette.length;
  }

  get = (i) => this.palette[Math.floor(i) % this.n];

  static hexToRgba = (hex, alpha) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `rgba(${[parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)].join(
          ", "
        )}, ${alpha})`
      : null;
  };
}
