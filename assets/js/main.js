document.addEventListener('DOMContentLoaded', function () {
  // Category filter on writing page
  var filterBtns = document.querySelectorAll('.filter-btn');
  var articleCards = document.querySelectorAll('.article-card');

  if (filterBtns.length > 0) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = this.dataset.filter;

        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');

        articleCards.forEach(function (card) {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});
