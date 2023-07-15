document.addEventListener("DOMContentLoaded", function () {
  const logoutButton = document.getElementById("logout-button");

  logoutButton?.addEventListener("click", function () {
    // Xóa thông tin đăng nhập trong Local Storage
    localStorage.removeItem("isLogin");
    alert("Đăng xuất thành công");
    window.location.reload();
  });
});