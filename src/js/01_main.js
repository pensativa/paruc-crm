var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

(function() {
    const showPasswordButton = document.querySelector('.show-password');
    const inputOfPassword = document.getElementById('singin-password');
    showPasswordButton.onclick = function() {
        if (showPasswordButton.classList.contains('open')) {
            inputOfPassword.setAttribute('type', 'password');
            showPasswordButton.classList.remove('open');
        } else {
            inputOfPassword.setAttribute('type', 'text');
            showPasswordButton.classList.add('open');
        }
    }
  })();