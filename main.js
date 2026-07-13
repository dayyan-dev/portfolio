
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

  const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".proj-card");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        cards.forEach(card => {

            const category = card.dataset.category;

            if(filter === "all" || category.includes(filter)){
                card.classList.remove("hide");
            }else{
                card.classList.add("hide");
            }

        });

    });

});