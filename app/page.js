import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:px-48 lg:pt-24 md:p-24">
      {/* answer your body's needs */}
      <ol className="my-8 lg:mx-40 xs:mx-12 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 py-2 pl-2 md:pb-0 md:pl-0 md:pt-4">
            <Image
              src="/assets/component-01/Image-01.jpg"
              alt="component-01-image-01"
              width={1440}
              height={1848}
              quality={100}
            />
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 py-2 pl-2 md:pb-0 md:pl-0 md:pt-4">
            <Image
              src="/assets/component-01/Image-02.jpg"
              alt="component-01-image-01"
              width={1440}
              height={1848}
              quality={100}
            />
          </div>
          <div className="flex flex-col space-y-2 py-2 pl-2 md:pb-0 md:pl-0 md:pt-4">
            <Image
              src="/assets/component-01/Image-03.jpg"
              alt="component-01-image-01"
              width={1440}
              height={1848}
              quality={100}
            />
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 py-2 pl-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="mb-8 pb-3 text-2xl font-2xl text-white border-b-2 border-white">
              ANSWER YOUR BODY&apos;S NEEDS
            </span>
            <span className="mt-2 text-lg font-light text-zinc-400">
              The way ingredients are sourced affects the way we nourish our
              bodies. Author Mark Schatzer belives our body naturally develops
              an appetite for the foods and nutrients it needs to be healthy,
              but that artificial flavourings are getting in the way. This can
              be reversed by focusing on high-quality ingredients and being
              mindful as your appetite guides you to consume according to your
              body&apos;s needs.
            </span>
          </div>
          <div className="flex flex-col space-y-2 py-2 pl-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="mt-8 text-md font-medium text-red-700">
              BE MINDFUL
            </span>
            <span className="mt-2 text-md font-medium text-white">
              Sourcing local or organic food is a good way to start being more
              mindful about what you&apos;re cooking and eating.
            </span>
          </div>
        </li>
      </ol>

      {/* all the latest from aeg */}
      <h2 className="mt-48 text-4xl font-medium text-white">
        ALL THE LATEST FROM AEG
      </h2>
      <ol className="my-8 lg:mx-40 xs:mx-12 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
        <li className="md:flex-1">
          <div className="flex flex-col space-y-1 py-2 pl-4 md:pb-0 md:pl-0 md:pt-4">
            <Image
              src="/assets/component-02/Image-01.jpg"
              alt="component-02-image-01"
              width={1440}
              height={1848}
              quality={100}
              className="border-b-4 border-red-700"
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
                className="text-white underline underline-offset-2 decoration-red-700"
              >
                READ MORE
              </Link>
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 py-2 pl-4 md:pb-0 md:pl-0 md:pt-4">
            <Image
              src="/assets/component-02/Image-02.jpg"
              alt="component-02-image-02"
              width={1440}
              height={1848}
              quality={100}
              className="border-b-4 border-red-700"
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
                className="text-white underline underline-offset-2 decoration-red-700"
              >
                READ MORE
              </Link>
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2  py-2 pl-4 md:pb-0 md:pl-0 md:pt-4">
            <Image
              src="/assets/component-02/Image-03.jpg"
              alt="component-02-image-03"
              width={1440}
              height={1848}
              quality={100}
              className="border-b-4 border-red-700"
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
                className="text-white underline underline-offset-2 decoration-red-700"
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
