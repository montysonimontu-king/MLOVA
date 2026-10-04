const galleryItems = [
  {
    src: 'https://images.pexels.com/photos/14164734/pexels-photo-14164734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Shiba Inu close-up',
    label: 'Such Focus',
    span: 'lg:col-span-2',
  },
 
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-banana-600">
            The Pack Gallery
          </p>
          <h2 className="text-4xl font-bold text-cocoa-900 sm:text-5xl">
            Much Cute. <span className="text-banana-500">Such Wow.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cocoa-600">
            A peek into the Banadoge universe — where dogs and bananas live in perfect harmony.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.alt}
              className={`group relative overflow-hidden rounded-3xl border-4 border-cocoa-800 shadow-lg ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 translate-y-full p-6 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-2xl font-bold text-banana-200 font-display">{item.label}</p>
                <p className="text-sm text-banana-100">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
