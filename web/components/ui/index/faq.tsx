"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center py-8">
        <div className="hidden md:flex md:flex-col text-left w-1/2 justify-center">
          <h2 className="text-6xl font-bold">FAQ</h2>
          <span className="text-neutral-500">Frequently Asked Questions</span>
        </div>
        <div className="md:w-1/2 w-full">
          <Accordion type="single" defaultValue="item-1" collapsible className="rounded-md border ">
            <AccordionItem value="item-1" className="px-4">
              <AccordionTrigger>What is ChitChat?</AccordionTrigger>
              <AccordionContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam a fugiat
                blanditiis error possimus impedit nam assumenda tempore, totam id minus corrupti!
                Nisi voluptatem optio tempora sit cum quibusdam?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="px-4">
              <AccordionTrigger>How can I download ChitChat?</AccordionTrigger>
              <AccordionContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam a fugiat
                blanditiis error possimus impedit nam assumenda tempore, totam id minus corrupti!
                Nisi voluptatem optio tempora sit cum quibusdam?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="px-4">
              <AccordionTrigger>Do I need an account to use ChitChat?</AccordionTrigger>
              <AccordionContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam a fugiat
                blanditiis error possimus impedit nam assumenda tempore, totam id minus corrupti!
                Nisi voluptatem optio tempora sit cum quibusdam?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="px-4">
              <AccordionTrigger>Is it safe to use ChitChat?</AccordionTrigger>
              <AccordionContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam a fugiat
                blanditiis error possimus impedit nam assumenda tempore, totam id minus corrupti!
                Nisi voluptatem optio tempora sit cum quibusdam?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="px-4">
              <AccordionTrigger>Can I use ChitChat on multiple devices?</AccordionTrigger>
              <AccordionContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam a fugiat
                blanditiis error possimus impedit nam assumenda tempore, totam id minus corrupti!
                Nisi voluptatem optio tempora sit cum quibusdam?
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Faq;
