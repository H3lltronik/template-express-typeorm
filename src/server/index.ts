#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from "./app";
import debug from "debug";
import http from "http";
debug("movieapi:server");

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: any) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

export default () => {
  var port = normalizePort(process.env.PORT || "3000");
  
  app.set("port", port);
  var server = http.createServer(app);

  server.on("error", (error: any) => {
    if (error.syscall !== "listen") {
        throw error;
      }
    
      var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    
      switch (error.code) {
        case "EACCES":
          console.error(bind + " requires elevated privileges");
          process.exit(1);
          break;
        case "EADDRINUSE":
          console.error(bind + " is already in use");
          process.exit(1);
          break;
        default:
          throw error;
      }
  });

  server.on("listening", () => {
    var addr = server.address();
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    debug("Listening on " + bind);
    console.log("listening")
  });

  server.listen(port);
};
