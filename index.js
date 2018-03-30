var fs = require('fs');
var VectorTile = require('@mapbox/vector-tile').VectorTile;
var Protobuf = require('pbf');

if (process.argv.length === 3) {

  var data = fs.readFileSync(process.argv[2]);
  var tile = new VectorTile(new Protobuf(data));

  var layer_keys = Object.keys(tile.layers);

  if (layer_keys.length > 0) {
    console.log('Tile version', tile.layers[layer_keys[0]].version);
  } else {
    console.log('Tile without any layer')
  }

} else {
  console.log('You need to set a path to a pbf/mvt file');
}
