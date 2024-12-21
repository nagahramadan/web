// الحصول على العناصر
const emailInput = document.getElementById('textEmail');
const passwordInput = document.getElementById('textPass');
const errorDiv = document.getElementById('error');
const loginButton = document.querySelector('.btnn a');

// التحقق من البريد الإلكتروني
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// التحقق من كلمة المرور (الطول الأدنى 8 أحرف)
function isValidPassword(password) {
  return password.length >= 8; // فقط التحقق من الطول
}

// إضافة مستمع للنقر على زر تسجيل الدخول
loginButton.addEventListener('click', function (event) {
  event.preventDefault(); // منع الانتقال الافتراضي للرابط
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  let errors = [];

  // التحقق من البريد الإلكتروني
  if (!isValidEmail(emailValue)) {
    errors.push("البريد الإلكتروني غير صالح.");
  }

  // التحقق من كلمة المرور
  if (!isValidPassword(passwordValue)) {
    errors.push("كلمة المرور يجب أن تكون 8 أحرف على الأقل.");
  }

  // عرض الأخطاء
  if (errors.length > 0) {
    errorDiv.innerHTML = errors.join("<br>");
    errorDiv.style.color = "red";
  } else {
    errorDiv.innerHTML = "تم التحقق بنجاح ✔️";
    errorDiv.style.color = "green";

    // السماح بإعادة التوجيه للرابط
    window.location.href = loginButton.getAttribute('href');
  }
});
