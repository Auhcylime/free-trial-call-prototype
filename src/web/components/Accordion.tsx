import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { forwardRef } from "react";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = forwardRef<
  HTMLDivElement,
  AccordionPrimitive.AccordionItemProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  AccordionPrimitive.AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-left font-medium transition-all [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = forwardRef<
  HTMLDivElement,
  AccordionPrimitive.AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0 text-[15px] text-gray-600 leading-relaxed", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";
