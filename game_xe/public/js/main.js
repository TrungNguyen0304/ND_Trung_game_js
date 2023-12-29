// var isStart = false;
// function start() {
//     var domRed = document.getElementById('red');
//     var domYellow = document.getElementById('yellow');
//     var domGreen = document.getElementById('green');

//     setTimeout(function () {
//         domRed.style.backgroundColor = 'red'; // Đổi màu đỏ thành màu đỏ
//         kiemtra = false;
//     }, 6700);

//     setTimeout(function () {
//         domYellow.style.backgroundColor = 'yellow'; // Đổi màu vàng thành màu yellow
//         kiemtra = false;
//     }, 7700);

//     setTimeout(function () {
//         domGreen.style.backgroundColor = 'green'; // Đổi màu xanh thành màu greeen
//         isStart = true;

//         // Play sound effect for car 1
//         var car1Sound = document.getElementById("car1Sound");
//         car1Sound.play();

//         // Play sound effect for car 2
//         var car2Sound = document.getElementById("car2Sound");
//         car2Sound.play();
//     }, 9000);
// }

// var a = 0;
// var b = 0;
// var x1 = 148;
// var x2 = 148;

// document.addEventListener("keydown", function (even) {
//     domCar1 = document.getElementById('car1');
//     domCar2 = document.getElementById('car2');
//     domX1 = document.getElementById('xang1');
//     domX2 = document.getElementById('xang2');

//     if (isStart) {
//         switch (even.key) {
//             case "ArrowRight":
//                 a += 10;
//                 domCar1.style.marginLeft = a + 'px';
//                 x1 -= 1;
//                 domX1.style.width = x1 + 'px';
//                 break;
//             case "d":
//                 b += 10;
//                 domCar2.style.marginLeft = b + 'px';
//                 x2 -= 1;
//                 domX2.style.width = x2 + 'px';
//                 break;
//         }
//     }
// });

// // Play sound effect when the "Bắt đầu" button is clicked
// var startButton = document.querySelector('.btn-dark');
// startButton.addEventListener('click', function () {
//     var car1Sound = document.getElementById("car1Sound");
//     car1Sound.play();

//     var car2Sound = document.getElementById("car2Sound");
//     car2Sound.play();
// });

// setTimeout(batdau, 2000);











// Biến để theo dõi trạng thái của trò chơi
var isStart = false;
var finishLine = 1170;
var kiemtra;

// Hàm để bắt đầu cuộc đua
function start() {
    // Lấy các phần tử DOM của đèn giao thông
    var domRed = document.getElementById('red');
    var domYellow = document.getElementById('yellow');
    var domGreen = document.getElementById('green');

    // Đặt đèn đỏ sau 6.7 giây
    setTimeout(function () {
        domRed.style.backgroundColor = 'red';
        kiemtra = false;
    }, 2700);

    // Đặt đèn vàng sau 7.7 giây
    setTimeout(function () {
        domYellow.style.backgroundColor = 'yellow';
        kiemtra = false;
    }, 3700);

    // Đặt đèn xanh sau 9 giây
    setTimeout(function () {
        domGreen.style.backgroundColor = 'green';
        isStart = true;  // Bắt đầu cuộc đua
        // Phát âm thanh cho cả hai chiếc xe
        var car1Sound = document.getElementById("car1Sound");
        car1Sound.play();

        var car2Sound = document.getElementById("car2Sound");
        car2Sound.play();
    }, 5000);
}

// Hàm để dừng đèn giao thông và âm thanh của xe
function stopLightsAndSounds() {
    // Lấy các phần tử DOM của đèn giao thông
    var domRed = document.getElementById('red');
    var domYellow = document.getElementById('yellow');
    var domGreen = document.getElementById('green');

    // Đặt lại đèn giao thông về màu trắng
    domRed.style.backgroundColor = 'white';
    domYellow.style.backgroundColor = 'white';
    domGreen.style.backgroundColor = 'white';

    // Tạm dừng và đặt lại âm thanh của xe
    var car1Sound = document.getElementById("car1Sound");
    car1Sound.pause();
    car1Sound.currentTime = 0;

    var car2Sound = document.getElementById("car2Sound");
    car2Sound.pause();
    car2Sound.currentTime = 0;
}

// Biến để theo dõi vị trí và chiều rộng của hai chiếc xe
var a = 0;
var b = 0;
var x1 = 148;
var x2 = 148;

// Lắng nghe sự kiện khi phím được nhấn (phím mũi tên và phím 'd')
document.addEventListener("keydown", function (event) {
    // Lấy các phần tử DOM của xe và thanh tiến trình
    var domCar1 = document.getElementById('car1');
    var domCar2 = document.getElementById('car2');
    var domX1 = document.getElementById('xang1');
    var domX2 = document.getElementById('xang2');

    // Kiểm tra xem cuộc đua đã bắt đầu chưa
    if (isStart) {
        switch (event.key) {
            // Di chuyển xe 1 sang phải
            case "ArrowRight":
                a += 10;
                domCar1.style.marginLeft = a + 'px';
                x1 -= 1;
                domX1.style.width = x1 + 'px';

                // Kiểm tra xem xe 1 đã đến đích chưa
                if (a >= finishLine) {
                    declareWinner("Xe 1");
                }
                break;
            // Di chuyển xe 2 sang phải
            case "d":
                b += 10;
                domCar2.style.marginLeft = b + 'px';
                x2 -= 1;
                domX2.style.width = x2 + 'px';

                // Kiểm tra xem xe 2 đã đến đích chưa
                if (b >= finishLine) {
                    declareWinner("Xe 2");
                }
                break;
        }
    }
});

// Hàm để thông báo người chiến thắng
function declareWinner(winner) {
    alert(winner + " chiến thắng!");  // Hiển thị thông báo với tên người chiến thắng
    isStart = false;  // Dừng cuộc đua
}

// Hàm để đặt lại vị trí và chiều rộng của xe
function resetXe() {
    a = 0;
    b = 0;
    x1 = 148;
    x2 = 148;

    // Lấy các phần tử DOM của xe và thanh tiến trình
    var domCar1 = document.getElementById('car1');
    var domCar2 = document.getElementById('car2');
    var domX1 = document.getElementById('xang1');
    var domX2 = document.getElementById('xang2');

    // Đặt lại vị trí và chiều rộng
    domCar1.style.marginLeft = a + 'px';
    domX1.style.width = x1 + 'px';

    domCar2.style.marginLeft = b + 'px';
    domX2.style.width = x2 + 'px';
}

// Hàm để đặt lại toàn bộ trò chơi
function resetGame() {
    stopLightsAndSounds();  // Dừng đèn giao thông và âm thanh
    resetXe();  // Đặt lại vị trí và chiều rộng của xe
    isStart = false;  // Đặt trạng thái của trò chơi về chưa bắt đầu
    start();  // Bắt đầu lại trò chơi
}

// Lấy nút restart bằng ID và thêm lắng nghe sự kiện để đặt lại trò chơi khi được nhấp
var restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', resetGame);