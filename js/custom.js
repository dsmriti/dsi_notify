

function make()
{   var postData={};
    var x=$("[notify]");
    x.each(function(i,e){
        var dataKey = $(e).attr("notify")
        postData[dataKey]="";
        if($(e).attr("type")=="checkbox") {
            postData[dataKey]=$(e).is(':checked');
        }
        else if($(e).attr("type")=="text"){
             postData[dataKey]=$(e).val();
        }
//        console.log($(e).attr("type"));
    })
     console.log(postData);
 return postData;
}

function req(){
    var data=make();
    $.ajax({
      "url": "https://leztu4mhch.execute-api.us-east-1.amazonaws.com/prod/",
      "method": "POST",
      "headers": {
        "content-type": "application/json"
      }  
}).done(function(a,b,c){
      alert(JSON.stringify(c));
  })
.error(function(a,b){
        console.log(a,b);
    })
    
}