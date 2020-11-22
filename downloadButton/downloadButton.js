let child1 = document.querySelector('.child-1');
let child2 = document.querySelector('.child-2');
let child3 = document.querySelector('.child-3');
let percentage = document.querySelector('.percentage');
let complete = document.querySelector('.complete')

child1.addEventListener('click', function () {
  child1.classList.add('move');
  percentage.style.display = 'flex'

  let id = setInterval(animate, 40);
  let per = 0;
  let value = 0;

  function animate() {
    per++;
    value = value + 2;

    if (value > 200 && per > 100) {    // per mean percentage  //value mean container width
      complete.style.display = 'flex';
      child2.style.display = 'none';
      complete.classList.add('blink');
      clearInterval(id);
    } else {
      percentage.innerHTML = per + '%';
      child3.style.width = value + 'px'
    }
  }
})