<template>
  
  <div class="grid place-items-center bottom-0 h-20 w-full">
    <div class="grid place-items-center lg:w-5/6 lg:border-l-2 lg:border-r-2 w-full absolute bg-white border-2 border-b-0 border-r-0 border-l-0 border-slate-200">

      <nav class="grid grid-cols-3 gap-7 place-content-center place-items-center items-center justify-center py-2 px-2">
        
        <NuxtLink to="/" >

          <BottomNavigationButton Title="index" />

        </NuxtLink>

        <NuxtLink to="/communication" >

          <BottomNavigationButton Title="communication" />
        
        </NuxtLink>

        <NuxtLink to="/field" >
          
            <BottomNavigationButton Title="field" />
          
        </NuxtLink>

      </nav>

    </div>
  </div>

</template>