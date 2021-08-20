<template>
  <div id="app">
    <Signin/>
  </div>
</template>

<script>
import Signin from './components/Signin.vue'

export default {
  name: 'App',
  components: {
    Signin
  }
}
</script>

<style>
#app {
  font-family: 'SF Pro Display';
  font-weight: 400;
}
@font-face {
    font-family: 'SF Pro Display';
    src: url('./assets/fonts/SFProDisplay-Medium.woff2') format('woff2'),
        url('./assets/fonts/SFProDisplay-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SF Pro Display';
    src: url('./assets/fonts/SFProDisplay-Regular.woff2') format('woff2'),
        url('./assets/fonts/SFProDisplay-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SF Pro Display';
    src: url('./assets/fonts/SFProDisplay-Semibold.woff2') format('woff2'),
        url('./assets/fonts/SFProDisplay-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'SF Pro Display';
    src: url('./assets/fonts/SFProDisplay-Bold.woff2') format('woff2'),
        url('./assets/fonts/SFProDisplay-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}


</style>
