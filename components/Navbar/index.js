import Image from "next/future/image";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useUserContext } from "../../context/UserContext";

export default function NavBar() {
  const { data: session, status } = useSession();
  const { userData } = useUserContext();
// this is some global data from MongoDB
  console.log("global data",userData);

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
            <p class="mr-6  font-medium  dark:text-white hover:underline">
              {status === "authenticated"
                ? `Signed in as ${session?.user?.email}`
                : "Not Signed In"}
            </p>
            {status === "authenticated" ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
                class=" font-bold  text-blue-600 dark:text-blue-500 hover:underline"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  signIn("google", { callbackUrl: "/" });
                }}
                class=" font-bold  text-blue-600 dark:text-blue-500 hover:underline"
              >
                Sign In
              </button>
            )}

            <span onClick={signOut} className="flex relative h-10 w-10 ">
              {status === "authenticated" ? (
                <Image
                  class=" rounded-full object-cover "
                  src={session?.user?.image}
                  alt="Vercel Logo"
                  fill
                  sizes="100vw"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-10 w-10"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
