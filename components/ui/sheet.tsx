import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col gap-4 border-l border-white/10 bg-surface px-6 py-6 text-on-surface shadow-2xl transition-transform data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <DialogPrimitive.Title className="text-lg font-semibold">Menu</DialogPrimitive.Title>
        <SheetClose className="rounded-full p-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
          <X className="h-5 w-5" />
        </SheetClose>
      </div>
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));

SheetContent.displayName = DialogPrimitive.Content.displayName;


