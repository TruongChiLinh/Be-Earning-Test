- Blockchain Project
- Mô tả
noted :sử dụng Ngork để kết nối webhook với Jenkins để public network ket nối giữa Jenkins với github
Dự án này triển khai một mạng blockchain private bằng Docker và Kubernetes với CI/CD và giám sát hệ thống.

- Các thành phần chính:
- blockchain-network: Cấu hình mạng blockchain và triển khai các node.
- smart-contracts: Mã nguồn và CI/CD cho smart contracts.
- monitoring: Cấu hình giám sát với Prometheus và Grafana.

- Hướng dẫn triển khai

1.Khởi động mạng blockchain:   
    docker-compose up -d
2.Triển khai trên Kubernetes:
    kubectl apply -f blockchain-network/kubernetes/deployment.yml
    kubectl apply -f blockchain-network/kubernetes/service.yml

3.CI/CD cho Smart Contracts:
   - Cấu hình Jenkins và tải mã nguồn từ GitHub để build, test, và deploy smart contracts.

4.Giám sát hệ thống:
   - Cấu hình Prometheus và Grafana để giám sát các node blockchain.

-Kiểm tra kết nối

Sử dụng lệnh dưới để kiểm tra kết nối giữa các node:

docker exec -it orderer.example.com ping peer0.org1.example.com
