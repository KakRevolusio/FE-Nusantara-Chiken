class CustomFooter extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <footer class="footer mt-auto py-3 bg-light">
      <div class="container d-flex justify-content-between align-items-center">
        <div>
          <h3><b>Chicken Nusantara</b></h3>
        </div>
        <div><span class="">@ 2024, Nusantara Chicken Kelompok Arceus</span></div>
        <div>
          <ul class="nav ">
            <li class="nav-item "><a class="nav-link text-dark " href="#">Terms</a></li>
            <li class="nav-item"><a class="nav-link text-dark" href="#">Privacy</a></li>
            <li class="nav-item"><a class="nav-link text-dark" href="#">Support</a></li>
          </ul>
        </div>
      </div>
    </footer>
      `;
    }
  }
  
  customElements.define("custom-footer", CustomFooter);
  