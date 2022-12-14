// Important note about themes. Must have one section with .reader-container that contains color, background-color and rest of the styles must be scoped to .book-content
export const BookWhiteTheme = `
  :root .brtheme-white {
    --br-actionbar-bg-color: white;

    /* Drawer */
    --drawer-pagination-horizontal-rule: inset 0 -1px 0 rgb(0 0 0 / 13%);
    --drawer-pagination-border: 1px solid rgb(0 0 0 / 13%);
  }
  .reader-container {
    color: black !important;
    background-image: none !important;
    background-color: white !important;
  }
`;