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
<img width="852" alt="image" src="https://github.com/LeeinUITk17/VibloEarth817/assets/119780047/c3756ccc-6fe0-4f77-860a-78b2aa3444d6">



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
    ## Hình ảnh sản 
<img width="1064" alt="image" src="https://github.com/LeeinUITk17/VibloEarth817/assets/119780047/684e3ad7-e3f5-48d5-b707-ecdd89160f5c">
<img width="1067" alt="image" src="https://github.com/LeeinUITk17/VibloEarth817/assets/119780047/89b5efa0-eacc-4e88-9025-754a52d94b36">
<img width="228" alt="image" src="https://github.com/LeeinUITk17/VibloEarth817/assets/119780047/a4f8d680-23d7-46eb-9f7f-424dd40f81e3">
<img width="1068" alt="image" src="https://github.com/LeeinUITk17/VibloEarth817/assets/119780047/8bc77fda-48b3-4f07-802c-8cde5f418d2d">
<img width="1064" alt="image" src="https://github.com/LeeinUITk17/VibloEarth817/assets/119780047/8d7fe225-1a4a-4b3c-9ce5-3b23809eec91">
<img width="470" alt="image" src="https://github.com/LeeinUITk17/VibloEarth817/assets/119780047/b50a5250-0963-43ad-8dc4-c9bf1733641b">
<img width="842" alt="image" src="https://github.com/LeeinUITk17/VibloEarth817/assets/119780047/4536a313-5dbd-4e9a-a157-57e7d019a6f9">
<img width="805" alt="image" src="https://github.com/LeeinUITk17/VibloEarth817/assets/119780047/34323033-a338-4638-851b-834d2b99e8f3">







