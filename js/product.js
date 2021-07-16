
fetch("cakes.json")
.then(function(resp){
  return resp.json();
}).then(function(data){
  console.log(data);
})


function appendData(data){
    var container=document.getElementById("image-block");
    var images= document.getElementById("img-style");
    var productName=document.getElementById("pro-name");
    var productDesc=document.getElementById("productDesc");
    for(var i=0;i<data.length;i++){
        var div = document.getElementById("pro-name");
        div.innerHTML=  data[i].title ;
      container.appendChild(div);
    }
};
