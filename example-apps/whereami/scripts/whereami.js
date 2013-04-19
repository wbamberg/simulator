var whereami = document.getElementById('where-am-i');
var reset = document.getElementById('reset');

whereami.onclick = function() {
  navigator.geolocation.getCurrentPosition(getMap, error);
};

reset.onclick = function() {
  resetMap();
};

function error(error) {
  console.log(error.code + " : " + error.message);
}

function resetMap() {
  if (window.map) {
    window.map.dispose();
  }
}

function getMap(position) {

  var options={
    elt:document.getElementById('map'),
    zoom:13,
    latLng:{lat:position.coords.latitude, lng:position.coords.longitude},
    mtype:'osm'
  };

  window.map = new MQA.TileMap(options);

  MQA.withModule('largezoom', function() {
    map.addControl(
      new MQA.LargeZoom(),
      new MQA.MapCornerPlacement(MQA.MapCorner.TOP_LEFT, new MQA.Size(5,5))
    );

  });

  var whereiam=new MQA.Poi( {lat:position.coords.latitude, lng:position.coords.longitude} );

  map.addShape(whereiam);
}

