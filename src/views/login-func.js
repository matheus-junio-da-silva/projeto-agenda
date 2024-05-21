function toggleDisplay() {
    var loginDisplay = document.querySelector('.login-display');
    var cadastroDisplay = document.querySelector('.cadastro-display');

    if (loginDisplay.style.display === 'none') {
        loginDisplay.style.display = 'block';
        cadastroDisplay.style.display = 'none';
    } else {
        loginDisplay.style.display = 'none';
        cadastroDisplay.style.display = 'block';
    }
}

