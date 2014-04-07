sm.map.addListener(scribblemaps.MapEvent.MAP_LOADED, function (event) {
});

sm.map.addListener(scribblemaps.MapEvent.MAP_LOAD_ERROR, function (event) {
});

var details = {
    "id": "SMJSONTEST"
};

sm.map.load(details, function (data) {
}, function (errorEvent) { }, false);

/*////////////////////////
*//////////////////////

sm.map.addListener(scribblemaps.MapEvent.MAP_SAVED, function (event) {
});

sm.map.addListener(scribblemaps.MapEvent.MAP_SAVE_ERROR, function (event) {
});


//listed and secure are only available to basic license or higher
var details = {
    "id": "SMJSONTEST",
    "password": "SMJSONTEST",
    "title": "Map Title",
    "description": "Map Description",
    "secure": false,
    "listed": false,
    "projectId": "<your projectId>",
    "groupCode": "<groupCode>"
};

sm.map.save(details, function (completeEvent) { }, function (errorEvent) { });


sm.map.loadSMJSON({
    "view": { "center": { "lat": 0, "lng": 0 } },
    "styles": [
    {
        "id": "d",
        "color_1": {
            "color": "#FF0000",
            "opacity": 0.65
        },
        "thickness": 5,
        "lineType": 0,
        "cap": 0,
        "join": 0
    },
    {
        "id": "3",
        "imgSrc": "https://787274de68dbc5bf84f1-6f7397d65ef7b0edf83ad5f3c18393bb.ssl.cf1.rackcdn.com/paddles/1.png",
        "scale": 0.75,
        "anchor": {
            "x": 0.5,
            "y": 1
        }
    },
    {
        "id": "a",
        "color_1": {
            "color": "#FF0000",
            "opacity": 0.65
        },
        "color_2": {
            "color": "#00FF00",
            "opacity": 0.65
        },
        "thickness": 5,
        "lineType": 0,
        "cap": 0,
        "join": 0
    }
    ],
    "legend": [
        { "name": "Line", "styleId": "d" },
        { "name": "Marker", "styleId": "3" },
        { "name": "Polygon", "styleId": "a" },
    ]
});


sm.map.wipe();

console.log(JSON.stringify(sm.data.getSmJSON(), null, 2));
console.log(JSON.stringify(sm.data.getGeoJSON(), null, 2));

//Center Map
sm.view.setCenter([42.30729368312444, -82.96805852527628]);

//Label
sm.draw.label([42.30729368312444, -82.96805852527628], "test");

//Circle
sm.draw.circle([42.30729368312444, -82.96805852527628], "45km");

//Media Marker
var opts = {
    "title": "My Title",
    "description": "My Description",
    "youTube": "Pwe-pA6TaZk",
    "markerSize": { "x": 64, "y": 64 }
}

sm.draw.mediaMarker([42.30729368312444, -82.96805852527628], opts);


sm.draw.image([[43.32740534594629, -83.7234705078125], [41.666992644646015, -79.3509119140625]], { imgSrc: "http://i.imgur.com/CL69iAi.jpg" });

//second value is in pixels
sm.draw.point([42.30729368312444, -82.96805852527628], 5);

sm.ui.addListener(scribblemaps.UIEvent.VIEWLOADER_OPEN, function (evt) {
    console.log(evt);
});

sm.ui.addListener(scribblemaps.UIEvent.VIEWLOADER_CLOSE, function (evt) {
    console.log(evt);
});

//0.5 is the percent complete, null makes the bar 100%
sm.ui.showLoader("Your Loading Message", 0.5);

//sm.ui.hideLoader("Your Loading Message", null);

sm.ui.setAvailableTools(["edit", "drag", "scribble"]);

sm.ui.setMapTypes([
    {
        label: "Hybrid",
        id: "Hybrid"
    },
    {
        label: "Custom",
        id: "YourCustomLayerId"
    }
]);

/* This function can be used to both style and position controls. 
   A control must be present to be styled.
*/

sm.ui.styleControl(scribblemaps.ControlType.SEARCH, {
    "top": "75px",
    "left": "100px",
    "width": "500px",
});

