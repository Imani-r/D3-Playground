import * as d3 from "d3";

let data;

async function loadData() {
  data = await d3.dsv(
    ",",
    "resources/data/Inc5000+Company+List_2014-top250.csv"
  );
}

function update(data) {
  d3.select("#content tbody")
    .selectAll("tr")
    .data(data)
    .join("tr")
    .html(function (d) {
      let html = "";
      html += "<td>" + d.company + "</td>";
      html += "<td>" + d.industry + "</td>";
      html += "<td>" + d.revenue + "</td>";
      html += "<td>" + d.workers + "</td>";
      return html;
    });
}

async function main() {
  await loadData(); // Wait for data to load first

  const mean = d3.mean(data, (d) => +d.workers); // Calculate mean after data loads

  // Display in the stats div
  d3.select("#stats").text(`Mean workers: ${mean}`);

  update(data); // Update DOM with the loaded data
  console.log("Average number of workers:", mean);
}

(async () => {
  await main();
})();

export default main;
