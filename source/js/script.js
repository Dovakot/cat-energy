// Меню
const nav = document.querySelector('.nav');
const buttonNav = nav.querySelector('.nav__toggle');

nav.classList.toggle('nav--js');

buttonNav.addEventListener('click', (evt) => {
  evt.preventDefault();

  nav.classList.toggle('nav--open');
  buttonNav.setAttribute('aria-label', 'Закрыть меню');

  if (!nav.classList.contains('nav--open')) {
    buttonNav.setAttribute('aria-label', 'Открыть меню');
  }
});

// Карта
const mapIframe = document.querySelector('.contacts__map-iframe');
const mapLink = document.querySelector('.contacts__map-link');

mapIframe.classList.add('contacts__map-iframe--js');
mapLink.remove();

// Подбор программы
const formOrder = document.querySelector('.order__form');

if (formOrder ) {
  const fieldsList = formOrder.querySelectorAll('.form-input__field[required]');

  formOrder.reset();

  for (let fild of fieldsList) {
    fild.removeAttribute('required');

    if (fild.type === 'email') {
      fild.classList.add('form-input__field--js');
    }
  }

  const checkEmptyFields = (filds) => {
    for (let fild of filds) {

      if (!fild.value) {
        fild.classList.remove('form-input__field--invalid');
        void fild.offsetWidth;
        fild.classList.add('form-input__field--invalid');

        fild.focus();

        return true;
      }

    }

    return false;
  };

  formOrder.addEventListener('submit', (evt) => {
    const fildEmpty = checkEmptyFields(fieldsList);

    if (fildEmpty) {
      evt.preventDefault();
    }
  });
}
