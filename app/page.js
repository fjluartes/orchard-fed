import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-48">
      {/* answer your body's needs */}
      <ol className="my-8 mx-40 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-lg font-medium text-white">
              Summer Lunch Menu by Mark Best
            </span>
            <span className="mt-2 text-zinc-500">
              AEG ambassador Mark Best&apos;s summer eats are guaranteed to help
              you make the most of the warmer weather and entertaining at home.
            </span>
            <span>
              <Link
                href="#"
                className="text-red-700 underline underline-offset-2"
              >
                READ MORE
              </Link>
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-lg font-medium text-white">
              A Traditional Christmas Eve, Mark Best Style
            </span>
            <span className="mt-2 text-zinc-500">
              One of Australia&apos;s best chefs and AEG ambassador, Mark Best,
              shares his favourite Christmas Eve menu which is sure to impress
              your guests.
            </span>
            <span>
              <Link
                href="#"
                className="text-red-700 underline underline-offset-2"
              >
                READ MORE
              </Link>
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-lg font-medium text-white">
              Taking Taste Further
            </span>
            <span className="mt-2 text-zinc-500">
              This exclusive cookbook gives you all the know-how you need.
              We&apos;ve designed it to make sure you get the most out of our
              products - and the best out of your food.
            </span>
            <span>
              <Link
                href="#"
                className="text-red-700 underline underline-offset-2"
              >
                READ MORE
              </Link>
            </span>
          </div>
        </li>
      </ol>

      {/* all the latest from aeg */}
      <h2 className="text-4xl font-medium text-white">
        ALL THE LATEST FROM AEG
      </h2>
      <ol className="my-8 mx-40 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
        <li className="md:flex-1">
          <div className="flex flex-col space-y-1 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <Image
              src="/assets/component-02/Image-01.jpg"
              alt="component-02-image-01"
              width={1440}
              height={1848}
              quality={100}
            />
            <span className="pt-8 text-lg font-medium text-white">
              Summer Lunch Menu by Mark Best
            </span>
            <span className="mt-2 text-zinc-500">
              AEG ambassador Mark Best&apos;s summer eats are guaranteed to help
              you make the most of the warmer weather and entertaining at home.
            </span>
            <span className="pt-8">
              <Link
                href="#"
                className="text-red-700 underline underline-offset-2"
              >
                READ MORE
              </Link>
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <Image
              src="/assets/component-02/Image-02.jpg"
              alt="component-02-image-02"
              width={1440}
              height={1848}
              quality={100}
            />
            <span className="pt-8 text-lg font-medium text-white">
              A Traditional Christmas Eve, Mark Best Style
            </span>
            <span className="mt-2 text-zinc-500">
              One of Australia&apos;s best chefs and AEG ambassador, Mark Best,
              shares his favourite Christmas Eve menu which is sure to impress
              your guests.
            </span>
            <span className="pt-8">
              <Link
                href="#"
                className="text-red-700 underline underline-offset-2"
              >
                READ MORE
              </Link>
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <Image
              src="/assets/component-02/Image-03.jpg"
              alt="component-02-image-03"
              width={1440}
              height={1848}
              quality={100}
            />
            <span className="pt-8 text-lg font-medium text-white">
              Taking Taste Further
            </span>
            <span className="mt-2 text-zinc-500">
              This exclusive cookbook gives you all the know-how you need.
              We&apos;ve designed it to make sure you get the most out of our
              products - and the best out of your food.
            </span>
            <span className="pt-8">
              <Link
                href="#"
                className="text-red-700 underline underline-offset-2"
              >
                READ MORE
              </Link>
            </span>
          </div>
        </li>
      </ol>
    </main>
  );
}
