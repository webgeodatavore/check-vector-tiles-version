# Check version of a single Mapbox Vector Tile

## Retrieve code

```
git clone https://github.com/webgeodatavore/check-vector-tiles-version.git && cd check-vector-tiles-version
```

## Install deps

```
npm install
```

## Try the behavior

```
node . my_vector_tile_v1.pbf
```

```
node . my_vector_tile_v2.pbf
```

You just need to change path to your own tile file to check it version.

Get single remote tile using something like

```
wget -O my_tile.pbf 'http://mydomain.com/my_path/my_z/my_x/my_y.pbf'
```
