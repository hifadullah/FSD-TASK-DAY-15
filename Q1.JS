<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown</title>
</head>
<body>
    <script src="script.js"></script>
    <script>
        setTimeout(function() {
            console.log(10);
            setTimeout(function() {
                console.log(9);
                setTimeout(function() {
                    console.log(8);
                    setTimeout(function() {
                        console.log(7);
                        setTimeout(function() {
                            console.log(6);
                            setTimeout(function() {
                                console.log(5);
                                setTimeout(function() {
                                    console.log(4);
                                    setTimeout(function() {
                                        console.log(3);
                                        setTimeout(function() {
                                            console.log(2);
                                            setTimeout(function() {
                                                console.log(1);
                                                setTimeout(function() {
                                                    console.log("Happy Independence Day");
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
    </script>
</body>
</html>