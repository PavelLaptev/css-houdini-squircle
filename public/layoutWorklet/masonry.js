registerLayout('masonry', class {
  static get inputProperties() {
    return [ '--padding', '--columns' ];
  }

  async intrinsicSizes() { /* TODO implement :) */ }
  async layout(children, edges, constraints, styleMap) {
    // fixedInlineSize 布局盒子的宽度，相当于widht
    const inlineSize = constraints.fixedInlineSize;

    // 获取自定义属性
    const padding = parseInt(styleMap.get('--padding').toString());
    const columnValue = styleMap.get('--columns').toString();

    // 计算出有几列
    let columns = parseInt(columnValue);
    if (columnValue === 'auto' || !columns) {
      columns = Math.ceil(inlineSize / 350); // MAGIC NUMBER \o/.
    }

    // 根据列数，计算出每列的宽度
    const childInlineSize = (inlineSize - ((columns + 1) * padding)) / columns;
    const childFragments = await Promise.all(children.map((child) => {
      return child.layoutNextFragment({fixedInlineSize: childInlineSize});
    }));

    let autoBlockSize = 0;
    const columnOffsets = Array(columns).fill(0);
    for (let childFragment of childFragments) {
      // Select the column with the least amount of stuff in it.
      /**
       * 找出高度最小的那列
       * val 是最小那列的高度
       * idx 是最小那列的列数
       */
      const min = columnOffsets.reduce((acc, val, idx) => {
        if (!acc || val < acc.val) {
          return {idx, val};
        }

        return acc;
      }, {val: +Infinity, idx: -1});

      /**
       * inlineOffset 计算每个子元素的横向偏移位置
       * blockOffset 计算每个子元素的纵向偏移位置
       * 相当于 position 的 left 和 top
       */
      childFragment.inlineOffset = padding + (childInlineSize + padding) * min.idx;
      childFragment.blockOffset = padding + min.val;

      /**
       * 更新数组中最小列的高度
       * blockOffset + blockSize
       * like top + height
       * 再更新最外层元素的高度
       */
      columnOffsets[min.idx] = childFragment.blockOffset + childFragment.blockSize;
      autoBlockSize = Math.max(autoBlockSize, columnOffsets[min.idx] + padding);
    }
    // 最终得到所有的子元素的布局的位置及父级元素的高度
    return {autoBlockSize, childFragments};
  }
});