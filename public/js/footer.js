class AppFooter extends HTMLElement {
  connectedCallback() {
    const currentYear = new Date().getFullYear()
    this.innerHTML = /*html*/ `
      <style>
      .footer {
        padding: 4rem 0 2rem;
        background: var(--b1);
        background: linear-gradient(to bottom, var(--b2) 20%, var(--b1) 120%);
        --mask:
          radial-gradient(2.33rem at 50% 3.20rem,#000 99%,#0000 101%) calc(50% - 4rem) 0/8rem 100%,
          radial-gradient(2.33rem at 50% -1.2rem,#0000 99%,#000 101%) 50% 2rem/8rem 100% repeat-x;
        -webkit-mask: var(--mask);
        mask: var(--mask);
      }
      .footerContainer {
        width: min(40rem, calc(100% - 3rem));
        margin: 0 auto;
        text-align: center;
      }
      .getItBarFooter {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
        margin: 1rem;
      }
      .getItBarFooter a {
        border-radius: .5em;
        box-shadow: 0 0 0px 0 transparent;
        transition: box-shadow .5s;
      }
      .getItBarFooter a:hover,
      .getItBarFooter a:focus-visible {
        outline: 0;
        box-shadow: 0 0 8px 0 var(--b4);
      }
      .footerLinks {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: .5rem 1rem;
        margin: .2rem 0;
      }
      .footerLinks a,
      .credit {
        font-size: 1.1rem;
        color: hsl(210deg 40% 10%);
        text-decoration: none;
      }
      .footerLinks a:hover,
      .credit:hover {
        text-decoration: underline;
      }
      .credit {
        font-size: .8em;
      }
      .footerLogo {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.3rem;
        font-size: 3rem;
        line-height: 1;
        font-weight: 400;
        color: black;
        margin: 2rem auto 1rem;
        @media screen and (max-width: 400px) {
          font-size: 14dvw;
        }
      }
      .footerLogo a {
        text-decoration: none;
      }
      .footerLogo span {
        color: black;
      }
      .footerLogo svg {
        flex: 0 0 auto;
        width: 1.5em;
        height: auto;
      }
      .footerLogo svg > * {
        fill: black;
      }
      .copyrightWrapper {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 1.5rem;
        color: hsl(210deg 40% 10%);
      }
      .copyright {
        text-align: left;
        font-size: .9rem;
        font-weight: 400;
        line-height: 1.1;
      }
      .bluecaret {
        display: inline-block;
      }
      .bluecaret img {
        width: auto;
        height: 2.4rem;
      }
      </style>

      <footer class="footer">
        <div class="footerContainer">
          <div class="getItBarFooter">
            <a href="https://chrome.google.com/webstore/detail/carettab-new-tab-clock-an/cojpndognjdcakkimaloeealehpkljna"
              ><img src="/img/chrome-store.svg" height="60" alt="Chrome Web store icon with the text: 'Available in the Chrome Web Store'"
            /></a>
            <a href="https://microsoftedge.microsoft.com/addons/detail/carettab-new-tab-clock-/bfpmncaohmjelebfobabccfjgmeolloe"><img src="/img/edge-store.svg" height="60" alt="Edge Web store icon with the text: 'Get it for Microsoft Edge'" /></a>
          </div>
          <h2 class="footerLogo">
            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" viewBox="0 0 500 369">
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
          </h2>
          <div class="footerLinks">
            <a href="/help">Help & Tips</a>
            <a href="/contact">Contact</a>
            <a href="https://github.com/bluecaret/carettab/discussions" target="_blank" rel="noreferrer">
              Discussions
            </a>
            <a href="https://github.com/bluecaret/carettab/" rel="noreferrer">Github</a>
            <a href="https://bluecaret.com/privacy">Privacy Policy</a>
            <a href="https://bluecaret.com/terms">Terms of Use</a>
          </div>
          <div class="copyrightWrapper">
            <a
              href="https://bluecaret.com"
              class="bluecaret"
              title="Designed and developed by BlueCaret"
            >
              <img src="/img/bluecaret-logo-alt.svg" alt="BlueCaret logo" />
            </a>
            <div class="copyright">
              Copyright © ${currentYear} BlueCaret.<br/>
              Designed and developed by BlueCaret<br/>
              <a href="https://www.freepik.com/author/vectorjuice" class="credit">Marketing graphics by vectorjuice on Freepik</a>
            </div>
          </div>
          
        </div>
      </footer>
    `
  }
}

window.customElements.define('app-footer', AppFooter)
