// from data.js
var tableData = data;

//build table

function buildtable(data){
const ttable = d3.select("tbody");
const trow=d3.selectAll("tr");
ttable.html("")

data.forEach((dataRow) => {
  // Append a row to the table body
  const row = ttable.append("tr");
  // Loop through each field in the dataRow and add
  // each value as a table cell (td)
  Object.values(dataRow).forEach((val) => {
   row.append("td").text(val);
    });
});
}

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  
  var filteredData = tableData.filter(record => record.datetime === inputValue);

  console.log(filteredData);

  buildtable(filteredData);

}

buildtable(tableData)

