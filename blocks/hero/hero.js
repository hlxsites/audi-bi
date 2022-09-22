export default async function decorate($block) {
  const $allContent = $block.querySelector('.hero > div > div');

  const $contentWithoutImage = [...$allContent.children].slice(1);

  const $contentWrapper = document.createElement('div');
  $contentWithoutImage.forEach(($item) => {
    $contentWrapper.append($item.cloneNode(true));
    $item.remove();
  });

  $contentWrapper.classList.add('hero-content-wrapper');
  $allContent.append($contentWrapper);
}
