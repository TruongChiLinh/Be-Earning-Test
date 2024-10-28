module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545,  // "Use Ganache or a simulated network."
        network_id: "*" // Connect any network id
      },
    },
    compilers: {
      solc: {
        version: "0.8.0"
      }
    }
  };
  