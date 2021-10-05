function FindProxyForURL(url, host) {
  // Setup a SOCKS proxy on port 1280.
  proxy = "SOCKS5 102.168.1.2:8080; SOCKS 192.168.1.2:8080"
  
if (shExpMatch(host, "*.arup.com") ||  // match IP address
       shExpMatch(host, "10.*")) {  // match `server1`, `server23`, 
     return proxy;
   }
   // Route everything else directly!
return "DIRECT";
}
