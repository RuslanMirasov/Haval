export const hidePreloader = (delay = 0) => {
  const addLoadedClass = () => {
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, delay);
  };

  if (document.readyState === 'complete') {
    addLoadedClass();
  } else {
    window.addEventListener('load', addLoadedClass, { once: true });
  }
};
