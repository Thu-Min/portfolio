"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const LAMBDA_URL =
  "https://v5npuk3oauvsyvdmlnopxqxlhm0ffpil.lambda-url.ap-southeast-2.on.aws/";

export default function ContactPage() {
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch(LAMBDA_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          message: formValues.message,
          organization: formValues.organization,
        }),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! Thank you for reaching out.",
        });
        setFormValues({
          name: "",
          email: "",
          organization: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-20 px-8 md:px-20">
      {/* 1. Header Title */}
      <div className="mb-20">
        <h1 className="text-[11vw] leading-[0.8] font-bold uppercase tracking-tighter">
          Let's start <br />
          <span className="text-neutral-600">a project.</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-20 md:gap-40 border-t border-neutral-800 pt-20">
        {/* 2. Left Column: Contact Details & Manifesto */}
        <div className="w-full md:w-1/3 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-8">
              Contact Details
            </h3>

            <div className="flex flex-col gap-8 text-xl font-light">
              <a
                href="mailto:minnt5637@gmail.com"
                className="hover:text-neutral-400 transition-colors"
              >
                minnt5637@gmail.com
              </a>
              <a
                href="tel:+66612946670"
                className="hover:text-neutral-400 transition-colors"
              >
                +66 61-294-6670
              </a>
              <p className="text-neutral-500">Bangkok, Thailand</p>
            </div>
          </div>

          <div className="mt-20 md:mt-40">
            <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-6">
              Socials
            </h3>
            <div className="flex flex-col gap-2 text-sm uppercase tracking-wider">
              <SocialLink href="https://github.com/thumin" label="Github" />
              <SocialLink
                href="https://linkedin.com/in/thumin"
                label="LinkedIn"
              />
              <SocialLink href="https://instagram.com" label="Instagram" />
            </div>
          </div>
        </div>

        {/* 3. Right Column: The Form */}
        <div className="w-full md:w-2/3">
          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            {status.type ? (
              <div
                className={`text-sm uppercase tracking-widest ${
                  status.type === "success" ? "text-white" : "text-red-400"
                }`}
              >
                {status.message}
              </div>
            ) : null}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <InputGroup
                label="What's your name?"
                placeholder="John Doe"
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />
              <InputGroup
                label="What's your email?"
                placeholder="john@example.com"
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>

            <InputGroup
              label="What's the name of your organization?"
              placeholder="Company Ltd."
              type="text"
              name="organization"
              value={formValues.organization}
              onChange={handleChange}
            />

            <InputGroup
              label="Tell me about your project"
              placeholder="I need a website that..."
              type="textarea"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />

            <div className="pt-10">
              <button
                type="submit"
                className="group relative px-10 py-5 bg-white text-black text-sm uppercase tracking-widest font-bold overflow-hidden disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isSubmitting}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

// -- Sub Components --

function InputGroup({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative group">
      <label
        className={`text-sm uppercase tracking-widest transition-colors duration-300 ${
          focused ? "text-white" : "text-neutral-500"
        }`}
      >
        {label}
      </label>

      <div className="relative mt-4">
        {type === "textarea" ? (
          <textarea
            rows={4}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-transparent border-b border-neutral-800 py-4 text-xl md:text-2xl text-white outline-none placeholder:text-neutral-800 resize-none focus:border-white transition-colors duration-500"
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-transparent border-b border-neutral-800 py-4 text-xl md:text-2xl text-white outline-none placeholder:text-neutral-800 focus:border-white transition-colors duration-500"
          />
        )}
      </div>
    </div>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="group flex items-center gap-3 hover:text-neutral-400 transition-colors"
    >
      <span className="w-2 h-2 bg-neutral-800 rounded-full group-hover:bg-white transition-colors duration-300" />
      {label}
    </a>
  );
}
