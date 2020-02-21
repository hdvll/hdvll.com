<template>
  <div id="app">
    <Landing
      @scrollToProjects="scrollToProjects"
      @scrollToAbout="scrollToAbout"
    />
    <Projects @scrollToHome="scrollToHome" />
    <About @scrollToHome="scrollToHome" />
    <Skills @scrollToHome="scrollToHome" />
  </div>
</template>

<script>
import Landing from '@/components/Landing';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';

export default {
  name: 'App',
  components: {
    Landing,
    Projects,
    About,
    Skills
  },
  methods: {
    scrollToProjects() {
      const el = this.$el.getElementsByClassName('projects')[0];

      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    scrollToAbout() {
      const el = this.$el.getElementsByClassName('about')[0];

      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    scrollToHome() {
      const el = this.$el.getElementsByClassName('landing')[0];

      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,700,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

body {
  background: #333;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;

  .section-header {
    color: #1c8aac;
    font-size: 65px;
    font-weight: 900;
  }
}

section {
  padding: 4rem 0;
}
</style>
