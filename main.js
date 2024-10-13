// Khi toàn bộ nội dung HTML đã được tải xong
document.addEventListener('DOMContentLoaded', () => {
    // Lấy phần tử div có class 'demo'
    const demo = document.querySelector('.demo');
    
    // Lưu nội dung văn bản hiện tại của div vào biến 'text'
    const text = demo.textContent;
    
    // Xóa nội dung ban đầu trong div để chuẩn bị cho việc thêm từng chữ cái
    demo.textContent = '';

    // Phân tách chuỗi văn bản thành một mảng các ký tự và lặp qua từng ký tự
    text.split('').forEach((char, index) => {
        // Tạo một phần tử span mới để chứa ký tự
        const span = document.createElement('span');
        
        // Gán ký tự hiện tại cho nội dung của span
        span.textContent = char;
        
        // Thêm class 'letter' để áp dụng CSS cho hiệu ứng
        span.className = 'letter';
        
        // Thêm phần tử span vào div 'demo'
        demo.appendChild(span);

        // Sử dụng setTimeout để thay đổi opacity của span sau một khoảng thời gian
        // Tính toán thời gian trì hoãn dựa trên vị trí của ký tự
        setTimeout(() => {
            span.style.opacity = 1; // Đặt opacity của span thành 1 để nó hiển thị
        }, index * 50); // Mỗi ký tự sẽ xuất hiện cách nhau 300ms
    });
    // Thêm con trỏ vào cuối cùng sau khi tất cả các ký tự đã xuất hiện
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    demo.appendChild(cursor);
    cursor.textContent = '|';
});
