var whereami = document.getElementById('where-am-i');
var whereiam = document.getElementById('where-i-am');

whereami.onclick = function() {
  navigator.geolocation.getCurrentPosition(success, error);
};

function success(position) {
  whereiam.innerHTML = position.coords.latitude + ", " + position.coords.longitude;
}

function error(error) {
  console.log(error.code + " : " + error.message);
}

