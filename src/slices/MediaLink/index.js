/**
 * @typedef {import("@prismicio/client").Content.MediaLinkSlice} MediaLinkSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MediaLinkSlice>} MediaLinkProps
 * @param {MediaLinkProps}
 */
import { PrismicNextLink } from "@prismicio/next";
const MediaLink = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <PrismicNextLink field={slice.primary.media_link}>Link</PrismicNextLink>
    </section>
  );
};

export default MediaLink;
