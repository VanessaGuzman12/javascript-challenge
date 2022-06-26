var tableData = data;

 
tbody = d3.select("tbody")


function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)



var button = d3.select("filter-btn")
var dateInputText = d3.select("#datetime")

function clickSelect(){
    d3.event.preventDefault();
    var new_data = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    displayData(new_data);
}

dateInputText.on("change", clickSelect)