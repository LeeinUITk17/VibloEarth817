# Viblo_Earth817

## Kiến trúc hệ thống

### Client

#### React.js

Ứng dụng phía client được xây dựng bằng React.js và được chia tách thành các component nhỏ để dễ dàng quản lý và bảo trì. Các component này được build lại tại component cha để tạo thành giao diện hoàn chỉnh.

### Server

#### Node.js

Ứng dụng phía server được xây dựng bằng Node.js theo mô hình MVC (Model-View-Controller).

- **Routes:** Điều hướng và khởi tạo các API.
- **Controllers:** Sử dụng các hàm từ service để xử lý logic và đảm bảo đầu ra cho các API.
- **Services:** Kết nối với database và tạo các hàm xử lý dữ liệu.
- **Models:** Quản lý các model và kiến trúc dữ liệu.

### Database

#### MongoDB

Cơ sở dữ liệu được sử dụng là MongoDB ,hệ quản trị cơ sở dữ liệu NoSQL , cho phép lưu trữ dữ liệu dưới dạng document linh hoạt và mở rộng.

## Các chức năng chính của trang web

- **Đăng kí / Đăng nhập:** Người dùng có thể đăng ký tài khoản mới và đăng nhập vào hệ thống.
- **Tạo bài viết:** Người dùng có thể tạo và chia sẻ bài viết mới.
- **Comment:** Người dùng có thể bình luận trên các bài viết.
- **Contact:** Trang liên hệ để người dùng gửi phản hồi hoặc liên hệ với quản trị viên.
- **Quản lí tài khoản:** Người dùng có thể thêm, sửa, xóa thông tin tài khoản của mình.
- **Vote Up / Vote Down bài viết:** Người dùng có thể bình chọn (upvote) hoặc phản đối (downvote) các bài viết.
- **Follow người dùng khác:** Người dùng có thể theo dõi các tài khoản khác.
## Cách setup môi trường

1. **Cài đặt Node.js và npm:**
   Đảm bảo bạn đã cài đặt Node.js và npm trên máy tính của mình. Bạn có thể tải và cài đặt chúng từ [trang web chính thức của Node.js](https://nodejs.org/).

2. **Clone dự án từ GitHub:**
   Sử dụng lệnh `git clone` để clone dự án từ GitHub về máy tính của bạn.

    ```bash
    git clone https://github.com/LeeinUITk17/VibloEarth817.git
    ```

3. **Cài đặt các gói phụ thuộc:**
   Chuyển đến thư mục dự án và cài đặt các gói phụ thuộc bằng npm.

    ```bash
    cd server
    npm install
    npm run dev
    ```

    ```bash
    cd client
    npm install
    npm run build
    npm start
    ```
