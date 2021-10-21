let url =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
let data;
const req = new XMLHttpRequest();
let values;

let height = 700;
let width = 1000;
let padding = 40;
let svg = d3.select("svg");
let tooltip;

let datesArr;
let xScale;
let yScale;
let xAxisScale;
let yAxisScale;
let xAxis;
let yAxis;
let h = 2 * padding;

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
    .range([0, height - 2 * padding]);
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

let quartile = (dateStr) => {
  let date = new Date(dateStr);
  let quarter;
  switch (date.getMonth()) {
    case 0:
      quarter = "Q1";
      break;
    case 3:
      quarter = "Q2";
      break;
    case 6:
      quarter = "Q3";
      break;

    default:
      quarter = "Q4";
      break;
  }
  return quarter;
};

let drawBars = () => {
  tooltip = d3
    .select("body")
    .append("div")
    .attr("id", "tooltip")
    .style("width", "auto")
    .style("height", "auto")
    .style("visibility", "hidden")
    .style("opacity", "0.2");

  svg
    .selectAll("rect")
    .data(values)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("width", (width - 2 * padding) / values.length)
    .attr("data-date", (d) => d[0])
    .attr("data-gdp", (d) => d[1])
    .attr("height", (d) => yScale(d[1]))
    .attr("y", (d) => height - yScale(d[1]) - padding)
    .attr("x", (d, index) => xScale(index))
    .on("mouseover", (event, d) => {
      tooltip.transition().style("visibility", "visible").style("opacity", "1");
      tooltip
        .html(
          d[0] +
            " " +
            quartile(d[0]) +
            "<br>" +
            "$" +
            d[1].toLocaleString("en-US") +
            " Billion"
        )
        .style("transform", `translateX(${xScale(values.indexOf(d)) - 420}px)`);
      tooltip.attr("data-date", d[0]);
    })
    .on("mouseout", () => {
      tooltip.transition().style("visibility", "hidden");
    });
};

req.open("GET", url, true);
req.send();
req.onload = () => {
  data = JSON.parse(req.response);
  values = data.data;
  drawCanvas();
  generateScales();
  generateAxes();
  drawBars();
};
