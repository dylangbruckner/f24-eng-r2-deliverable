// Confirmation box for the delete button on the 'edit-species' page
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DeleteConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  speciesName: string;
}

export function DeleteConfirmationDialog({ isOpen, onClose, onConfirm, speciesName }: DeleteConfirmationDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete {speciesName}?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <div className="flex">
          <Button variant="destructive" onClick={onConfirm} className="ml-1 mr-1 flex-auto">
            Delete
          </Button>
          <DialogClose asChild>
            <Button variant="outline" onClick={onClose} className="ml-1 mr-1 flex-auto">
              Cancel
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
