"use client";

import { Toaster } from "sonner";

export function ToasterHost() {
  return (
    <Toaster
      position="bottom-right"
      theme="light"
      richColors
      closeButton
      toastOptions={{
        className:
          "!bg-[#FDF8F0] !text-[#263747] !border !border-[#263747]/15 !rounded-2xl",
      }}
    />
  );
}
