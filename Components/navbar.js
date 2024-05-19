class CustomNavbar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <style>
          @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
          .navbar {
            background-color: #ffff;
            transition: background-color 0.5s;
          }
          .navbar.sticky {
            background-color:rgba(255, 255, 255, 0.5);
          }
        </style>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand d-flex align-items-center" href="#">
              <img src="/aset/logo.png" alt="Brand Logo" width="50" height="50" class="d-inline-block align-top ms-2">
              <span class="ms-5"><b>Nusantara Chicken</b></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#produk">Product</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#servis">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#testimoni">Testimonial</a>
                </li>
              </ul>
            </div>
            <div class="d-flex">
              <a href="" class="me-3"><i class="bi bi-box-arrow-up-right"></i></a>
            </div>
          </div>
        </nav>
        <script>
          window.onscroll = function() {
            var navbar = document.querySelector('.navbar');
            if (window.pageYOffset > 0) {
              navbar.classList.add('sticky');
            } else {
              navbar.classList.remove('sticky');
            }
          };
        </script>
      `;
    }
  }
  
  customElements.define("custom-navbar", CustomNavbar);
  