<template>
  <div id="app">
    <router-view/>
    <FooterGuide class='footerGuide'/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide'

export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
    background: #fcfcfc;
    position: relative;
  }
</style>
