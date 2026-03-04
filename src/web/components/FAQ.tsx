import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";

const faqs = [
  {
    q: "Why do I need a card for a free call?",
    a: "We verify your card to prevent abuse and ensure one free call per household. You won't be charged anything — the call is 100% free. If you decide to subscribe later, you'll already be set up.",
  },
  {
    q: "What happens on the vet call?",
    a: "You'll connect with a licensed veterinarian via video or phone for up to 30 minutes. You can ask about symptoms, nutrition, behavior, medication questions — anything about your pet. The vet will provide a care summary after the call.",
  },
  {
    q: "What if I don't want to subscribe after?",
    a: "No worries at all! Your free call has zero obligation. If you don't subscribe within 7 days, your card is never charged. We'll send a reminder before the trial window closes so there are no surprises.",
  },
];

export function FAQ() {
  return (
    <div className="space-y-6">
      <h2 className="font-young-serif text-3xl text-center text-[#1a1a1a]">
        FAQ
      </h2>

      <Accordion type="single" collapsible className="space-y-1">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="rounded-[40px] border-8 border-white bg-white p-4 transition-shadow data-[state=open]:shadow-[0_0_0_3px_rgb(232,124,0)] data-[state=open]:bg-orange-500/5"
          >
            <AccordionTrigger className="text-[18px] font-medium text-[#333]">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-white rounded-3xl p-4 mt-1">
                {faq.a}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
