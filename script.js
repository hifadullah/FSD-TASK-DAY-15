document.addEventListener("DOMContentLoaded", function() {
    var countdownElement = document.getElementById("countdown");
    
    setTimeout(function() {
        countdownElement.innerText = "10";
        setTimeout(function() {
            countdownElement.innerText = "9";
            setTimeout(function() {
                countdownElement.innerText = "8";
                setTimeout(function() {
                    countdownElement.innerText = "7";
                    setTimeout(function() {
                        countdownElement.innerText = "6";
                        setTimeout(function() {
                            countdownElement.innerText = "5";
                            setTimeout(function() {
                                countdownElement.innerText = "4";
                                setTimeout(function() {
                                    countdownElement.innerText = "3";
                                    setTimeout(function() {
                                        countdownElement.innerText = "2";
                                        setTimeout(function() {
                                            countdownElement.innerText = "1";
                                            setTimeout(function() {
                                                countdownElement.innerText = "Happy Independence Day!";
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
});
