/**
 * @typedef {import("@prismicio/client").Content.HyperlinkSlice} HyperlinkSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HyperlinkSlice>} HyperlinkProps
 * @param {HyperlinkProps}
 */
const Hyperlink = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for hyperlink (variation: {slice.variation}) Slices
    </section>
  );
};

export default Hyperlink;
