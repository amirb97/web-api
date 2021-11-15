var score = document.getElementById('score');
var clearBtn = document.querySelector('#clear');

var info = JSON.parse(localStorage.getItem('user-info'));

if(info !== null){
    score.textContent = info.initials + ' - ' + info.score;
}

clearBtn.addEventListener('click', function(e) {
    e.preventDefault();

    localStorage.clear();
});