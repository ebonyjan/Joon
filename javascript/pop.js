$("h1 h3").fadeOut(500);
$("h1 h3").fadeIn(1000).addClass("blue")

const items = document.querySelectorAll('.item')
const options = {
  threshold: 0.5
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}, options)
items.forEach(item => {
  observer.observe(item);
})
