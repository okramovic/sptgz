function openUpperMenu(){
  
      $("#upperMenu").css("display","flex");
      //alert("opened?");
      $("#upperMenuOpen").hide();
}
function skyNewCol(col, opa){
  
        $("#upperMenuOpen").show();
        $("#upperMenu").hide();
  
        //$("a-gradient-sky").hide
        // color="powderblue" opacity="0.1"
        $("a-sky").attr("opacity", opa);
        $("a-sky").attr("color", col);
        //$("a-scene").add('<a-gradient-sky material="shader: gradient; topColor: 255 255 255; bottomColor: 0 0 0;"></a-gradient-sky>');
        //$("a-gradient-sky").attr("material", "shader: gradient; topColor: 255 255 255; bottomColor: " + "0 0 0;");
}


function register(){

        var obj = {}
        $.post("sendmail", JSON.stringify({"nick": $("#regName").val(), "email": $("#regMail").val(), "pass": $("#regPass").val()}), 
               function(data, status){
          
                    console.log("status",status);
          
        })
}

function repoCamera(lat,lon,alt, cb){
  
      // it doesnt seem to work properly
  
                  var m= 1000000  
        
                  var x = (  (  (lat - _minLat) * m) / (0.000009 * m) ).toPrecision(8)
                  var z = (  (  (lon - _minLon) * m) / (0.000014 * m) ).toPrecision(8) 
                  
                  $("#cam").attr("position", x + " " + alt + " " + z);
                  console.log("cam @", $("#cam").attr("position") )
                  $("#cam").attr("rotation", "0 90 0");
        
                  if (cb) cb()
                  //obj[i].pos = obj[i].x + " " + obj[i].alt + " " + obj[i].z
  
}
/*function formatD(msg){
  
  
  
  
  if (window.innerWidth < 340){
  
    //alert("small");
    
    var fontsize = 10;
    
    $("label").css("fontSize", fontsize + "px");
    $(":number").css("fontSize", fontsize + "px");
  }
  else {
    //alert("big");
    
    var fontsize = 22;
    $("body").css("fontSize", fontsize + "px");
    
  }
  
  alert(msg);
  return
}*/
