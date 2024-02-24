"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      { pending ? (
        <Button className="w-fit" disabled>
          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button type="submit">
          Save Now
        </Button>
      ) }
    </>
  )
}

export function StripeSubscriptionCreationButton () {
  const { pending } = useFormStatus();

  return (
      <>
        { pending ? (
            <Button className="w-full" disabled>
              <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              Please wait
            </Button>
        ) : (
            <Button className="w-full">
              Create Subscription
            </Button>
        ) }
      </>
  )
}