/* List of Control Types */
scribblemaps.ControlType.SEARCH
scribblemaps.ControlType.ZOOM
scribblemaps.ControlType.TOOLBOX
scribblemaps.ControlType.LINE_SETTINGS
scribblemaps.ControlType.LINE_COLOR
scribblemaps.ControlType.FILL_COLOR
scribblemaps.ControlType.MAP_TYPE
scribblemaps.ControlType.LEGEND
scribblemaps.ControlType.OVERLAY_LIST

//sm.ui.removeTool("dashedBlueLine");
sm.ui.createTool({
    baseTool: "line",
    id: "dashedBlueLine",
    select: function () {
        this.draw.setStyle({
            lineColor: "#0000FF",
            lineCap: scribblemaps.CapType.SQUARE,
            lineType: scribblemaps.LineType.DASHED,
            lineSegments: [5, 3, 1, 2, 1, 3]
        });
    },
    deselect: function (event) { },
    mousedown: function (event) { },
    mouseup: function (event) { },
    mousemove: function (event) { }
});
//sm.ui.setAvailableTools(["dashedBlueLine"]);
sm.ui.setTool("dashedBlueLine");

sm.ui.createLegend([
    {
        "name": "Line",
        "style": {
            "lineColor": "#FF0000",
            "lineOpacity": 1
        }
    },
    {
        "name": "Polygon",
        "style": {
            "lineColor": "#FF0000",
            "lineOpacity": 1,
            "fillColor": "#0000FF",
            "fillOpacity": 1
        }
    },
    {
        "name": "Marker",
        "style": {
            "imgSrc": "https://787274de68dbc5bf84f1-6f7397d65ef7b0e" +
                      "df83ad5f3c18393bb.ssl.cf1.rackcdn.com/paddles/1.png"
        }
    }
]);

//sm.ui.removeLegend();

var div = document.createElement("div");
div.style.width = "250px";
div.style.height = "250px"
div.innerHTML = "My custom Panel Content";

sm.ui.showCustomPanel(div);

sm.ui.setTheme("light");

sm.ui.setTheme("dark");

var apiKey = "915de30ed4b14b14bd60410d492374b0";
sm.layers.createTileLayer("cloudMade1",
    ["http://a.tile.cloudmade.com/" + apiKey + "/997/256/{z}/{x}/{y}.png",
     "http://b.tile.cloudmade.com/" + apiKey + "/997/256/{z}/{x}/{y}.png"],
    18);

sm.layers.createTileLayer("cloudMade2",
    ["http://a.tile.cloudmade.com/" + apiKey + "/999/256/{z}/{x}/{y}.png",
     "http://b.tile.cloudmade.com/" + apiKey + "/999/256/{z}/{x}/{y}.png"],
    18);

/* once layers are created you can then set the map type control 
and base map type */
sm.ui.setMapTypes([
    {
        label: "CM 1",
        id: "cloudMade1"
    },
    {
        label: "CM 2",
        id: "cloudMade2"
    }
]);

sm.layers.setBase("cloudMade1");

sm.layers.createTileLayer("cloudMade",
   ["http://a.tile.cloudmade.com/915de30ed4b14b14bd60410d492374b0/997/256/{z}/{x}/{y}.png",
    "http://b.tile.cloudmade.com/915de30ed4b14b14bd60410d492374b0/997/256/{z}/{x}/{y}.png"],
    18, "Cloud Made Label");

sm.layers.setBase("cloudMade");

sm.layers.createTileLayer("cloudMade",
    ["http://a.tile.cloudmade.com/915de30ed4b14b14bd60410d492374b0/999/256/{z}/{x}/{y}.png",
     "http://b.tile.cloudmade.com/915de30ed4b14b14bd60410d492374b0/999/256/{z}/{x}/{y}.png"],
    18, "Cloud Made Label");

sm.layers.add("cloudMade", 0);


//Removes all map layers with ID
sm.layers.remove("cloudMade");

//Removes layers at an idex
sm.layers.removeAt(0);

var markers = [];

var dx;
var dy;
var s = 2;

for (var i = 0; i < 5; i++) {

    dx = -s + Math.random() * s * 2;
    dy = -s + Math.random() * s * 2;

    markers.push(sm.draw.marker([42.30729368312444 + dx, -82.96805852527628 + dy], "test"));

}

