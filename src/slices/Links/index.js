/**
 * @typedef {import("@prismicio/client").Content.LinksSlice} LinksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LinksSlice>} LinksProps
 * @param {LinksProps}
 */
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const Links = ({ slice }) => {
  return (
    <section
      className="px-4 py-2 md:px-6 md:py-2 lg:py-1"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      
      <div className="mx-auto w-full max-w-3xl underline font-serif leading-relaxed md:text-xl md:leading-relaxed">
        <PrismicNextLink field={slice.primary.link}>
          <PrismicRichText field={slice.primary.linktext} />
        </PrismicNextLink>
      </div>

    </section>
  );
};

export default Links;
