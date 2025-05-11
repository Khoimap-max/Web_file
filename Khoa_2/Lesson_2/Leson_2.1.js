// Tạo một mảng số nguyên
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Khởi tạo biến để tính tổng số chẵn và số lẻ
let sumEven = 0;
let sumOdd = 0;

// Ngưỡng cho trước
let threshold = 5;

// Biến đếm số lớn hơn ngưỡng
let countGreaterThanThreshold = 0;

// Sử dụng vòng lặp để duyệt qua mảng
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];

  // Sử dụng câu lệnh if-else để tách số chẵn và số lẻ
  if (number % 2 === 0) {
    // Số chẵn
    sumEven += number;
  } else {
    // Số lẻ
    sumOdd += number;
  }

  // Kiểm tra nếu số lớn hơn ngưỡng
  if (number > threshold) {
    countGreaterThanThreshold++;
  }
}

// In kết quả ra console
console.log("Tổng số chẵn: " + sumEven);
console.log("Tổng số lẻ: " + sumOdd);
console.log("Số lượng số lớn hơn " + threshold + ": " + countGreaterThanThreshold);