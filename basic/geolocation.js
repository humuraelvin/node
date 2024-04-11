function displayCurrentPosition() {
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log("You are On Latitude:" + position.coords.latitude);
        console.log("You are ON Longitude" + position.coords.longitude)
    })
}

displayCurrentPosition();