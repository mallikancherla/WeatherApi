$( document ).ready(function() {
    var latt;
    var long;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        latt=position.coords.latitude;
        long=position.coords.longitude;


var url='http://api.openweathermap.org/data/2.5/weather?lat='+latt+'&lon='+long+'&appid=b86d21440d8c9a110912a2eb0845abb4&preventCache='  + new Date();
$.getJSON(url,function(data){
var icon="";
var city=data.name;
var weathertype=data.weather[0].description;
var mn=data.weather[0].main;
var tempk=data.main.temp;
var tsy='&deg;K';
var tempc=tempk.toString()- 273.15;
var tempf = tempc.toString() * 1.8 + 32;
var cnt="";

cnt+="<div><h1 class='title'>Current Weather Service</h1><p class='loc'>Your Location:<b>"+city+"</b></p>";
cnt+="<p class='conditions'>The current weather conditions are:</p><strong class='wmain'>"+mn+",         </strong>";
cnt+="<strong class='des'>"+weathertype+"</strong>";
cnt+="<p class='tmp'>"+tempk+"<b class='sm'>&nbsp;"+tsy+"</b></p>";
cnt+="<div class='togglet'><div><p class='k'>Kelvin</p></div>";
cnt+="<div><p class='c' >Celsius</p></div>";
cnt+="<div><p class='f' >Farenheit</p></div></div>";
cnt+="<img src='https:\\openweathermap.org/img/w/"+data.weather[0].icon+".png' class='ic'></div>";

console.log("connected");

   $("#main").html(cnt);
   $('.k').on("click",function(){
     
    $('.tmp').html(temp+"&nbsp;&deg;K");
    
   });
   $('.c').on("click",function(){
    $('.tmp').html(tempc+"&nbsp;&deg;C");
  
      
  });
  $('.f').on("click",function(){
    $('.tmp').html(tempf+"&nbsp;&deg;F");
  
  });
});


});//geo pos
} //if
});//doc ready