var r = 0;
function spinMarker() {
    r = (r + 5) % 360;

    for (var i = 0; i < markers.length; i++) {
        markers[i].setStyle({ "rotation": r });

    }

    setTimeout(function () {
        spinMarker();
    }, 50);

}

spinMarker();

/* This function lets you define the style properties for each cluster size.
   If you set this you will also need to setup the appropriate associated CSS 
   styles. For instance if you were to define two group [30, 50], you would 
   need to add the following two CSS styles:

   .sm_markerCluster.sm_size30 { background-color: #008000; }
   .sm_markerCluster.sm_size50 { background-color: #FF9900; }
*/
sm.clustering.setSizes([10, 25]);

/* This function lets you set how close markers are before they are clustered. 
The value is in pixels. Default is 10 */
sm.clustering.setRangePixels(10);

/* Disables marker clustering */
sm.clustering.disable();

/*Enables marker clustering */
sm.clustering.enable();

/* you can override how you want markers to display in a cluster,
for instance in another part of your application, setting this
will stop the info bubble list from coming up on marker cluster click */
sm.clustering.clusterViewOverride(function (markers) {
    console.log(markers);
});

/* The default is 45. Keep in mind that higher frame rates will affect
performance substantially on mobile devices */
sm.settings.setFrameRate(45);

/* by default all incoming functions go throuh a try/catch, this function
disables it. */
sm.settings.disableDevCatch();

/* This function returns the base map object of the underlying API.
    For instance this would return a Google or Leaflet map object. Keep in
    mind this should only be utilized for visualization. Overlays
    added to a base will not be interactive and will not come up
    in SMJSON */
sm.getBaseAPIMap();

function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

var lat;
var lng;
var s = 90;

sm.draw.setStyle({
    lineOpacity: 1,
    lineColor: "#000000",
    thickness: 2,
    fillColor: "#00FF00",
    fillOpacity: 1
});
for (var i = 0; i < 500; i++) {

    lng = -180 + Math.random() * 360;
    lat = -90 + Math.random() * 180;

    sm.draw.setStyle({ fillColor: get_random_color() });
    sm.draw.point([lat, lng], 5);

}

sm.view.setCenter([0, 0]);
sm.view.setZoom(2);

// COLLISSION

sm.settings.clearListeners();
sm.map.wipe();

//Modify ui
sm.ui.setAvailableTools(["edit", "drag"]);
sm.ui.setTool("edit");
sm.ui.styleControl(scribblemaps.ControlType.SEARCH, { "display": "none" });
sm.ui.styleControl(scribblemaps.ControlType.LINE_COLOR, { "display": "none" });
sm.ui.styleControl(scribblemaps.ControlType.FILL_COLOR, { "display": "none" });
sm.ui.styleControl(scribblemaps.ControlType.LINE_SETTINGS, { "display": "none" });
sm.view.setCenter([43.00, -82.36116582031251]);

// Create Points for collision
var points = [];
var dx, dy, s = 3, p;
for (var i = 0; i < 150; i++) {

    dx = -s + Math.random() * s * 2;
    dy = -s + Math.random() * s * 2;

    p = sm.draw.point([42.30729368312444 + dx, -82.96805852527628 + dy], 5,
                        {
                            "lineColor": "#000000",
                            "weight": 3,
                            "fillColor": "#00FF00"
                        }).disableEdit();

    points.push(p);
}

//create instruction label
sm.draw.label([44.00, -82.36116582031251],
"Edit the polygon to see collisions", null, true).disableEdit();

/* Check collision on overlay add. When overlays are being edited they
are removed from the primary stack and then it is added again when editing
is finished */
sm.map.addListener(scribblemaps.MapEvent.OVERLAY_ADDED, function (event) {
    var overlay = event.data;
    for (var i = 0; i < points.length; i++) {
        if (overlay.collidesWith(points[i])) {
            points[i].setStyle({
                "lineColor": "#FF0000",
                "fillColor": "#FF0000"
            });
        } else {
            points[i].setStyle({
                "lineColor": "#000000",
                "fillColor": "#00FF00"
            });
        }
    }
});

