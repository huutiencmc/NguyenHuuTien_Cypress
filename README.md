Hướng dẫn chạy kiểm thử Cypress cho dự án cypress-exercise
Bước 1: Chuẩn bị môi trường
Đảm bảo đã cài đặt Node.js (phiên bản 14 trở lên).

Đảm bảo đã cài đặt Cypress trong dự án:

bash
Sao chép
Chỉnh sửa
npm install cypress --save-dev
Bước 2: Mở Cypress Test Runner
Mở terminal (Command Prompt, PowerShell, Terminal trên Mac/Linux) trong thư mục gốc dự án cypress-exercise.

Chạy lệnh sau để mở giao diện Cypress:

bash
Sao chép
Chỉnh sửa
npx cypress open
Lệnh này sẽ mở ra cửa sổ Cypress Test Runner và tự động tạo cấu trúc thư mục cypress/ nếu chưa có.

Bước 3: Chạy các bài kiểm thử
Trong cửa sổ Cypress Test Runner, bạn sẽ thấy danh sách các file kiểm thử .cy.js trong thư mục cypress/e2e/.

Chọn lần lượt các file kiểm thử:

login_spec.cy.js — kiểm thử chức năng đăng nhập.

cart_spec.cy.js — kiểm thử giỏ hàng, sắp xếp, xóa sản phẩm, thanh toán.

Khi chọn file, Cypress sẽ chạy tất cả các test case bên trong và hiển thị kết quả trên màn hình.

Bước 4: Quan sát kết quả và ghi lại
Bạn có thể xem trạng thái Pass/Fail từng bước kiểm thử trong Test Runner.

Cypress tự động chụp ảnh màn hình khi test bị lỗi, và có thể quay video khi chạy test (nếu bạn chạy trong chế độ CI).

Bước 5 (tuỳ chọn): Chạy kiểm thử trong chế độ headless (không mở giao diện)
Nếu bạn muốn chạy các kiểm thử nhanh trong terminal mà không cần mở giao diện, dùng lệnh:

bash
Sao chép
Chỉnh sửa
npx cypress run
Kết quả test sẽ được in ra terminal.

