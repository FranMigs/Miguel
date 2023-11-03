let slide = document.querySelectorAll('.slide');
let inner = document.querySelectorAll('.inner');

slide.forEach((s, i) => {
    s.addEventListener('click', () => {
        slide.forEach((Sl) => {
            Sl.classList.remove('active');
            Sl.style.transform = `translateX(${slide[i].getAttribute('data-t')}%)`;
            inner.forEach((inn) => {
                inn.style.transform = `translateX(${inner[i].getAttribute('data-i')}%)`;
            })
        })
        slide[i].classList.add('active')
    })
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
})