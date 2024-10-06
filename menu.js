document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('mouseover', () => {
      const subMenu = item.querySelector('ul');
      if (subMenu) {
        subMenu.style.display = 'block';
      }
    });
  
    item.addEventListener('mouseout', () => {
      const subMenu = item.querySelector('ul');
      if (subMenu) {
        subMenu.style.display = 'none';
      }
    });
  });
  