//Draw polygon
sm.draw.poly([
            [43.805028791852244, -82.36116582031251],
            [42.04340820023151, -85.14070683593751],
            [41.36261706008662, -80.95491582031251]
], {
    "fillOpacity": 0.1,
    "fillColor": "#FFFFFF",
    "lineColor": "#000000"
});

//MANHATTAN

var youTubeURL = "Pwe-pA6TaZk";
var mattPlaces = [
{ start: "3", end: "6", loc: [-1.950106, 30.058768999999984], name: "Kigali, Rwanda" },
{ start: "7", end: "9", loc: [37.3880961, -5.982329899999968], name: " Seville, Spain" },
{ start: "11", end: "13", loc: [48.2081743, 16.37381890000006], name: "Vienna, Austria" },
{ start: "14", end: "17", loc: [40.6306464, -76.17105400000003], name: "Schuykill Haven" },
{ start: "18", end: "23", loc: [33.5111, 36.30639999999994], name: "Damascus, Syria" },
{ start: "24", end: "28", loc: [-5.0925657, 140.71109209999997], name: "Poria, Papua New Guinea" },
{ start: "29", end: "34", loc: [39.031859, 125.75376499999993], name: "Pyongyang, North Korea" },
{ start: "35", end: "38", loc: [33.8886289, 35.49547940000002], name: "Beirut, Lebanon" },
{ start: "39", end: "42", loc: [37.9837155, 23.72930969999993], name: "Athens, Greece" },
{ start: "43", end: "46", loc: [-79.624382, 43.447946], name: "Lesedi, South Africa" },
{ start: "47", end: "50", loc: [8.6984213, 98.44035729999996], name: "Kapong, Thailand" },
{ start: "51", end: "53", loc: [10.491016, -66.902061], name: "Caracas, Venezuela" },
{ start: "54", end: "57", loc: [-8.4095178, 115.18891600000006], name: "Bali, Indonesia" },
{ start: "58", end: "1m1s", loc: [29.5074538, -95.09493029999999], name: "League City, Texas" },
{ start: "1m2s", end: "1m4s", loc: [-18.2861302, 147.70000759999994], name: "Great Barrier Reef, Australia" },
{ start: "1m6s", end: "1m9s", loc: [24.48147, 46.25576000000001], name: "Al-Muzahmiyya, Saudi Arabia" },
{ start: "1m10s", end: "1m12s", loc: [37.8043637, -122.2711137], name: "Oakland, California" },
{ start: "1m13s", end: "1m16s", loc: [42.331427, -83.0457538], name: "Detroit, Michigan" },
{ start: "1m17s", end: "1m20s", loc: [47.9825097, 107.44967939999992], name: "Terelj, Mongolia" },
{ start: "1m21s", end: "1m24s", loc: [3.6152964, 72.71821350000005], name: "Rangali Island, Maldives" },
{ start: "1m25s", end: "1m28s", loc: [-17.8964463, 31.242605700000013], name: "Ruwa, Zimbabwe" },
{ start: "1m29s", end: "1m32s", loc: [47.497912, 19.04023499999994], name: "Budapest, Hungary" },
{ start: "1m33s", end: "1m36s", loc: [18.539269, -72.336408], name: "Port-au-Prince, Haiti" },
{ start: "1m37s", end: "1m39s", loc: [36.1911111, 44.00916670000004], name: "Erbil, Iraq" },
{ start: "1m40s", end: "1m43s", loc: [20.7983626, -156.33192529999997], name: "Maui, Hawaii" },
{ start: "1m44s", end: "1m47s", loc: [29.95106579999999, -90.0715323], name: "New Orleans, Louisana" },
{ start: "1m48s", end: "1m51s", loc: [14.6760413, 121.04370029999995], name: "Quezon City, Philippines" },
{ start: "1m52s", end: "1m55s", loc: [40.6306464, -76.17105400000003], name: "Schuykill Haven, Pennsylvania" },
{ start: "2m", end: "2m2s", loc: [34.528455, 69.17170290000001], name: "Kabul, Afghanistan" },
{ start: "2m3s", end: "2m7s", loc: [43.124228, 5.927999999999997], name: "Toulon, France" },
{ start: "2m7s", end: "2m10s", loc: [48.2081743, 16.37381890000006], name: "Vienna, Austria" },
{ start: "2m11s", end: "2m14s", loc: [39.90403, 116.40752599999996], name: "Beijing, China" },
{ start: "2m15s", end: "2m18s", loc: [31.768319, 35.21370999999999], name: "Jerusalem, Israel" },
{ start: "2m19s", end: "2m25s", loc: [39.031859, 125.75376499999993], name: "Pyongyang, North Korea" },
{ start: "2m26s", end: "2m29s", loc: [-18.0555556, 13.840555600000016], name: "Opuwo, Namibia" },
{ start: "2m30s", end: "2m33s", loc: [18.4663338, -66.1057217], name: "San Juan, Puerto Rico" },
{ start: "2m34s", end: "2m38s", loc: [44.8205556, 20.462222200000042], name: "Belgrade, Syria" },
{ start: "2m39s", end: "2m41s", loc: [43.6187102, -116.21460680000001], name: "Boise, Idaho" },
{ start: "2m42s", end: "2m45s", loc: [55.953252, -3.188266999999996], name: "Edinburgh, Scotland" },
{ start: "2m46s", end: "2m48s", loc: [39.952335, -75.16378900000001], name: "Philadelphia, Pennsylvania" },
{ start: "2m49s", end: "2m52s", loc: [-33.8076073, 18.3712309], name: "Robben Island, South Africa" },
{ start: "2m53s", end: "2m56s", loc: [43.653226, -79.38318429999998], name: "Toronto, Canada" },
{ start: "2m57s", end: "3m0s", loc: [51.0504088, 13.737262099999953], name: "Dresden, Germany" },
{ start: "3m1s", end: "3m4s", loc: [45.764043, 4.835658999999964], name: "Lyon, France" },
{ start: "3m5s", end: "3m8s", loc: [-8.783195, -124.50852299999997], name: "USS Abraham Licoln, Pacific Ocean" },
{ start: "3m9s", end: "3m10s", loc: [29.7601927, -95.36938959999998], name: "Houston, Texas" },
{ start: "3m11s", end: "3m12s", loc: [48.1458923, 17.107137299999977], name: "Bratislava, Slovakia" },
{ start: "3m13s", end: "3m14s", loc: [-37.814107, 144.96327999999994], name: "Melbourne, Australia" },
{ start: "3m15s", end: "3m16s", loc: [30.0444196, 31.23571160000006], name: "Cairo, Egypt" },
{ start: "3m17s", end: "3m18s", loc: [22.396428, 114.10949700000003], name: "Hong Kong, China" },
{ start: "3m18s", end: "3m20s", loc: [59.43696079999999, 24.75357459999998], name: "Tallin, Estonia" },
{ start: "3m21s", end: "3m23s", loc: [60.17332440000001, 24.941024800000037], name: "Helsink, Finland" },
{ start: "3m24s", end: "3m25s", loc: [35.0116363, 135.76802939999993], name: "Kyoto, Japan" },
{ start: "3m26s", end: "3m27s", loc: [41.4994954, -81.6954088], name: "Cleveland, Ohio" },
{ start: "3m28s", end: "3m30s", loc: [-9.64571, 160.15619400000003], name: "Kalafasia, Solomon Islands" },
{ start: "3m31s", end: "3m32s", loc: [6.235925, -75.57513699999998], name: "Medellin, Colombia" },
{ start: "3m32s", end: "3m33s", loc: [-6.314992999999999, 143.9555500000000], name: "Poria, Papua New Guinea" },
{ start: "3m34s", end: "3m35s", loc: [41.3850639, 2.1734034999999494], name: "Barcelona, Spain" },
{ start: "3m36s", end: "3m35s", loc: [53.479324, -2.248485100000039], name: "Manchester, England" },
{ start: "3m37s", end: "3m38s", loc: [24.893379, 67.02806090000001], name: "Karachi, Pakistan" },
{ start: "3m39s", end: "3m42s", loc: [50.0755381, 14.43780049999998], name: "Prague, Czech Republic" },
{ start: "3m43s", end: "3m44s", loc: [37.9837155, 23.72930969999993], name: "Athens, Greece" },
{ start: "3m44s", end: "3m45s", loc: [30.0444196, 31.23571160000006], name: "Cairo, Egypt" },
{ start: "3m45s", end: "3m46s", loc: [47.3686498, 8.539182500000038], name: "Zurich, Switzerland" },
{ start: "3m46s", end: "3m47s", loc: [51.0504088, 13.737262099999953], name: "Dresden, Germany" },
{ start: "3m47s", end: "3m48s", loc: [41.8929163, 12.482519899999943], name: "Rome, Italy" },
{ start: "3m49s", end: "3m50s", loc: [9.927128, -84.08201199999996], name: "San Jose, Costa Rica" },
{ start: "3m51s", end: "3m54s", loc: [47.497912, 19.04023499999994], name: "Budapest, Hungary" },
{ start: "3m55s", end: "3m56s", loc: [45.4654542, 9.186515999999983], name: "Milan, Italy" },
{ start: "3m57s", end: "3m58s", loc: [31.2802667, 34.24019139999996], name: "Rafah, Gazah Strip" },
{ start: "3m59s", end: "4m", loc: [24.9888889, 121.31111110000006], name: "Taoyuan City, Taiwan" },
{ start: "4m1s", end: "4m2s", loc: [10.6666667, -61.51666669999997], name: "Port of Spain, Trinidad" },
{ start: "4m3s", end: "4m5s", loc: [42.3736158, -71.1097335], name: "Cambridge, Massachusetts" },
{ start: "4m6s", end: "4m7s", loc: [55.755826, 37.6173], name: "Moscow, Russia" },
{ start: "4m8s", end: "4m9s", loc: [32.7153292, -117.1572550999999], name: "San Diego, California" },
{ start: "4m10s", end: "4m11s", loc: [41.8929163, 12.482519899999943], name: "Rome, Italy" },
{ start: "4m12s", end: "4m13s", loc: [39.2903848, -76.61218930000001], name: "Baltimore, Maryland" },
{ start: "4m14s", end: "4m15s", loc: [9.927128, -84.08201199999996], name: "San Jose, Costa Rica" },
{ start: "4m16s", end: "4m17s", loc: [39.737567, -104.98471790000002], name: "Denver, Colorado" },
{ start: "4m18s", end: "4m19s", loc: [59.9342802, 30.335098600000038], name: "St. Petersburg, Russia" },
{ start: "4m20s", end: "4m21s", loc: [37.8043637, -122.2711137], name: "Oakland, California" },
{ start: "4m22s", end: "4m25s", loc: [-1.950106, 30.058768999999984], name: "Kigalia, Rwanda" },
{ start: "4m26s", end: "4m36", loc: [47.6062095, -122.3320708], name: "Seattle, Washington" }];

