const loadingIcon = document.getElementById('loading-icon');
const loadButton = document.getElementById('load-button');

loadButton.addEventListener('click', () => {
  loadingIcon.classList.remove('hidden'); // Hiển thị biểu tượng loading

  setTimeout(() => {
    // Simulate loading for 2 seconds
    loadingIcon.classList.add('hidden'); // Ẩn biểu tượng loading sau khi tải xong
  }, 2000);
});