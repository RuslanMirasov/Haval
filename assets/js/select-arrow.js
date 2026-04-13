export const initSelectArrow = () => {
  document.addEventListener('click', e => {
    if (e.target.nodeName === 'SELECT') {
      e.target.classList.toggle('open');
    }
  });

  document.addEventListener('focusout', e => {
    if (e.target.nodeName === 'SELECT') {
      e.target.classList.remove('open');
    }
  });

  document.addEventListener('change', e => {
    if (e.target.nodeName === 'SELECT') {
      setTimeout(() => {
        e.target.classList.remove('open');
      }, 0);
    }
  });

  const toggleChildrenFields = count => {
    const childrenBlock = document.querySelector('[data-children]');

    if (!childrenBlock) return;

    const fields = [
      document.querySelector('[data-child-one]'),
      document.querySelector('[data-child-two]'),
      document.querySelector('[data-child-three]'),
    ];

    if (!childrenBlock) return;

    childrenBlock.style.display = count > 0 ? 'flex' : 'none';

    fields.forEach((field, index) => {
      if (!field) return;
      field.style.display = index < count ? 'flex' : 'none';
    });
  };

  document.addEventListener('input', e => {
    if (e.target.nodeName === 'SELECT' && e.target.name === 'Form.ChildrenCount') {
      toggleChildrenFields(Number(e.target.value));
    }
  });
};
