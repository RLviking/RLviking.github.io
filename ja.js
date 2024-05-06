document.getElementsByTagName("header")[0].innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand">Powerfit Gym</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav"> 
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Hem</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="prislista.html">Prislista</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="medier.html">Social media</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="omoss.html">Om oss</a>
                </li>
              </ul>
            </div>
          </nav>
`;


document.getElementsByTagName("footer")[0].innerHTML = `
<footer class ="footer-dark bg-dark">
<h6>Kontakta gärna oss med frågor:</h6>
<span>Mail: info@powerfitgym.com</span>
<span>Telefon: 123-456789</span>
</footer>
`;