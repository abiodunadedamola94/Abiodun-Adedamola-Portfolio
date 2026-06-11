import InvoiceBuilder from "@/components/invoice/InvoiceBuilder";

export default function InvoiceAdmin() {
  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[1100px] mx-auto">
        <section>
          <h2 className="mb-1 text-[15px] font-semibold tracking-tight text-foreground">
            Invoice Builder
          </h2>
          <p className="mb-6 text-xs leading-5 text-muted-foreground">
            Draft a professional invoice, preview it live, then download or share with your client.
          </p>
          <InvoiceBuilder />
        </section>
      </div>
    </div>
  );
}
