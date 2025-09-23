export default function LatestUpdates() {
  const cards = [
    {
      imageSrc: "/updates/card-1.png",

      href: "#",
    },
    {
      imageSrc: "/updates/card-2.png",

      href: "#",
    },
    {
      imageSrc: "/updates/card-3.png",

      href: "#",
    },
  ];

  return (
    <section
      className="w-full mt-20"
      style={{
        backgroundImage: "url('/updates/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-15">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#ACD2FF] text-center">
          Latest Updates
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => (
            <a
              key={idx}
              href={card.href}
              className="relative "
              style={{ minHeight: 440 }}
            >
              <img src={card.imageSrc} className="absolute inset-0" />
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            className="relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(137,189,255,0.8)]"
            style={{
              backgroundImage: "url('/updates/button.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minWidth: 260,
              minHeight: 64,
              borderRadius: 14,
            }}
            type="button"
            aria-label="VIEW ALL UPDATES"
          >
            VIEW ALL UPDATES
          </button>
        </div>
      </div>
    </section>
  );
}
