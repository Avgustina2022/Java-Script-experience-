function(geolocation)
console.log('широта: ',
geolocation.coords.latitude)
console.log('долгота: ',
geolocation.coords.longitude)
document.getElementById('container').innerHTML = `широта:${
    geolocation.coords.latitude
}<br>
долгота:${geolocation.coords.longitude}`
const reqAddress=await fetch
(`https://geocode-maps.yandex.ru/1.x/?apikey=376316bc-2f97-4647-857d-14f585c437ea&geocode=${geolocation.coords.langitude},${geolocation.coords.latitude}`),
{
    headers:{
        'Content-Type': 'application/json',
    },
    method: 'GET',
};
const resultAddress = await reqAddress.text();
console.log(resultAddress)

mapboxgl.accessToken='pk.376316bc-2f97-4647-857d-14f585c437ea'
var mapNew = new mapboxgl.Map({
    container:'mapNew',
    //style:'mapbox://styles/mapbox/streets-v9',
    zoom 15.3,
    center:[55.6953478,37.5757692],
    pitch:0,
    bearing:0
})
var marker=new mapboxgl.Marker()
.setLngLat([55.6953478,37.5757692])
addTo (mapNew);
var marker=new mapboxgl.Marker()
setLanLat ([55.6953478,37.5757692])
addTo (mapNew);
