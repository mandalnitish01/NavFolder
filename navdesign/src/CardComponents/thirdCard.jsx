import React from 'react'

function thirdCard() {
  return (
    <div
  class="block max-w-[25rem] rounded-lg bg-black text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
  <div class="relative overflow-hidden bg-cover bg-no-repeat">
    <img
      class="rounded-t-lg"
      src="https://tecdn.b-cdn.net/img/new/standard/city/062.jpg"
      alt=""/>
  </div>
  <div class="p-6">
    <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
    <p class="text-base">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
  </div>
  <ul class="w-full">
    <li
      class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3  dark:border-white/10">
      Cras justo odio
    </li>

    <li
      class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3  dark:border-white/10">
      Dapibus ac facilisis in
    </li>

    <li
      class="w-full border-neutral-100 border-opacity-100 px-6 py-3  dark:border-white/10">
      Vestibulum at eros
    </li>

  </ul>
  <div class="p-6">
    <a
      type="button"
      class="pointer-events-auto me-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400">
      Card Link
    </a>
    <a
      type="button"
      class="pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400"    href="  https://tailwindcss.com/docs/text-align">
      go to
          </a>
       
  </div>
</div>
  )
}

export default thirdCard