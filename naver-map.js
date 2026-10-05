// Browser-visible client ID only. Never put a client secret here.
const NAVER_MAP_CLIENT_ID = '';
if (NAVER_MAP_CLIENT_ID) {
  window.initMmurinMap = function () {
    const container = document.getElementById('naver-map');
    const position = new naver.maps.LatLng(37.3924916, 127.1104534);
    container.hidden = false;
    const map = new naver.maps.Map(container, { center: position, zoom: 17, zoomControl: true, scrollWheel: false });
    const marker = new naver.maps.Marker({ position, map, title: '뮤린 · 힐스테이트 판교역 B1006호' });
    const info = new naver.maps.InfoWindow({ content: '<div style="padding:14px 18px;font-size:14px;color:#443c34">뮤린<br>힐스테이트 판교역 B1층 B1006호</div>' });
    info.open(map, marker);
    naver.maps.Event.addListener(marker, 'click', function () { info.getMap() ? info.close() : info.open(map, marker); });
  };
  const script = document.createElement('script');
  script.src = 'https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=' + encodeURIComponent(NAVER_MAP_CLIENT_ID) + '&callback=initMmurinMap';
  document.head.appendChild(script);
}
