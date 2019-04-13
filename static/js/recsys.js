function BuildRecInfo(rec_url,num){
        var rec_info = d3.select("#rec_info").html("");
        
        d3.json(rec_url).then(function(info) {
             
            for (var i=1;i<info.length;i++){
                rec_info.append("div").attr("id","infotext")
                    .append("h5").text("[Business ID] " + `${info[0]['business_id']}`)
                     .append("h5").text("Rating " + `${info[0]['Rating']}`)
                        .append("h5").text("Category Keywords: " +`${info[0]["tokenized_category"]}`)
                        .append("p").text(`Recommend  ${i} [Business ID]:`+ `${info[i]['business_id']}`)
                            .append("p").text("Rating " + `${info[i]['Rating']}`)
                          .append("p").text("Category Keywords: " +`${info[i]["tokenized_category"]}`)
                           .append("p").text("Similarity Score: " +`${info[i]["Similarity_score"]}`)
    
            }
           });
    
    }

// Searching Form
var search_btn = d3.select("#search-btn");



search_btn.on("click", function(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement_idx = d3.select("#filter_value_idx");
    var inputElement_num = d3.select("#filter_value_num");
        
    // Get the value property of the input element
        var idx = inputElement_idx.property("value");
        var num = inputElement_num.property("value");

    // remove the space
    idx = idx.replace(/\s+/g, '');
    num = num.replace(/\s+/g, '');
    console.log(idx,num)
    d3.select("#infotext").remove();

    BuildRecInfo(`/recsys/${idx}/${num}`,num)
    reset_form();
   })

   // reset function
function reset_form(){
    d3.select("#infotext").remove();
    d3.select("#filter_value_idx").property("value"," ");
    d3.select("#filter_value_num").property("value"," ");
    }
  
  
  