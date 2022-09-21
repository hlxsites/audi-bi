export default async function decorate($block) {
  $block.children[0]?.classList.add('facts-title-container');

  const rows = [...$block.children].slice(1).filter((x) => !!x);

  rows.forEach((row) => {
    row.classList.add('facts-row');

    const rowItems = [...row.children];
    rowItems.forEach((rowItem) => {
      if (rowItem.children.length === 3) {
        const unit = rowItem.children[1];
        const unitText = unit.textContent;
        const $unitSpan = document.createElement('span');
        $unitSpan.textContent = ` ${unitText}`;
        $unitSpan.classList.add('unit');
        rowItem.children[0].append($unitSpan);
        rowItem.removeChild(rowItem.children[1]);
      }
    });
  });
}
