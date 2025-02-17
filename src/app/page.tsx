import { CheckIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="/" className="shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">
                <span className="sr-only">A Squared &mdash; Development</span>
                <Image className="h-16 w-auto" src="a2.svg" alt="A Squared - Development" width={0} height={0} />
              </a>
            </div>
            <div className="lg:flex lg:flex-1 lg:justify-end">
              <a href="mailto:team@asqrd.dev" title="team@asqrd.dev" className="rounded-full bg-pink-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Start a project</a>
            </div>
          </nav>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f6339a] to-[#fb64b6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">We craft cutting-edge technology solutions from the future.</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 px-5">Redefining what&apos;s possible, integrating seamlessly and <br className="hidden md:block" />offering a glimpse into tomorrow&apos;s world... today.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="#services" className="text-sm font-semibold leading-6 text-gray-900 px-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Our services <span aria-hidden="true">&rarr;</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-y border-solid">
        <div className="mx-auto max-w-7xl pt-24 pb-32 px-6 lg:px-8">
          <p className="text-center text-lg font-semibold text-gray-900">Agencies and startups <br className="sm:hidden" />we work with:</p>

          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-sm sm:grid-cols-4 sm:gap-x-10 md:mx-0 md:max-w-none md:grid-cols-4">
            <Image className="col-span-2 max-h-12 w-full object-contain md:col-span-1" src="doctify.svg" alt="Doctify" width={0} height={0} />
            <Image className="col-span-2 max-h-12 w-full object-contain md:col-span-1" src="akqa.svg" alt="AKQA" width={0} height={0} />
            <Image className="col-span-2 max-h-12 w-full object-contain md:col-span-1" src="mintago.svg" alt="Mintago" width={0} height={0} />
            <Image className="col-span-2 max-h-12 w-full object-contain md:col-span-1" src="perkbox.svg" alt="Perkbox" width={0} height={0} />
          </div>
        </div>
      </div>

      <div id="services" className="bg-white pt-24 pb-36 overflow-hidden">
        <div className="relative isolate mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">Here&apos;s what we offer</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 px-5">Our team has over a decade of experience building consumer <br className="hidden md:block" />and enterprise technology solutions and experiences.</p>
          </div>

          <div className="md:flex mt-10 md:px-16">
            <div className="flex-1 p-8 sm:p-10 md:mb-0 mb-10 rounded-3xl ring-1 ring-gray-200 mx-5 bg-white">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Full-stack Development</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">Tailor-made solutions designed to fit your unique business needs, offering unmatched efficiency.</p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-pink-600">Technologies:</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6" >
                <li className="flex gap-x-3"><CheckIcon className="h-6 w-5 flex-none text-pink-600" aria-hidden="true" /> Node.js</li>
                <li className="flex gap-x-3"><CheckIcon className="h-6 w-5 flex-none text-pink-600" aria-hidden="true" /> MERN / MEVN</li>
                <li className="flex gap-x-3"><CheckIcon className="h-6 w-5 flex-none text-pink-600" aria-hidden="true" /> Next.js</li>
                <li className="flex gap-x-3"><CheckIcon className="h-6 w-5 flex-none text-pink-600" aria-hidden="true" /> Remix</li>
              </ul>
            </div>
            <div className="flex-1 p-8 sm:p-10 md:mb-0 mb-10 rounded-3xl ring-1 ring-gray-200 mx-5 bg-white">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Hybrid App Development</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">Craft intuitive and feature-rich mobile applications that engage your audience, and foster brand loyalty.</p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-pink-600">Technologies:</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6" >
                <li className="flex gap-x-3"><CheckIcon className="h-6 w-5 flex-none text-pink-600" aria-hidden="true" /> Flutter</li>
                <li className="flex gap-x-3"><CheckIcon className="h-6 w-5 flex-none text-pink-600" aria-hidden="true" /> React Native</li>
                <li className="flex gap-x-3"><CheckIcon className="h-6 w-5 flex-none text-pink-600" aria-hidden="true" /> Ionic</li>
              </ul>
            </div>
          </div>

          <div className="md:flex mt-10 md:px-16">
            <div className="flex-1 p-8 sm:p-10 md:mb-0 mb-10 rounded-3xl ring-1 ring-gray-200 mx-5 bg-white">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Cloud Services</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">Unlock the power of scalability with our cutting-edge cloud solutions tailored to meet your business needs.</p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-pink-600">Technologies:</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6" >
                <li className="flex gap-x-3"><CheckIcon className="h-6 w-5 flex-none text-pink-600" aria-hidden="true" /> Salesforce</li>
                <li className="flex gap-x-3"><CheckIcon className="h-6 w-5 flex-none text-pink-600" aria-hidden="true" /> Google</li>
                <li className="flex gap-x-3"><CheckIcon className="h-6 w-5 flex-none text-pink-600" aria-hidden="true" /> AWS</li>
              </ul>
            </div>
            <div className="flex-1 p-8 sm:p-10 md:mb-0 mb-10 rounded-3xl ring-1 ring-gray-200 mx-5 bg-white">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Integration Services</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">Unleash your creativity and build dynamic web applications without writing a single line of code.</p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-pink-600">Technologies:</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6" >
                <li className="flex gap-x-3"><CheckIcon className="h-6 w-5 flex-none text-pink-600" aria-hidden="true" /> Tray.io</li>
                <li className="flex gap-x-3"><CheckIcon className="h-6 w-5 flex-none text-pink-600" aria-hidden="true" /> HubSpot</li>
                <li className="flex gap-x-3"><CheckIcon className="h-6 w-5 flex-none text-pink-600" aria-hidden="true" /> Shopify</li>
                <li className="flex gap-x-3"><CheckIcon className="h-6 w-5 flex-none text-pink-600" aria-hidden="true" /> Make</li>
              </ul>
            </div>
          </div>

          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#f6339a] to-[#fb64b6] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
