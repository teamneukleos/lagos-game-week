import Image from "next/image";

export default function ExperienceGallery() {
  return (
    <section className="w-full bg-black z-20 relative py-20">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-4">
          The Lagos Games Week Experience
        </h2>

        <p className="text-white/60 max-w-xl mx-auto text-base">
          A glimpse into the people, ideas, and moments that define Lagos Games
          Week. Celebrating creativity, collaboration, and culture across games
          and technology.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-1">

        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          <GalleryImage src="/images/gallery-1.png" height="h-32 md:h-42" />
          <GalleryImage src="/images/gallery-2.png" height="h-32 md:h-42" />
          <GalleryImage src="/images/gallery-3.png" height="h-52 md:h-90" />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          <GalleryImage src="/images/gallery-4.png" height="h-52 md:h-90" />
          <GalleryImage src="/images/gallery-5.png" height="h-32 md:h-42" />
          <GalleryImage src="/images/gallery-6.png" height="h-32 md:h-42" />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4">
          <GalleryImage src="/images/gallery-7.png" height="h-32 md:h-42" />
          <GalleryImage src="/images/gallery-8.png" height="h-32 md:h-42" />
          <GalleryImage src="/images/gallery-9.png" height="h-52 md:h-90" />
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-4">
          <GalleryImage src="/images/gallery-10.png" height="h-52 md:h-90" />
          <GalleryImage src="/images/gallery-11.png" height="h-32 md:h-42" />
          <GalleryImage src="/images/gallery-12.png" height="h-32 md:h-42" />
        </div>

      </div>
    </section>
  );
}

/* Reusable Image Component */

function GalleryImage({
  src,
  height,
}: {
  src: string;
  height: string;
}) {
  return (
    <div className={`relative overflow-hidden ${height}`}>
      <Image
        src={src}
        alt="Lagos Games Week gallery"
        fill
        className="object-cover transition-transform duration-500 ease-out hover:scale-105 rounded-sm"
      />
    </div>
  );
}