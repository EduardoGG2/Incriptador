<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="reset.css">
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="img/icon.png">
  <title>Encriptador de Mensajes</title>
</head>

<body>

  <main class="main">

    <div id="contenedor-titulo">
      <h1 class="titulo">Código Secreto</h1>
    </div>

    <div class="boxes">
      <div class="form box">
        <form>
          <p class="texto">Escribe tú mensaje sin acentos, o pega un mensaje encriptado:</p>
          <input class="text-input" id="input-texto" type="text" name="input-texto" placeholder="Ingrese el texto aqui">

          <input class="btn" id="btn-encriptar" type="submit" value="Encriptar">
          <input class="btn" id="btn-desencriptar" type="submit" value="Desencriptar">
        </form>
      </div>

      <div class="msg box">
        <p class="texto">Mensaje Cifradp/Desifrado:</p>
        <input class="text-input" id="msg" type="text" placeholder="Mensaje" readonly="readonly">
        <input class="btn" id="btn-copy" type="submit" value="Copiar Mensaje">
      </div>
    </div>

    <div id="footer-end">
      <p class="texto-footer">By EduardoGG</p>
      <a class="links-footer" href="https://www.linkedin.com/in/eduardo-jurado-a3b143251/" target="_blank">
        <img class="iconos" src="img/Linkedin.png" alt="linkedin">
      </a>
      <a class="links-footer" href="" target="_blank">
        <img class="iconos" src="img/Git.jpg" alt="GitHub">
      </a>
    </div>
  </main>

  <script src="js/script.js"></script>
  <script src="js/validar-texto.js"></script>
  <script src="js/encriptar.js"></script>
  <script src="js/desencriptar.js"></script>
  <script src="js/copiar-mensaje.js"></script>

</body>

</html>