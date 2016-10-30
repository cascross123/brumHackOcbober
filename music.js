//function list
var mag = "";
var properties = "";
var magArray = [];
var alert = "";
//window.setInterval(function(){
  /// call your function here

$.ajax({ 
    type: 'GET', 
    url: 'http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02', 
    data: { format: 'geojson' }, 
    dataType: 'json',
    
    success: function(data) {
    for (var i = 0; i < data.features.length; i++) {
        var magnitude = data.features[i].properties.mag
        magArray.push(magnitude);
        console.log(magnitude);
        if (magnitude <= 2) 
//            var audio = new Audio('below.mp3');
//        audio.volume = 0.1;
//        
//            audio.addEventListener('ended', function() {
//                this.currentTime = 0;
//                this.play();
//            }, false);
//            audio.play();
//            
//        
//        
//        if (magnitude > 2) var audio = new Audio('above.mp3');
//        audio.volume = 0.1;
//            audio.addEventListener('ended', function() {
//                this.currentTime = 0;
//                this.play();
//            }, false);
//            audio.play();
            
    }

    
    function pauseAudio(){
    
    }
}

            })
   // }, 5000);
        
    
