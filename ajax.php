<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
       
    </head>
    <body>
        <div class="container">
            <h2>bai 4</h2>
            <form id="form" action="login/result.php">
                <div>
                <label for="email">Email</label>
                    <input type="text" id="email" name="email" value="">
                </div>
                <br>
                <div>
                    <label for="password">Password</label>
                    <input type="pass" id="password" name="password" value="">
                </div>
                <br>
                <div id="result"></div>
                <div>
                    <button id="submit">Submit</button>
                </div>
            </form>
            
        </div>

        <script>
            $( document ).on( "click", "#submit", function(e) {
                 e.preventDefault();
                $.ajax({
                    type: 'post',
                    url: $('#form').attr('action'),
                    dataType: 'text',
                    data: $('#form').serialize(),
                    success:function (data) {
                        console.log(data);
                        $('#result').html(data);
                      
                    },
                    error:function (data) {
                        alert('something went wrong.');
                    }
                });
            });
        </script>
    </body>
</html>