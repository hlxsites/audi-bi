import { readBlockConfig, decorateIcons } from '../../scripts/scripts.js';

/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`);
  const html = await resp.text();
  const footer = document.createElement('div');
  footer.innerHTML = html;
  await decorateIcons(footer);
  block.append(footer);

  block.querySelector('div > div > div').classList.add('footer-content-container');
  block.querySelector('div > div').classList.add('footer-container');

  // Back to top button
  const $backToTop = document.createElement('button');
  $backToTop.innerHTML = '<p>Back to top</p><svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 6l4.5-4.5L16 6m-4.5 18V1.5" fill="none" stroke="currentColor" stroke-miterlimit="10"></path></svg>';
  $backToTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
  })
  block.querySelector('div > div').prepend($backToTop);
}
