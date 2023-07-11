class AppHeader extends HTMLElement {
  connectedCallback() {
    const subpage = this.getAttribute("data-subpage") || false;
    console.log(subpage);
    this.innerHTML = /*html*/ `
      <header class="header ${subpage ? "subpage" : ""}">
        <div class="container">
          <h1 class="logo">
            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 369">
                <path
                  d="M20 332 201 18h99l181 314-10 19H334l-83-145-84 145H31l-11-19Zm32-7h101l87-150h21l87 150h101L286 43h-70L52 325Z"
                />
                <circle cx="208.3" cy="30.1" r="30.1" />
                <circle cx="292.7" cy="30.1" r="30.1" />
                <circle cx="250.6" cy="184" r="30.1" />
                <circle cx="470.5" cy="338" r="30.1" />
                <circle cx="340.8" cy="338.4" r="30.1" />
                <circle cx="160.2" cy="338.4" r="30.1" />
                <circle cx="30.7" cy="338" r="30.1" />
              </svg>
              <span>CaretTab</span>
            </a>
          </h1>
          <div class="explanation">
            A browser extension that replaces your New Tab page with a unique
            and fully customizable dashboard.
          </div>
          <div class="slogan">Your Tab, Your Rules</div>
          ${
            !subpage
              ? /*html*/ `
              <p class="explanation2">
                Introducing CaretTab, your New Tab dashboard. It's not just a
                browser extension; it's a statement - your tab, your rules! Explore
                the realm of infinite customization right at your fingertips and
                transform the way you experience browsing. Get it today for free!
              </p>
            `
              : ""
          }
          <div class="getItBar">
            <a href="#"
              ><img src="/img/chrome-store.svg" height="60" alt=""
            /></a>
            <a href="#"><img src="/img/edge-store.svg" height="60" alt="" /></a>
          </div>
        </div>
      </header>
    `;
  }
}

window.customElements.define("app-header", AppHeader);
