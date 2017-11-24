$(document).ready(() => {
    console.log(document.cookie);
    var cookiesRegexp = /okcookies/;
    console.log(cookiesRegexp.test(document.cookie));
    if(cookiesRegexp.test(document.cookie)=== false) {
        $('#cookiesBar').show();
    }
    $('#cookiesButton').on('click', function () {
        console.log("click");
        $('#cookiesBar').hide();
        let date = new Date();
        date.setTime(date.getTime() + (365*24*60*60*1000));
        document.cookie = "mynoteboat=okcookies; expires=" + date.toUTCString() + "; path=/";
    });
});



