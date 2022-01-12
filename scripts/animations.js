const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = $(element);

    setTimeout(() => { node.addClass(`${prefix}animated ${animationName}`); }, 100);


    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.removeClass(`${prefix}animated ${animationName}`);
      resolve('Animation ended');
    }

    node.bind('animationend', handleAnimationEnd);
  });
