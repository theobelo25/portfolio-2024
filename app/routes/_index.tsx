import type { MetaFunction } from "@remix-run/node";

import PrimaryHero from "~/components/layouts/primaryHero";

export const meta: MetaFunction = () => {
  return [
    { title: "Theodore Belo - Portfolio" },
    { name: "description", content: "Welcome to the personal portfolio of Theodore Belo." },
  ];
};

export default function Index() {
  return (
    <main>
      <PrimaryHero />
    </main>
  );
}
