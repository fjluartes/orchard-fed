import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      {/* answer your body's needs */}
      <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 1</span>
            <span className="text-xl font-semibold">
              Sign up for an account
            </span>
            <span className="mt-2 text-zinc-700">
              Either starting out with a free plan or choose our{" "}
              <Link
                href="/pricing"
                className="text-blue-700 underline underline-offset-2"
              >
                pro plan
              </Link>
              .
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 2</span>
            <span className="text-xl font-semibold">Upload your PDF file</span>
            <span className="mt-2 text-zinc-700">
              We&apos;ll process your file and make it ready for you to chat
              with.
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 3</span>
            <span className="text-xl font-semibold">
              Start asking questions
            </span>
            <span className="mt-2 text-zinc-700">
              It&apos;s that simple. Try out Quill today - it really takes less
              than a minute.
            </span>
          </div>
        </li>
      </ol>

      {/* all the latest from aeg */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <div className="group rounded-lg border border-transparent px-2 text-white">
          <h2 className={`mb-3 text-xl font-semibold`}>
            Summer Lunch Menu by Mark Best
          </h2>
          <p className={`mb-3 max-w text-md opacity-50 justify-items-center`}>
            AEG ambassador Mark Best&apos;s summer eats are guaranteed to help
            you make the most of the warmer weather and entertaining at home.
          </p>
          <a
            href="#"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            READ MORE
          </a>
        </div>

        <div className="group rounded-lg border border-transparent px-2 text-white">
          <h2 className={`mb-3 text-xl font-semibold`}>
            A Traditional Christmas Eve, Mark Best Style
          </h2>
          <p className={`mb-3 max-w text-md opacity-50 justify-items-center`}>
            One of Australia&apos;s best chefs and AEG ambassador, Mark Best,
            shares his favourite Christmas Eve menu which is sure to impress
            your guests
          </p>
          <a
            href="#"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            READ MORE
          </a>
        </div>

        <div className="group rounded-lg border border-transparent px-2 text-white">
          <h2 className={`mb-3 text-xl font-semibold`}>Taking Taste Further</h2>
          <p className={`mb-3 max-w text-md opacity-50 justify-items-center`}>
            This exclusive cookbook gives you all the know-how you need.
            We&apos;ve designed it to make sure you get the most out of our
            products - and the best out of your food.
          </p>
          <a
            href="#"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            READ MORE
          </a>
        </div>
      </div>
    </main>
  );
}
