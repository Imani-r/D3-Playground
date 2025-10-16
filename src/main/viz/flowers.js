import * as d3 from "d3";
// ...
// Your code here ...
// ...

let data;

async function loadData() {
  data = await d3.dsv(
    ",",
    "resources/data/natural-disasters-type-pivoted.csv",
    (d) => {
      return {
        code: d.Code,
        entity: d.Entity,
        year: new Date(d.Year).getFullYear(),
        disasterType: d["Natural Disaster"],
        numDeaths: +d["Number of Deaths"],
      };
    }
  );
}

function main() {
  console.log("flowers");
  loadData();
}

export default main;
