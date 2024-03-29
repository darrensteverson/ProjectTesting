function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);

            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

setTimeout(function () {

    if (typeof (Storage) !== "undefined") {

        console.log("Already shown" + sessionStorage.getItem('spalashShown'));

        if (!sessionStorage.getItem('spalashShown') || sessionStorage.getItem('spalashShown') === null) {

            document.getElementById('splash').style.display = 'inline';

            //Display splash
            setTimeout(function () {

                fade(document.getElementById('splash'));


                sessionStorage.setItem('spalashShown', true);
            }
                , 3000);
        }
    }
});
