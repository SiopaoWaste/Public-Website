// dropdown menu
function toggleDropdown() {
    var navigation = document.querySelector('.sitenavigation');
    var btn = document.querySelector('.dropbutton');

    if (navigation.style.display === "block") {
        navigation.style.display = "none";
        btn.style.width = "75px";
        
    } else {
        navigation.style.display = "block";
        btn.style.width = navigation.offsetWidth + "px";
        
    }
}

// forum https://github.com/jamiewilson/form-to-google-sheets
document.addEventListener('DOMContentLoaded', function () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycby8cHdyI8L5D0DwOMpGC7w-ggOJkaqX3gesGW551rZldAmgzeUJHkJbtFEwLe4qdL8Q/exec';
    const form = document.forms['Contact'];

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    console.log('Success!', response);
                    window.location.href = 'sent.html';
                })
                .catch(error => console.error('Error!', error.message));
        });
    } else {
        console.error('Form not found');
    }
});