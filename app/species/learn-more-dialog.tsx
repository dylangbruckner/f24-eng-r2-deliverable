import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Database } from "@/lib/schema";
import { useState } from "react";
type Species = Database["public"]["Tables"]["species"]["Row"];

export default function LearnMoreDialog({ species }: { species: Species }) {
  // Control open/closed state of the dialog
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mt-3 w-full">Learn More</Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            <h3 className="mt-3 text-2xl font-semibold">{species.scientific_name}</h3>
          </DialogTitle>
          <DialogDescription>
            <h4 className="text-lg font-light italic">{species.common_name}</h4>
          </DialogDescription>
        </DialogHeader>
        <p>{species.description}</p>
        <p>Population: {species.total_population ?? "Unkown"}</p>
        <p>Kingdom: {species.kingdom}</p>
        <DialogClose asChild>
          <Button type="button" className="ml-1 mr-1 flex-auto" variant="secondary">
            Exit
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
