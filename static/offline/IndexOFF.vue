<template>
    <html>
    
    <head>
        <meta charset="utf-8" lang="es">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <title>Rottis - Santiago, Republica Dominicana</title>
        <link type="text/css" rel="stylesheet" href="/offline/construccion.css" media="screen" title="no title">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
    </head>
    
    <body>
        <div class="construccion">
            <g-link to="/indexx"></g-link>
            <img src="/offline/logotipo.png" alt="" />
            <h1>Página en construcción</h1>
    
            <p class="duramente">En construcción por <br> Duramente Web Studio
                <!-- <a href="#duramente" target="_blank">Duramente Web Studio</a> -->
            </p>
        </div>
    
    </body>
    
    </html>
</template>

<style scoped>
body div.construccion a{
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 0, 0, 0); 
}
html {
    margin: 0;
    font-family: 'Open Sans', sans-serif !important;
}

body {
    background-image: url("/offline/fondoquesos.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    color: white;
}

h1 {
    font-family: 'Open Sans', sans-serif !important;
    text-transform: uppercase;
    font-size: 40px;
    text-shadow: 1px 2px black;
    font-weight: bolder;
    text-align: center;
    color: #fFffff;
}

img {
    padding: 40px;
    width: 35%;
    /* border-bottom: 2px solid #BF0411; */
}

p {
    text-align: center;
    font-weight: lighter;
    position: fixed;
    bottom: 10px;
    font-size: 10px;
    color: black;
}

a {
    text-decoration: none;
    color: #BF0411;
}

.construccion {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

@media only screen and (max-width: 780px) {
    img {
        padding: 20px;
        width: 40%;
    }
}

@media only screen and (max-width: 320px) {
    img {
        padding: 20px;
        width: 60%;
    }
}
</style>