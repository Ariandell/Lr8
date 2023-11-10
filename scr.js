let userP = 0;
let csP = 0;
let rounds = 1;
let username;
window.onload = function() {
    setUsername();
};
function setUsername() {
    username = prompt("Введіть ваше ім'я:"); 
    document.getElementById('userP').textContent = username ? username + ': 0' : 'Твій бал: 0';
}
function play()
{
    const userNumber = Math.floor(Math.random() * 10) + 1;
    const computerNumber = Math.floor(Math.random() * 10) + 1;

    if (userNumber > computerNumber)
    {
        userP++;
    }
    else if (userNumber < computerNumber)
    {
        csP++;
    }

    document.getElementById('ri').textContent = 'Раунд ' + rounds;
    document.getElementById('userP').textContent = username + ' твій бал: ' + userP;
    document.getElementById('csP').textContent = 'Комп\'ютер: ' + csP;

    if (userP >= 3)
    {
        alert(username + ' ти переміг! Твій бал: ' + userP + ' Комп\'ютер: ' + csP);
    }
    else if (csP >= 3)
    {
        alert('Комп\'ютер переміг! ' + username + 'твій бал: ' + userP + ' Комп\'ютер: ' + csP);
    }
    rounds++;
};
