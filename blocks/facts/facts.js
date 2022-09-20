export default async function decorate($block) {
  $block.children[0]?.classList.add('facts-title-container');
  $block.children[1]?.classList.add('facts-row');
  $block.children[2]?.classList.add('facts-row');
}
