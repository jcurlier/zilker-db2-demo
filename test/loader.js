    try {
      mod = require('./../connectors/db2');
      console.log("SUCCESS");
    } catch (e) {
      console.log("ERROR");
      console.log(e);
    }