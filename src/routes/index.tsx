import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditya Anand — Backend Engineer & Software Developer" },
      {
        name: "description",
        content:
          "Backend-focused Computer Science engineer building scalable systems, secure APIs, and high-performance applications.",
      },
      { property: "og:title", content: "Aditya Anand — Backend Engineer" },
      {
        property: "og:description",
        content:
          "Distributed systems, API design, and modern web. Selected projects, experience, and contact.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});
