function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

function acceptCookies() {
    setCookie('cookieConsent', 'accepted', 365);
    document.getElementById('consentBox').style.display = 'none';
}

function rejectCookies() {
    setCookie('cookieConsent', 'rejected', 365);
    document.getElementById('consentBox').style.display = 'none';
}

window.onload = function () {
    if (!getCookie('cookieConsent')) {
        document.getElementById('consentBox').style.display = 'flex';
    }

    // Load form data from cookies
    document.getElementById('name').value = getCookie('name') || '';
    document.getElementById('email').value = getCookie('email') || '';
    document.getElementById('website').value = getCookie('website') || '';
    document.getElementById('message').value = getCookie('message') || '';
    document.getElementById('rating').value = getCookie('rating') || '3';
    document.getElementById('categories').value = getCookie('categories') || 'accommodation';
    document.getElementById('newsletter').checked = getCookie('newsletter') === 'true';
}

document.getElementById('feedback-form').onsubmit = function () {
    // Save form data to cookies
    setCookie('name', document.getElementById('name').value, 7);
    setCookie('email', document.getElementById('email').value, 7);
    setCookie('website', document.getElementById('website').value, 7);
    setCookie('message', document.getElementById('message').value, 7);
    setCookie('rating', document.getElementById('rating').value, 7);
    setCookie('categories', document.getElementById('categories').value, 7);
    setCookie('newsletter', document.getElementById('newsletter').checked, 7);
}
