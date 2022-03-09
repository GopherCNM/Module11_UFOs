// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create a function to build a dynamic table off of the data JS file
function buildTable(data) {
    // Clears the table to start fresh
    tbody.html("");

    // Loop through each object in the data array
    data.forEach((dataRow) => {
        // Append a row to the HTML table
        let row = tbody.append("tr");
        
        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
          }
        );
      });
}