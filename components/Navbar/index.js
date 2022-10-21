import Image from "next/future/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link href="/">
            <a class="flex items-center">
              <Image
                class="mr-3 h-6 sm:h-9"
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Happy Hacking
              </span>
            </a>
          </Link>
          <div class="flex items-center space-x-10 text-lg">
            <a
              href="tel:5541251234"
              class="mr-6  font-medium text-gray-500 dark:text-white hover:underline"
            >
              Signed in as {"xyz"}
            </a>
            <a
              href="#"
              class=" font-bold  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Sign In
            </a>
            <span className="flex relative h-10 w-10 ">
              <Image
                class=" rounded-full object-cover"
                src="/vercel.svg"
                alt="Vercel Logo"
                fill
                sizes="100vw"
              />
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
