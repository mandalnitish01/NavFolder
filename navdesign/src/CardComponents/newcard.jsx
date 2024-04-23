import React from 'react'

function newcard() {
  return (
    <div
  class="block rounded-lg bg-green-300 text-center text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-red-400">
  <div
    class="border-b-2 border-black px-6 py-3 dark:border-black/10">
    Featured
  </div>
  <div class="p-6">
    <h5 class="mb-2 text-xl font-medium leading-tight ">
      Special title treatment
    </h5>
    <p class="mb-4 text-base ">
      With supporting text below as a natural lead-in to additional
      content.
    </p>
    <button
      type="button"
      class="border-2 border-green-700  bg-lime-950 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-primary-2 dark:shadow-green-700 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      data-twe-ripple-init
      data-twe-ripple-color="light">
      Button
    </button>
  </div>
  <div
    class="border-t-2 border-black px-6 py-3 text-surface/75 dark:border-black/10 dark:text-red-400">
    2 days ago
  </div>
</div>
  )
}

export default newcard