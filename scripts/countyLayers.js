//countyLayers.js

alert("COUNTY LAYERS LOADED");


function newJerseyLayers(){

require(["dojo/ready", "dijit/form/ToggleButton"], function(ready, ToggleButton){
    ready(function(){
        new ToggleButton({
            showLabel: true,
            checked: false,
            onChange: function(val){alert("TST");},
            label: "NJ RAIL"
        }, "programmatic");
    });
});




}