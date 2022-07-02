class SiteNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav>
      <ul class="flex-columns gap text-center">
        <li><a href="blog.html">Blog</a></li>
        <li><a href="templates.html">Templates</a></li>
        <li><a href="progress.html">Site Progress</a></li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('site-nav', SiteNav);
