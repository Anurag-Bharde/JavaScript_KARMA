if('geolocation' in navigatior){
    navigator.geolocation.getCurrentPosition(function(position){
        let lat=position.cooords.latitude;
        let long=position.coords.longitude;
        console.log("Latitude: "+lat+" , Longitude: "+long);
    });
}
    else{
console.log("SAYONARA")
    }
