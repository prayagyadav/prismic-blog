/**
 * @typedef {import("@prismicio/client").Content.LinksSlice} LinksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LinksSlice>} LinksProps
 * @param {LinksProps}
 */
import { PrismicNextLink } from "@prismicio/next";

const Links = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex justify-center items-center text-center underline"><PrismicNextLink field={slice.primary.link}>Link</PrismicNextLink></div>
    </section>
  );
};

export default Links;
