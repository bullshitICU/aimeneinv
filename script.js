// JavaScript code can be added here if needed
document.addEventListener('DOMContentLoaded', function () {
    console.log('Website is loaded and ready!');
});
// JavaScript code for password protection
function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = "J&Oa&8Laki&";

    if (password === correctPassword) {
        document.getElementById('passwordPrompt').style.display = 'none';
        document.getElementById('downloadSection').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
}