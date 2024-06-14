import ServicesCard from "./ServicesCard";

const optionsData = [
    {
        icon: "fi-rs-truck-check",
        title: "Reliable service"
    },
    {
        icon: "fi-rr-clock-three",
        title: "Quick response"
    },
    {
        icon: "fi-rr-life-ring",
        title: "Setup support"
    },
    {
        icon: "fi-rr-interrogation",
        title: "FAQs"
    },
]


export default function Services() {
    return (
      <div className="container flex flex-col justify-center md:w-[85%] mx-auto px-10 py-8 md:py-12 text-center gap-8">
          <h1 className=" text-2xl font-bold text-start">Services</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 text-left gap-4 md:gap-8">
          {optionsData.map((option, index) => (
            <ServicesCard key={index} icon={option.icon} title={option.title}  />
          ))}
        </div>
      </div>
    );
  }