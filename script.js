document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const retryMessage = document.getElementById('retryMessage');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const fireworksContainer = document.querySelector('.fireworks-container'); // Vẫn dùng chung container này
    const question = document.querySelector('.question');
    const title = document.querySelector('h1');
    const buttonsDiv = document.querySelector('.buttons');

    // Biến để lưu trữ interval của hiệu ứng
    let heartsInterval;
    let bubblesInterval;

    // Xử lý khi nhấn nút "Không"
    noBtn.addEventListener('click', () => {
        // Hiện thông báo "Vui lòng chọn lại"
        retryMessage.classList.remove('hidden');

        // Làm nút "Có" lớn hơn
        let currentYesFontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentYesFontSize * 1.2) + 'px'; // Tăng 20%
        yesBtn.style.padding = (parseFloat(window.getComputedStyle(yesBtn).paddingTop) * 1.2) + 'px ' + (parseFloat(window.getComputedStyle(yesBtn).paddingLeft) * 1.2) + 'px'; // Tăng padding
    });

    // Xử lý khi nhấn nút "Có"
    yesBtn.addEventListener('click', () => {
        // Ẩn tất cả các phần tử khác
        question.classList.add('hidden');
        buttonsDiv.classList.add('hidden');
        retryMessage.classList.add('hidden');
        title.classList.add('hidden');

        // Hiện thông báo "Cảm ơn"
        thankYouMessage.classList.remove('hidden');

        // Bắt đầu tạo hiệu ứng trái tim và bong bóng
        startLoveEffects();
    });

    // Hàm bắt đầu hiệu ứng trái tim rơi và bong bóng bay
    function startLoveEffects() {
        // Xóa bất kỳ hiệu ứng nào đang chạy để tránh trùng lặp nếu người dùng nhấn lại
        clearInterval(heartsInterval);
        clearInterval(bubblesInterval);

        // Tạo trái tim rơi từ trên xuống
        heartsInterval = setInterval(() => {
            createFallingHeart();
        }, 200); // Tạo một trái tim mỗi 200ms

        // Tạo bong bóng bay từ dưới lên
        bubblesInterval = setInterval(() => {
            createBubble();
        }, 150); // Tạo một bong bóng mỗi 150ms
    }

    // Hàm tạo trái tim rơi
    function createFallingHeart() {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');
        fireworksContainer.appendChild(heart);

        const size = Math.random() * 25 + 15; // Kích thước ngẫu nhiên từ 15px đến 40px
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${Math.random() * 100}%`; // Vị trí ngang ngẫu nhiên
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Thời gian rơi ngẫu nhiên từ 2s đến 5s
        heart.style.animationDelay = `${Math.random() * 0.5}s`; // Độ trễ nhỏ ngẫu nhiên

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Hàm tạo bong bóng bay lên
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        fireworksContainer.appendChild(bubble);

        const size = Math.random() * 30 + 20; // Kích thước ngẫu nhiên từ 20px đến 50px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`; // Vị trí ngang ngẫu nhiên
        bubble.style.bottom = `-50px`; // Bắt đầu từ dưới màn hình

        // Để bong bóng bay hơi chéo
        const translateXEnd = (Math.random() - 0.5) * 200; // Từ -100px đến 100px
        bubble.style.setProperty('--translateX-end', `${translateXEnd}px`);

        bubble.style.animationDuration = `${Math.random() * 5 + 3}s`; // Thời gian bay ngẫu nhiên từ 3s đến 8s
        bubble.style.animationDelay = `${Math.random() * 0.5}s`; // Độ trễ nhỏ ngẫu nhiên

        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }
});