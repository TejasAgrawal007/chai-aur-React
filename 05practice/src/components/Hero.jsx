import React from 'react'
import useState from 'react';

function Hero({ btn }) {




  return (
    <>

      <section class="text-gray-600 body-font z-30">
        <div
          class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
        >
          <div
            class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1
              class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            >
              <span class="text-blue-500">Build Perfect</span> Body
              <br class="hidden lg:inline-block" />Shape For Good And Healthy Life
            </h1>
            <p class="mb-8 leading-relaxed">
              FitnessClub is a bold and powerful free Bootstrap fitness website
              template for building a solid online presence. While you can employ
              FitnessClub for fitness facilities and gyms, personal trainers can
              greatly benefit from this web design, too.
            </p>
            <div class="flex justify-center">
              <button
                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
              <button
                class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Button
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded shadow-lg"
              alt="hero"
              src="https://source.unsplash.com/720x600/?Gym,fitness"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero