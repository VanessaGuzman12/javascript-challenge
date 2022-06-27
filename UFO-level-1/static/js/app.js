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
var dateInputText2 = d3.select("#city")
var dateInputText3 = d3.select("#state")
var dateInputText4 = d3.select("#country")
var dateInputText5 = d3.select("#shape")


function Select_data(){
    d3.event.preventDefault();
    var new_data = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    displayData(new_data);
    
}

dateInputText.on("change", Select_data)



function Select_city(){
    d3.event.preventDefault();
    var new_data2 = tableData.filter(sighting => sighting.city===dateInputText2.property("value"))
    displayData(new_data2);
}
dateInputText2.on("change", Select_city)

function Select_state(){
    d3.event.preventDefault();
    var new_data3 = tableData.filter(sighting => sighting.state===dateInputText3.property("value"))
    displayData(new_data5);
    
}

dateInputText5.on("change", Select_state)

function Select_country(){
    d3.event.preventDefault();
    var new_data4 = tableData.filter(sighting => sighting.country===dateInputText4.property("value"))
    displayData(new_data4);
    
}

dateInputText4.on("change", Select_country)

function Select_shape(){
    d3.event.preventDefault();
    var new_data5 = tableData.filter(sighting => sighting.shape===dateInputText5.property("value"))
    displayData(new_data5);
    
}

dateInputText5.on("change", Select_shape)


