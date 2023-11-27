let array = [45, 17, -1, 12, 0]
let nextBtn = document.getElementById('nextBtn');
let result = document.querySelector('#result')
counter = 0

function nextNum(a){
    return result.textContent= array[counter++]
}

nextBtn.addEventListener('click',()=> nextNum(counter))