"use client";

import { useEffect, useState, startTransition } from "react";
import Link from "next/link";
import {
  Package,
  MapPin,
  Repeat,
  Settings,
  LogOut,
  LogIn,
  ExternalLink,
} from "lucide-react";
import { bundlesBySlug } from "@/lib/bundles";
import { formatMoney, type CartLine, type CartSummary } from "@/lib/cart";

interface StoredOrder {
  id: string;
  createdAt: string;
  email: string;
  shipping: {
    firstName: string;
    lastName: string;
    city: string;
    state: string;
    postalCode: string;
  };
  lines: CartLine[];
  summary: CartSummary;
  mocked?: boolean;
}

type Tab = "overview" | "orders" | "addresses" | "subscriptions" | "preferences";

const NAV: Array<{ key: Tab; label: string; icon: typeof Package; href: string }> = [
  { key: "overview", label: "Overview", icon: Settings, href: "/account" },
  { key: "orders", label: "Orders", icon: Package, href: "/account/orders" },
  { key: "addresses", label: "Addresses", icon: MapPin, href: "/account" },
  { key: "subscriptions", label: "Subscriptions", icon: Repeat, href: "/account" },
  { key: "preferences", label: "Preferences", icon: Settings, href: "/account" },
];

export function AccountView({ tab }: { tab: Tab }) {
  const [orders, setOrders] = useState<StoredOrder[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let parsed: StoredOrder[] = [];
    try {
      const raw = localStorage.getItem("seaduced-orders") ?? "[]";
      parsed = JSON.parse(raw) as StoredOrder[];
    } catch {
      parsed = [];
    }
    startTransition(() => {
      setOrders(parsed);
      setLoaded(true);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="mb-8">
        <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#325360]/70">
          Account
        </span>
        <h1 className="mt-2 text-3xl md:text-5xl font-black text-[#263747] tracking-tight">
          Your ritual archive.
        </h1>
      </div>

      <div className="grid lg:grid-cols-[240px_1fr] gap-8">
        <aside className="h-fit bg-white rounded-2xl p-4 border border-[#263747]/10">
          <nav className="space-y-1">
            {NAV.map((n) => {
              const active = n.key === tab;
              const Icon = n.icon;
              return (
                <Link
                  key={n.key}
                  href={n.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? "bg-[#263747] text-white"
                      : "text-[#263747]/70 hover:bg-[#263747]/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-[#263747]/10">
            {/* TODO(auth): wire NextAuth or Clerk. Until then, "Sign out" just clears local order cache. */}
            <button
              type="button"
              onClick={() => {
                if (typeof window === "undefined") return;
                Object.keys(localStorage)
                  .filter((k) => k.startsWith("seaduced-order"))
                  .forEach((k) => localStorage.removeItem(k));
                localStorage.removeItem("seaduced-orders");
                setOrders([]);
              }}
              className="w-full inline-flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#263747]/60 hover:bg-red-50 hover:text-red-700 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </aside>

        <section className="space-y-6">
          {tab === "overview" ? <OverviewPanel orders={orders} loaded={loaded} /> : null}
          {tab === "orders" ? <OrdersPanel orders={orders} loaded={loaded} /> : null}
        </section>
      </div>
    </div>
  );
}

function OverviewPanel({
  orders,
  loaded,
}: {
  orders: StoredOrder[];
  loaded: boolean;
}) {
  return (
    <>
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#263747]/10">
        <h2 className="font-black text-xl text-[#263747]">Welcome back</h2>
        <p className="mt-2 text-sm text-[#263747]/70">
          You&rsquo;re viewing the account in <span className="font-bold">guest mode</span>.
          {" "}A full authenticated experience (saved addresses, subscriptions,
          order downloads) unlocks once we wire up auth.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {/* TODO(auth): wire NextAuth email magic-link or Clerk. Link below is a stub. */}
          <button
            type="button"
            disabled
            title="Auth not yet configured"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#263747] text-white font-bold text-xs opacity-60 cursor-not-allowed"
          >
            <LogIn className="w-3.5 h-3.5" />
            Sign in
          </button>
          <a
            href="https://billing.stripe.com/p/login/test"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#263747]/20 text-[#263747] font-bold text-xs hover:bg-[#263747]/5 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Stripe customer portal
          </a>
        </div>
      </div>

      <OrdersPanel orders={orders} loaded={loaded} compact />
    </>
  );
}

function OrdersPanel({
  orders,
  loaded,
  compact = false,
}: {
  orders: StoredOrder[];
  loaded: boolean;
  compact?: boolean;
}) {
  if (!loaded) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-[#263747]/10 text-center text-[#263747]/50 font-mono text-xs tracking-widest uppercase">
        Loading orders...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#263747]/10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-black text-xl text-[#263747]">
          {compact ? "Recent orders" : "Your orders"}
        </h2>
        {compact ? (
          <Link
            href="/account/orders"
            className="font-mono text-[10px] tracking-widest uppercase text-[#325360] hover:text-[#AD9952]"
          >
            View all &rarr;
          </Link>
        ) : null}
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-[#263747]/70">No orders yet.</p>
          <Link
            href="/shop"
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#AD9952] text-white font-bold text-xs"
          >
            Start your ritual
          </Link>
        </div>
      ) : (
        <ul className="divide-y divide-[#263747]/10">
          {orders.slice(0, compact ? 3 : orders.length).map((order) => {
            const date = new Date(order.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });
            const items = order.lines.reduce((s, l) => s + l.qty, 0);
            return (
              <li key={order.id}>
                <Link
                  href={`/order/${order.id}`}
                  className="grid grid-cols-[1fr_auto] md:grid-cols-[1.4fr_1fr_0.8fr_auto] gap-3 py-4 items-center hover:bg-[#263747]/5 rounded-xl -mx-2 px-2 transition-colors"
                >
                  <div>
                    <p className="font-bold text-sm text-[#263747]">
                      Order #{order.id.slice(-8).toUpperCase()}
                    </p>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-[#263747]/50">
                      {date} &bull; {items} item{items > 1 ? "s" : ""}
                    </p>
                  </div>
                  <p className="hidden md:block text-sm text-[#263747]/70 truncate">
                    {order.lines
                      .map((l) => bundlesBySlug[l.slug]?.name ?? l.slug)
                      .join(", ")}
                  </p>
                  <span className="hidden md:inline-block px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-mono text-[9px] tracking-widest uppercase w-fit">
                    {order.mocked ? "Test" : "Processing"}
                  </span>
                  <span className="font-black text-sm text-[#263747] text-right">
                    {formatMoney(order.summary.totalCents)}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
