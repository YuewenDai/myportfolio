<<<<<<< HEAD
const toastEl = document.getElementById('toast');

function initToast() {
  toastEl.addEventListener('transitionend', () => {
    toastEl.classList.remove('toasting-out');
    toastEl.classList.add('hidden');
  });
}

function showToast(message, otherClasses) {
  toastEl.innerHTML = message;
  toastEl.className = 'toast ' + (otherClasses || '');
  setTimeout(() => {
    toastEl.classList.add('toasting-out');
  });
}

export {
  initToast,
  showToast,
=======
const toastEl = document.getElementById('toast');

function initToast() {
  toastEl.addEventListener('transitionend', () => {
    toastEl.classList.remove('toasting-out');
    toastEl.classList.add('hidden');
  });
}

function showToast(message, otherClasses) {
  toastEl.innerHTML = message;
  toastEl.className = 'toast ' + (otherClasses || '');
  setTimeout(() => {
    toastEl.classList.add('toasting-out');
  });
}

export {
  initToast,
  showToast,
>>>>>>> 615d58ebc274bfb65cd0a51ac6df228f9251585e
};