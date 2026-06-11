import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import InvoiceBuilder from "@/components/invoice/InvoiceBuilder";

export default function InvoiceAdmin() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) navigate("/playground");
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[1100px] w-[95vw] max-h-[92vh] overflow-y-auto p-5 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-[15px] font-semibold tracking-tight">
            Invoice Builder
          </DialogTitle>
          <DialogDescription className="text-xs leading-5">
            Draft a professional invoice, preview it live, then download or share with your client.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <InvoiceBuilder />
        </div>
      </DialogContent>
    </Dialog>
  );
}
