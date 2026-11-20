import type { Metadata } from "next";
import JunkRemovalPage from "@/components/sections/JunkRemovalPage";

export const metadata: Metadata = {
  title: "Junk Removal in Connecticut | Dans Cans",
  description:
    "Need help clearing out junk in Connecticut? Dans Cans offers junk removal assistance for home cleanouts, bulky items, move-outs, and project debris. Call for a quote.",
  alternates: { canonical: "/junk-removal/" },
  openGraph: {
    title: "Junk Removal in Connecticut | Dans Cans",
    description:
      "Need help with a cleanup? Ask Dans Cans about junk removal assistance and request a quote for your Connecticut project.",
    url: "/junk-removal/",
  },
  twitter: {
    title: "Junk Removal in Connecticut | Dans Cans",
    description: "Call Dans Cans for junk removal assistance and a cleanup quote in Connecticut.",
  },
};

export default function Page() {
  return <JunkRemovalPage />;
}