var details = {
    "youTube": "Pwe-pA6TaZk",
    "markerSize": { "x": 30, "y": 25 }
}
var yturl;
for (var i = 0; i < mattPlaces.length; i++) {
    yturl = youTubeURL + "?start=" + mattPlaces[i].start;
    yturl += "&end=" + mattPlaces[i].end;
    details.youTube = yturl;
    sm.draw.mediaMarker(mattPlaces[i].loc, details);
}

sm.view.setCenter([43, 0]);
sm.view.setZoom(2);


//LAYOUT

sm.ui.setTheme("light");

sm.ui.styleControl(scribblemaps.ControlType.TOOLBOX, { width: "65px" });
sm.ui.styleControl(scribblemaps.ControlType.SEARCH, { width: "120px", left: "75px", top: "10px" });
sm.ui.styleControl(scribblemaps.ControlType.LINE_COLOR, { left: "10px", top: "167px" });
sm.ui.styleControl(scribblemaps.ControlType.FILL_COLOR, { left: "10px", top: "199px" });
sm.ui.styleControl(scribblemaps.ControlType.LINE_SETTINGS, { left: "75px", top: "42px" });

sm.ui.setAvailableTools(["edit", "drag", "eraser",
                         "fill", "scribble", "line",
                         "polygon", "circle",
                         "flightLine", "rectangle"]);

sm.ui.setTool("drag");


//CENTERING
sm.draw.marker([42.31412290040226, -83.03677135581971]);
sm.view.setCenter([42.31412290040226, -83.03677135581971]);