$.ajax({ 
    type: 'GET', 
    url: 'http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02', 
    data: { format: 'geojson' }, 
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
            console.log(data.features[0].properties.mag);
            
            for (var i =0; i < data.features.length; i++){
                var mag = data.features[i];
                var properties = mag.properties;
                var magnitude = properties.mag;
                var felt = properties.felt;
                console.log("these were felt:..",felt);
                //console.log("this is the mag:..", mag); 
                //console.log("this is the properties", properties)
                //console.log("Okay this is actually the magnitude", magnitude);
            console.log();
            }
            //for [i] = 
            $('body').append($('<div>', {
                text: element.name
            }));
        });
    }
});