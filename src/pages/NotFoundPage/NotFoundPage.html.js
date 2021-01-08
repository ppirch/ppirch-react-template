module.exports = `
<!DOCTYPE html>
    <html>
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap" rel="stylesheet">
            
        </head>
        <body>
            <div class="mainbox">
                <div class="err">404</div>
                <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <a href="#">home</a> and try from there.</p></div>
                </div>
            <style>
            body {
                background-color: #89d6fb;
            }
            
            .mainbox {
                background-color: #89d6fb;
                margin: auto;
                height: 600px;
                width: 600px;
                position: relative;
            }
            
                .err {
                color: #ffffff;
                font-family: 'Nunito Sans', sans-serif;
                font-size: 11rem;
                position:absolute;
                left: 25%;
                top: 8%;
                }
            
            
            .msg {
                text-align: center;
                font-family: 'Nunito Sans', sans-serif;
                font-size: 1.6rem;
                position:absolute;
                left: 16%;
                top: 45%;
                width: 75%;
                }
            
            a {
                text-decoration: none;
                color: white;
            }
            
            a:hover {
                text-decoration: underline;
            }
            </style>
</html>`
