
const accordionItems = document.querySelectorAll('.have-questions__accordion-item');

function clickAccordion () {
  accordionItems.forEach(function(item) {
    const header = item.querySelector('.have-questions__accordion-header');
    const content = item.querySelector('.have-questions__accordion-content');
    header.addEventListener('click', function() {
      const isActive = content.style.display === 'block';
      accordionItems.forEach(function(item) {
        item.querySelector('.have-questions__accordion-content').style.display = 'none';
    });
      content.style.display = isActive ? 'none' : 'block';
    });
  });
};

clickAccordion();
