<template>
  <div class="landing">
    <div class="container">
      <nav :class="mobileMenu ? 'nav open' : 'nav'">
        <div class="logo"></div>
        <div class="hamburger">
          <svg
            width="27"
            height="25"
            viewBox="0 0 27 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="mobileMenu = true"
            v-if="!mobileMenu"
          >
            <line
              y1="22.5"
              x2="26.6667"
              y2="22.5"
              stroke="white"
              stroke-width="3"
            />
            <line
              y1="12.5"
              x2="26.6667"
              y2="12.5"
              stroke="white"
              stroke-width="3"
            />
            <line
              y1="2.5"
              x2="26.6667"
              y2="2.5"
              stroke="white"
              stroke-width="3"
            />
          </svg>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="mobileMenu = false"
            v-else
          >
            <path d="M2 2L22 22M22 2L2 22" stroke="white" stroke-width="3" />
          </svg>
        </div>
        <ul class="nav__list">
          <li class="nav__list-item" @click="goToProjects">projects</li>
          <li class="nav__list-item" @click="goToAbout">about me</li>
        </ul>
      </nav>
      <div class="hero">
        <h1>Magnus Hedvall</h1>
        <span>Front-end developer,</span>
        <span>metalhead, nerd and</span>
        <span>passionate about UI/UX design</span>
        <div class="cta">
          <button class="cta__projects" @click="goToProjects">
            Projects
          </button>
          <button class="cta__about" @click="goToAbout">About Me</button>
        </div>
      </div>
    </div>
    <div class="arrow">
      <svg
        width="60"
        height="25"
        viewBox="0 0 104 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="down-arrow"
        @click="goToProjects"
      >
        <path
          d="M2 2L49.0921 44.0045C51.0013 45.7074 53.888 45.6945 55.7818 43.9745L102 2"
          stroke="white"
          stroke-width="5"
        />
      </svg>
    </div>
    <div class="polygon-left"></div>
    <div class="polygon-right"></div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      mobileMenu: false
    };
  },
  methods: {
    goToProjects() {
      if (this.mobileMenu) {
        this.mobileMenu = false;
      }
      this.$emit('scrollToProjects');
    },
    goToAbout() {
      if (this.mobileMenu) {
        this.mobileMenu = false;
      }
      this.$emit('scrollToAbout');
    }
  }
};
</script>

<style lang="scss" scoped>
.landing {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url('~@/assets/landing.jpg') no-repeat center center;
  background-size: cover;
}

.nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  padding: 1rem 0;

  .hamburger {
    display: none;
  }

  .logo {
    background-image: url('~@/assets/logo.svg');
    width: 151px;
    height: 40px;
  }

  &__list {
    list-style-type: none;
    display: flex;
  }

  &__list-item {
    margin-right: 2rem;
    font-size: 25px;
    position: relative;
    overflow: hidden;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;

    &::after {
      content: '';
      transform: translateX(-100%);
      display: hidden;
      border-bottom: 2px solid darken(#1c8aac, 20%);
      transition: transform 200ms ease-in;
    }

    &:hover::after {
      transform: translateX(0);
      transform-origin: left;
      display: block;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
}

.hero {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  margin: 0 auto;
  text-align: center;
  color: #fff;

  h1 {
    font-size: 65px;
    font-weight: 900;
    margin-bottom: 1.5rem;
  }

  span {
    display: block;
    margin: 0 auto;
    font-size: 35px;
    font-weight: 200;
  }

  .cta {
    margin-top: 3rem;

    button {
      margin-right: 2rem;
      padding: 1rem 3.5rem;
      color: #fff;
      font-family: inherit;
      font-size: 20px;
      border-radius: 50px;
      border: none;
      cursor: pointer;
      transform: scale(1);
      transition: transform 200ms ease-in-out;

      &:last-of-type {
        margin-right: 0;
      }
    }

    &__projects {
      background: linear-gradient(to right, #1c8aac, #9430c3) no-repeat;
    }

    &__about {
      background: transparent;
      box-shadow: 0px 0px 0px 2px #1c8aac inset;
    }

    &__projects:hover,
    &__about:hover {
      transform: scale(1.2);
    }
  }
}

.arrow {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  color: #fff;
  font-size: 3.5rem;

  svg {
    cursor: pointer;
  }
}

.polygon-left,
.polygon-right {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.polygon-left {
  top: 0;
  left: 0;
  background: linear-gradient(to right, #9430c3 0%, #1c8aac 20%);
  clip-path: polygon(0 0, 20% 50%, 10% 100%, 0% 100%);
}

.polygon-right {
  top: 0;
  right: 0;
  background: linear-gradient(to right, #1c8aac 65%, #9430c3 100%);
  clip-path: polygon(50% 0, 100% 0, 100% 70%);
}

@media screen and (max-width: 768px) {
  .hero {
    width: 90%;
    h1 {
      font-size: 40px;
    }

    span {
      font-size: 20px;
      width: 100%;
    }

    .cta {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;

      button {
        width: 70%;
        font-size: 1rem;
        margin-right: 0;
        margin-bottom: 1rem;
        padding: 0.7rem 1rem;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }

  .nav {
    position: relative;
    align-items: center;

    .hamburger {
      position: absolute;
      top: 1.3rem;
      right: 0;
      display: block;
      height: 27px;
      z-index: 99;
    }

    .logo {
      background-image: url('~@/assets/logo-sm.svg');
      width: 97px;
      height: 38px;
    }

    &__list {
      display: none;
    }
  }

  .nav.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 98;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    .logo {
      z-index: 99;
    }

    .hamburger {
      right: 1.2rem;
    }

    .nav__list {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to right, #9430c3 0%, #1c8aac 100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &-item {
        font-size: 3rem;
        margin-right: 0;
        margin-bottom: 2rem;
      }
    }
  }

  .polygon-left {
    background: linear-gradient(to right, #9430c3 0%, #1c8aac 80%);
    clip-path: polygon(0 0, 80% 0%, 0% 30%);
  }

  .polygon-right {
    display: none;
  }
}
</style>
