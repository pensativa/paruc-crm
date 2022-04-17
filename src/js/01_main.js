//Инициация всех подсказок
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

//Показать пароль
(function() {
    const showPasswordButton = document.querySelector('.show-password');
    const inputOfPassword = document.getElementById('singin-password');
    if (!showPasswordButton) {
        return;
    }
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

  //Tovar checkbox
  (function() {
    const checkbox = document.getElemenById('select');
    if (!checkbox) {
        return;
    }
    checkbox.oninput = function() {
        
    }
  })();
  (function() {
    const checkboxes = document.querySelectorAll('.oder__table--tovar input[type="checkbox"]');
    const select = document.querySelector('.section__block-select');
    if (!select) {
        return;
    }
    checkboxes.forEach(element => {
        element.oninput = function() {
            const checkedCheckboxes = document.querySelectorAll('.oder__table--tovar input[type="checkbox"]:checked');
            console.log(checkedCheckboxes);
            if (checkedCheckboxes.length > 0) {
                select.style.opacity = '1';
            } else {
                select.style.opacity = '0';
            }
        }
    });
  })();