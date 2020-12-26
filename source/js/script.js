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

if (formOrder) {
  const fieldsList = formOrder.querySelectorAll('.form-input__field[required]');

  formOrder.reset();

  for (let field of fieldsList) {
    field.removeAttribute('required');

    if (field.type === 'email') {
      field.classList.add('form-input__field--js');
    }
  }

  const checkEmptyFields = (fields) => {
    for (let field of fields) {

      if (!field.value) {
        field.classList.remove('form-input__field--invalid');
        void field.offsetWidth;
        field.classList.add('form-input__field--invalid');

        field.focus();

        return true;
      }

    }

    return false;
  };

  formOrder.addEventListener('submit', (evt) => {
    const fieldEmpty = checkEmptyFields(fieldsList);

    if (fieldEmpty) {
      evt.preventDefault();
    }
  });
}
