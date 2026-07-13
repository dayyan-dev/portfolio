
  document.querySelector('.menu-btn').addEventListener('click', function(){
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'fixed';
    nav.style.top = '70px';
    nav.style.right = '6vw';
    nav.style.background = 'var(--card)';
    nav.style.border = '1px solid var(--line)';
    nav.style.borderRadius = '12px';
    nav.style.padding = '20px';
    nav.style.gap = '16px';
  });
