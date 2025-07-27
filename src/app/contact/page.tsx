

import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Soccer Bank Sports Management",
  description:
    "Reach out to Soccer Bank Sports Management — FIFA licensed, global football representation.",
};


export default function ContactPage() {
  return (<ContactClient />)
}

