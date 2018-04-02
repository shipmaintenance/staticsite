$(document).ready(() => {
    /*
        Gestion des cookies
     */
    var cookiesRegexp = /okcookies/;
    if(cookiesRegexp.test(document.cookie)=== false) {
        $('#cookiesBar').show();
    }
    $('#cookiesButton').on('click', function () {
        $('#cookiesBar').hide();
        let date = new Date();
        date.setTime(date.getTime() + (365*24*60*60*1000));
        document.cookie = "mynoteboat=okcookies; expires=" + date.toUTCString() + "; path=/";
    });

    /*
        Toggle the visibility of popup about the team
     */
    $('#popupTeamPresentation').on('click', function () {
        $('#teamPresentation').toggle();

    })
    function getCompareDate() {
        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('');
    }
    $('[future-date]').each(function() {
        if($(this).attr('future-date') < getCompareDate()) $(this).hide();
    });
});