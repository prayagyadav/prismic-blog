/**
 * @typedef {import("@prismicio/client").Content.MediaLinkSlice} MediaLinkSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MediaLinkSlice>} MediaLinkProps
 * @param {MediaLinkProps}
 */
const MediaLink = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for media_link (variation: {slice.variation}) Slices
    </section>
  );
};

export default MediaLink;
