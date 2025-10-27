type Partner = {
  image: string;
};

const partners_1: Partner[] = [
  {
    image: "/powered/1.png",
  },
  {
    image: "/powered/2.png",
  },
  {
    image: "/powered/3.png",
  },
  {
    image: "/powered/4.png",
  },
  {
    image: "/powered/5.png",
  },

  {
    image: "/powered/7.png",
  },
  {
    image: "/powered/8.png",
  },
  {
    image: "/powered/9.png",
  },
  {
    image: "/powered/10.png",
  },
  {
    image: "/powered/11.png",
  },
  {
    image: "/powered/12.png",
  },
];

const partners_2: Partner[] = [
  {
    image: "/powered/12.png",
  },
  {
    image: "/powered/11.png",
  },
  {
    image: "/powered/10.png",
  },
  {
    image: "/powered/9.png",
  },
  {
    image: "/powered/8.png",
  },
  {
    image: "/powered/7.png",
  },

  {
    image: "/powered/5.png",
  },
  {
    image: "/powered/4.png",
  },
  {
    image: "/powered/3.png",
  },
  {
    image: "/powered/2.png",
  },
  {
    image: "/powered/1.png",
  },
];

const whyItems = [
  {
    image: "/why/1.png",
  },
  {
    image: "/why/2.png",
  },
  {
    image: "/why/3.png",
  },
];

const whyItemsMob = [
  {
    image: "/why/mob-1.png",
  },
  {
    image: "/why/mob-2.png",
  },
  {
    image: "/why/mob-3.png",
  },
];

const PartnerCard = ({ partner }: { partner: Partner }) => (
  <div className="group relative min-w-[150px] lg:min-w-[250px] mx-3">
    <img src={partner.image} alt="Partner logo" className=" object-cover" />
  </div>
);

export default function PoweredAndWhy() {
  const duplicatedPartners_1 = [...partners_1, ...partners_1, ...partners_1];
  const duplicatedPartners_2 = [...partners_2, ...partners_2, ...partners_2];

  return (
    <section className="relative w-full overflow-hidden bg-[url('/powered/star-bg.png')] bg-top bg-cover bg-no-repeat">
      <style>{`
        @keyframes slide-left-to-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes slide-right-to-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .slide-left-to-right {
          animation: slide-left-to-right 10s linear infinite;
        }
        .slide-right-to-left {
          animation: slide-right-to-left 10s linear infinite;
        }
      `}</style>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <header className="text-center">
          <h2 className="text-[40px] sm:text-5xl font-medium font-sans tracking-tight text-[#ACD2FF]">
            Powered By
          </h2>
        </header>
      </div>
      <div className=" w-full overflow-hidden">
        <div className="flex slide-left-to-right">
          {duplicatedPartners_1.map((partner, index) => (
            <PartnerCard key={`ltr-${index}`} partner={partner} />
          ))}
        </div>
      </div>
      <div className="mt-6 w-full overflow-hidden">
        <div className="flex slide-right-to-left">
          {duplicatedPartners_2.map((partner, index) => (
            <PartnerCard key={`rtl-${index}`} partner={partner} />
          ))}
        </div>
      </div>
      <div className="mt-16 sm:mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className=" hidden lg:block text-5xl tracking-tight">
          <div className="text-white/80">WHY </div>
          <div className="text-[#ACD2FF] font-bold">ELVRON?</div>
        </h3>

        <h3 className="lg:hidden text-4xl text-center tracking-tight">
          <div className="flex justify-center">
            <div className="text-white/80 pr-2">WHY</div>
            <div className="text-[#ACD2FF] font-bold">ELVRON?</div>
          </div>
        </h3>

        <div className="hidden lg:block mt-8 grid-cols-1 gap-6">
          {whyItems.map((item, idx) => (
            <div key={idx} className="flex my-8 items-center justify-center">
              <img src={item.image} alt="Why Elvron" />
            </div>
          ))}
        </div>
        <div className="block lg:hidden mt-8 grid-cols-1 gap-6">
          {whyItemsMob.map((item, idx) => (
            <div key={idx} className="flex items-center my-6 justify-center">
              <img src={item.image} alt="Why Elvron" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
