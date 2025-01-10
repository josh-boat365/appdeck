<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import AppDeckLogo from '/public/staffride-logo.png'
import AyeyiTechLogo from '/public/AT-long-logo-dark.png'
</script>

<template>
  <main>

    <div class="flex w-full  min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto mt-10  w-[10rem]" :src="AppDeckLogo" alt="Your Company">
        <h2 class="mt-5 text-center text-2xl/9 font-bold tracking-tight text-blue-950">Sign in
          to your account</h2>
      </div>

      <div class="bg-white px-10 py-12 rounded-lg border shadow-md mt-5 md:mx-auto md:w-full md:max-w-md">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm/6 font-medium text-blue-950">Email address</label>
            <div class="mt-2">
              <input type="email" name="email" id="email" autocomplete="email" required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-blue-950 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium text-blue-950">Password</label>
            </div>
            <div class="mt-2">
              <input type="password" name="password" id="password" autocomplete="current-password" required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-blue-950 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
            </div>
          </div>

          <div class="flex items-center justify-between">
            <label for="" class="flex gap-3 text-sm text-blue-950 items-center py-1">
              <input type="checkbox" name="" id="">
              Remember me
            </label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>

          <div>
            <button type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
              in</button>
          </div>

          <div class="flex gap-2 items-center text-sm justify-center">
            <hr class="w-1/4 border-gray-300">
            Or Continue with
            <hr class="w-1/4 border-gray-300">
          </div>
          <div class="flex gap-2 items-center justify-center">
            <button type="button"
              class="flex w-2/3 items-center gap-2 justify-center py-3 rounded-md bg-white border border-gray-200 px-3 text-md font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <img width="25" height="25" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
              Google
            </button>
            <button type="button"
              class="flex w-2/3 items-center gap-2 justify-center py-3 rounded-md bg-white border border-gray-200 px-3 text-md font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <img width="25" height="25" src="https://img.icons8.com/fluency/48/microsoft-outlook-2019.png"
                alt="microsoft-outlook-2019" />
              Outlook
            </button>

          </div>
        </form>

      </div>
      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Not a member?
        <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
      </p>
      <div class="flex justify-center gap-2 items-center mt-3">
        <h6 class="text-sm font-bold">POWERED BY</h6>
        <img class=" w-[10rem]" :src="AyeyiTechLogo" alt="Your Company">
      </div>
    </div>
  </main>
</template>
