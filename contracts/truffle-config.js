module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545,  // "Use Ganache or a simulated network." // Sử dụng Ganache hoặc mạng giả lập 
        network_id: "*" // Connect any network id // cho phép kết nối bất kì network id nào
      },
    },
    compilers: {
      solc: {
        version: "0.8.0"
      }
    }
  };
  