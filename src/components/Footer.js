'use client'

import Link from "next/link";
import { PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";
import { PrismicRichText } from "./PrismicRichText";
import React, { useRef, useState } from 'react';

function SignUpForm({ settings}) {
    // 1. Create a reference to the input so we can fetch/clear it's value.
    const inputEl = useRef(null);
    // 2. Hold a message in state to handle the response from our API.
    const [message, setMessage] = useState('');
  
    const subscribe = async (e) => {
      e.preventDefault();
      
      console.log("Current Input:",inputEl.current.value)
      // 3. Send a request to our API with the user's email address.
      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email: inputEl.current.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      

      const { error } = await res.json();
  
      if (error) {
        // 4. If there was an error, update the message in state.
        setMessage(error);
  
        return;
      }
      console.log("Response:")
      console.log("Email:",res.body.current)
      console.log("Status:",res.status)
      // 5. Clear the input value and show a success message.
      inputEl.current.value = '';
      setMessage('Success! 🎉 You are now subscribed.');
    };
  
  return (
    <div className="px-4">
      <form
        onSubmit={subscribe}
        className="grid w-full max-w-xl grid-cols-1 gap-6"
      >
        {prismic.isFilled.richText(settings.data.newsletterDisclaimer) && (
          <div className="text-center font-serif tracking-tight text-slate-500">
            <PrismicRichText
              field={settings.data.newsletterDescription}
              components={{
                heading1: ({ children }) => (
                  <Heading as="h2" className="mb-4 last:mb-0">
                    {children}
                  </Heading>
                ),
                paragraph: ({ children }) => (
                  <p className="mb-4 italic last:mb-0">{children}</p>
                ),
              }}
            />
          </div>
        )}
        <div className="grid grid-cols-1 gap-2">
          <div className="relative">
            <label htmlFor="email-input">
              <span className="sr-only">Email address</span>
              <input
                id="email-input"
                name="email"
                type="email"
                ref={inputEl}
                placeholder="jane.doe@example.com"
                required={true}
                className="w-full rounded-none border-b border-slate-200 py-3 pl-3 pr-10 text-slate-800 placeholder-slate-400"
              />
            </label>
            <button
              type="submit"
              className="absolute bottom-0 right-0 top-0 flex items-center justify-center px-3 text-2xl text-slate-400"
            >
              <span className="sr-only">Submit</span>
              <span aria-hidden={true}>&rarr;</span>
            </button>
          </div>
          {prismic.isFilled.richText(settings.data.newsletterDisclaimer) && (
            <p className="text-center text-xs tracking-tight text-slate-500">
              <PrismicText field={settings.data.newsletterDisclaimer} />
            </p>
          )}
        </div>
        <div>
          <p className="text-center text-xs tracking-tight text-slate-500">
            {message}
          </p>
        </div>
      </form>
    </div>
  );
}

export function Footer({ withSignUpForm = true, settings }) {
  return (
    <Bounded as="footer">
      <div className="grid grid-cols-1 justify-items-center gap-24">
        <HorizontalDivider />
        {withSignUpForm && <SignUpForm settings={settings} />}
        <div className="mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight text-slate-500">
          Proudly published using{" "}
          <Link href="https://prismic.io" className="text-slate-700">
            Prismic
          </Link>
        </div>
      </div>
    </Bounded>
  );
}
