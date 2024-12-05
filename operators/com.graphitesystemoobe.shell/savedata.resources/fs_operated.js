function hasEnteredOutOfBoxWebview() {
  $( "#graphical_preload_oobe_1" ).load( "com.graphitesystemoobe.shell/index.html", function() {
    alert( "Load was performed." );
  });

}