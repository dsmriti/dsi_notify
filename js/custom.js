

function make()
{   var postData={};
    var x=$("[notify]");
    x.each(function(i,e){
        var dataKey = $(e).attr("notify")
        postData[dataKey]="";
        if($(e).attr("type")=="checkbox") {
            postData[dataKey]=$(e).is(':checked');
            if($(e).attr("notify")=="sound"){
              postData[dataKey]="default";  
            }
            
        }
        else if($(e).attr("type")=="text"){
             postData[dataKey]=$(e).val();
        }
//        console.log($(e).attr("type"));
    })
     console.log(postData);
     console.log(JSON.stringify(postData));
 return postData;
}

function req(){
    var data=make();
    $.ajax({
      "url": "https://leztu4mhch.execute-api.us-east-1.amazonaws.com/prod/",
      "method": "POST",
       "data": JSON.stringify(data),
        "headers": {
        "content-type": "application/json"
      }  
}).done(function(a,b,c){
//      alert(JSON.stringify(c));
        //var temp=JSON.parse(c.responseJSON);
        console.log(c);
  })
.error(function(a,b){
        console.log(a,b);
    })
    
}
