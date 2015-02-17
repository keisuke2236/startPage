<script type="text/goml">
<goml>
  <head>
    <geo type="Sphere" param="200 64 64" />
    <txr id="blueSky" src="../data/img/sky.png" />
    <mtl type="MeshPhong" param="map: #blueSky; side: 1;"/>

    <geo type="Circle" param="200 64" />
    <txr id="groundTxr" src="../data/img/ground.jpg" param="repeat: 50; wrap: 0;" />
    <mtl type="MeshLambert" param="map: #groundTxr;"/>

    <rdr />
  </head>
  <body>
    <scene>
      <mesh geo="[type='Sphere']" mtl="[type='MeshPhong']" />
      <mesh geo="[type='Circle']" mtl="[type='MeshLambert']" style="positionY: -.5; rotateX: -1.57;" />

      <light type="Amb" />
      <light type="Dir" style="light-color: #9f9f9f; position:-14 28 60;" />

      <camera style="position: 0 10 28; lookAtY: 10;"/>
      <mmd model="../data/model/miku.pmx" motion="../data/motion/model.vmd"/>

    </scene>
  </body>
</goml>
</script>
