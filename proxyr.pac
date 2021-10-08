function FindProxyForURL(url, host) {
  // Setup a SOCKS proxy on port 1280.
  proxya = "SOCKS 127.0.0.1:8080"
  
  proxyh = "SOCKS 127.0.0.1:8081"
  
if (shExpMatch(host, "*.arup.com") ||  // match IP address
       shExpMatch(host, "10.*") ||
       shExpMatch(host, "*whoami*)) {  // match `server1`, `server23`, 
     return proxya;
   }
   // Route everything else through other one!
return proxyh;
}
