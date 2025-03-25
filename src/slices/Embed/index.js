/**
 * @typedef {import("@prismicio/client").Content.NewSliceSlice} NewSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewSliceSlice>} NewSliceProps
 * @param {NewSliceProps}
 */
const NewSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div dangerouslySetInnerHTML={{ __html: slice.primary.embed.html }} />
    </section>
  );
};

export default NewSlice;
