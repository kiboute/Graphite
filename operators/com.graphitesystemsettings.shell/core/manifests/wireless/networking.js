// get wifi settings showing through GUI!
const wifi = require('node-wifi');

// Initialize wifi module
// Absolutely necessary even to set interface to null
wifi.init({
  iface: null // network interface, choose a random wifi interface if set to null
});

// Scan networks
document.getElementById("graphical_system_settings_wirelessSettingsViaNode");
wifi.scan((error, networks) => {
  if (error) {
    console.log(error);
  } else {
    console.log(networks);
    /*
        networks = [
            {
              ssid: '...',
              bssid: '...',
              mac: '...', // equals to bssid (for retrocompatibility)
              channel: <number>,
              frequency: <number>, // in MHz
              signal_level: <number>, // in dB
              quality: <number>, // same as signal level but in %
              security: 'WPA WPA2' // format depending on locale for open networks in Windows
              security_flags: '...' // encryption protocols (format currently depending of the OS)
              mode: '...' // network mode like Infra (format currently depending of the OS)
            },
            ...
        ];
        */
  }
});

// Connect to a network
wifi.connect({ ssid: 'ssid', password: 'password' }, () => {
  console.log('Connected'); 
  // on windows, the callback is called even if the connection failed due to netsh limitations
  // if your software may work on windows, you should use `wifi.getCurrentConnections` to check if the connection succeeded
});

// Disconnect from a network
// not available on all os for now
wifi.disconnect(error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Disconnected');
  }
});

// Delete a saved network
// not available on all os for now
wifi.deleteConnection({ ssid: 'ssid' }, error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Deleted');
  }
});

// List the current wifi connections
wifi.getCurrentConnections((error, currentConnections) => {
  if (error) {
    console.log(error);
  } else {
    console.log(currentConnections);
    /*
    // you may have several connections
    [
        {
            iface: '...', // network interface used for the connection, not available on macOS
            ssid: '...',
            bssid: '...',
            mac: '...', // equals to bssid (for retrocompatibility)
            channel: <number>,
            frequency: <number>, // in MHz
            signal_level: <number>, // in dB
            quality: <number>, // same as signal level but in %
            security: '...' //
            security_flags: '...' // encryption protocols (format currently depending of the OS)
            mode: '...' // network mode like Infra (format currently depending of the OS)
        }
    ]
    */
  }
});

// All functions also return promise if there is no callback given
wifi
  .scan()
  .then(networks => {
    // networks
  })
  .catch(error => {
    // error
  });