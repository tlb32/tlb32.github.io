function FindProxyForURL(url, host) {
  // Setup a SOCKS proxy on port 1280.
  proxy = "SOCKS 127.0.0.1:8080"
  
if (shExpMatch(host, "*.arup.com") ||  // match IP address
       shExpMatch(host, "10.*")) {  // match `server1`, `server23`, 
     return proxy;
   }
   // Route everything else directly!
return "DIRECT";
}
