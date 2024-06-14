import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../components/ui/accordion";
  
  const accordionData = [
    {
      value: "item-1",
      question: "What is Codestam?",
      answer:
        "Codestam is a platform for buying and selling digital products. You can purchase items like e-books, music albums, video games, software, and more. If you're a creator, you can also use BuySell to sell your own digital products.",
    },
    {
      value: "item-2",
      question: "How do I sell digital products?",
      answer:
        "Yes, we specialize in providing tech support for startups. We understand the unique challenges startups face and can provide the support you need to grow.",
    },
    {
      value: "item-3",
      question: "How do I buy digital products?",
      answer:
        "Yes, we provide tech support for businesses of all sizes, including established businesses. We can help you maintain your IT infrastructure, develop new software, and more.",
    }
  ];
  
  
  
  export default function AccordionDemo() {
    return (
      <div className=" container flex flex-col md:w-[85%] mx-auto px-10 py-8 md:py-12 text-center gap-8">
        <div className="flex justify-center mt-8 ">
          <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
            {accordionData.map((item) => (
              <AccordionItem value={item.value} key={item.value}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className=" w-full flex gap-4 justify-center items-center">
            <input className=" px-4 py-2 rounded-lg" type="email" name="email" id="email" placeholder="Email Address" />
            <input className="px-4 py-2 bg-blue-500 rounded-lg" type="submit" value="Subscribe" />
        </div>
      </div>
    );
  }
  