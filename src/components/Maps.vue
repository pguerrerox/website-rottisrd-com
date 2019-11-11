<section class="mapa">
  <div class="mapa__info">
    <h2 class="sin--transform align--left no--margin--top">¿Donde estamos ubicados?</h2>
    <p>
      El mapa siguiente muestra la ubicacion de nuestras oficinas y tambien los comercios donde puedes encontrar nuestros productos.
    </p>
  </div>

  <div class="mapa__map">
    <div class="mapa_canvas">
      <div id="map_canvas1" class="tablinks__grid"><h2>1</h2>  </div>
      <div id="map_canvas2" class="tablinks__grid"><h2>2</h2>  </div>
      <div id="map_canvas3" class="tablinks__grid"><h2>3</h2>  </div>
      <div id="map_canvas4" class="tablinks__grid"><h2>4</h2>  </div>
    </div>

    <div class="mapa__side">
      <div class="side__tabs">
        <div class="body__tab">
          <ul class="body__tablinks">
            <li><a href="javascript:void(0)" class="tablinks__tab" onclick="mapa1(); mapasJemazar(event, 'map_canvas1', 'side__bar1')" id="tab__todos">Todos</a></li>

            <li><a href="javascript:void(0)" class="tablinks__tab" onclick="mapa2(); mapasJemazar(event, 'map_canvas2', 'side__bar2')" id="tab__supermercados">Supermercados</a></li>

            <li><a href="javascript:void(0)" class="tablinks__tab" onclick="mapa3(); mapasJemazar(event, 'map_canvas3', 'side__bar3')" id="tab__restaurantes">Restaurantes</a></li>

            <li><a href="javascript:void(0)" class="tablinks__tab" onclick="mapa4(); mapasJemazar(event, 'map_canvas4', 'side__bar4')" id="tab__hoteles">Hoteles</a></li>
          </ul>
        </div>
      </div>

      <div class="side__bars">
        <div class="side__bar" id="side__bar1"></div>
        <div class="side__bar" id="side__bar2"></div>
        <div class="side__bar" id="side__bar3"></div>
        <div class="side__bar" id="side__bar4"></div>
      </div>
    </div>
  </div>
</section>