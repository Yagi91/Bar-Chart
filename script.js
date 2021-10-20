let url =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
let data;
const req = new XMLHttpRequest();
let values;

let height = 700;
let width = 1000;
let padding = 40;
let svg = d3.select("svg");

let datesArr;
let xScale;
let yScale;
let xAxisScale;
let yAxisScale;
let xAxis;
let yAxis;

let drawCanvas = () => {
  svg
    .attr("width", width)
    .attr("height", height)
    .select("text")
    .attr("x", width / 2)
    .attr("y", height - 670);
};

let generateScales = () => {
  yScale = d3
    .scaleLinear()
    .domain([0, d3.max(values, (d) => d[1])])
    .range([height - padding, padding]);
  xScale = d3
    .scaleLinear()
    .domain([0, values.length - 1])
    .range([padding, width - padding]);
  datesArr = values.map((val) => {
    return new Date(val[0]);
  });
  xAxisScale = d3
    .scaleTime()
    .domain([d3.min(datesArr), d3.max(datesArr)])
    .range([padding, width - padding]);
  yAxisScale = d3
    .scaleLinear()
    .domain([0, d3.max(values, (d) => d[1])])
    .range([height - padding, padding]);
};
let generateAxes = () => {
  xAxis = d3.axisBottom(xAxisScale);
  yAxis = d3.axisLeft(yAxisScale);
  svg
    .append("g")
    .attr("id", "x-axis")
    .attr("transform", `translate(0, ${height - padding})`)
    .call(xAxis);
  svg
    .append("g")
    .attr("id", "y-axis")
    .attr("transform", `translate(${padding}, 0)`)
    .call(yAxis);
};
let drawBars = () => {};

req.open("GET", url, true);
req.send();
req.onload = () => {
  data = JSON.parse(req.response);
  values = data.data;
  drawCanvas();
  generateScales();
  generateAxes();
  drawBars();
  console.log(values);
};
