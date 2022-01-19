const AquariusBtn = document.getElementById('Aquarius')

AquariusBtn.addEventListener('click', function{
    userPicked('Aquarius')
    console.log('You are an Aquarius.')
});

function userPicked() {
    console.log('The user called this function!');
}