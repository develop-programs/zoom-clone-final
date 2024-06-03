import { ContactForm } from "@/components/custom/ContactForm";
import Navigation from "@/components/hero/Navigation";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="h-screen">
      <Navigation />
      <div className="grid w-full px-24 py-6 space-y-4">
        <div className="w-full h-[30rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14876.10436905128!2d81.6144673!3d21.2308139!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716932216911!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="grid grid-flow-row grid-cols-2">
          <div className="grid place-content-center">
            <Image
              src="/contact_me.png"
              alt="contact"
              width={500}
              height={500}
              className="w-[30rem]"
            />
          </div>
          <div className="space-y-4">
            <span className="text-3xl font-bold">Get in touch</span>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
