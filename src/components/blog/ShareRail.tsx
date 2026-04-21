"use client";

// Visual-only stubs for share buttons. Click handlers are intentionally no-op
// until we wire real share endpoints + respect tracking preferences.
// TODO(blog-share): implement copy-link + open intent URLs for X/Pinterest.

export function ShareRail({ title }: { title: string }) {
  return (
    <aside
      className="hidden md:flex flex-col gap-3 sticky top-32 self-start"
      aria-label={`Share: ${title}`}
    >
      <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#325360]/70 writing-mode-vertical mb-2">
        Share
      </span>
      <ShareButton label="Copy link">
        <LinkIcon />
      </ShareButton>
      <ShareButton label="Share on X">
        <XIcon />
      </ShareButton>
      <ShareButton label="Pin on Pinterest">
        <PinterestIcon />
      </ShareButton>
    </aside>
  );
}

function ShareButton({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="w-10 h-10 rounded-full border border-[#325360]/25 flex items-center justify-center text-[#325360] hover:bg-[#263747] hover:text-[#FDF8F0] hover:border-[#263747] transition-colors"
    >
      {children}
    </button>
  );
}

function LinkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.93-.2-2.36.04-3.38.22-.92 1.4-5.84 1.4-5.84s-.36-.72-.36-1.78c0-1.66.97-2.9 2.17-2.9 1.02 0 1.51.77 1.51 1.69 0 1.03-.66 2.57-1 4-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.26 3.78-5.52 0-2.88-2.07-4.9-5.03-4.9-3.43 0-5.44 2.57-5.44 5.23 0 1.03.4 2.14.89 2.74.1.12.11.22.08.35l-.33 1.34c-.05.22-.17.27-.4.16-1.5-.7-2.43-2.88-2.43-4.64 0-3.78 2.75-7.25 7.92-7.25 4.16 0 7.4 2.96 7.4 6.92 0 4.13-2.6 7.46-6.21 7.46-1.22 0-2.37-.63-2.76-1.38l-.75 2.87c-.27 1.04-1 2.35-1.49 3.15A12 12 0 1 0 12 0z" />
    </svg>
  );
}
