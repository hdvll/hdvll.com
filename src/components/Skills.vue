<template>
  <section class="skills" id="skills">
    <div class="container">
      <div class="header">
        <h1 class="section-header">What I know</h1>
        <span class="up-arrow" @click="goToHome">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="#1c8aac" />
            <path
              d="M40 31.4615L28.2179 20.9823C26.3103 19.2856 23.431 19.2985 21.5387 21.0122L10 31.4615"
              stroke="white"
              stroke-width="5"
            />
          </svg>
        </span>
      </div>
      <div class="skills-grid">
        <div class="skills__skill">
          <span class="skills__skill-title">JavaScript</span>
          <div class="skills__skill-box">
            <div
              class="skill-level skills__skill-box--js"
              v-scrollAnimation
            ></div>
          </div>
        </div>
        <div class="skills__skill">
          <span class="skills__skill-title">HTML</span>
          <div class="skills__skill-box">
            <div
              class="skill-level skills__skill-box--html"
              v-scrollAnimation
            ></div>
          </div>
        </div>
        <div class="skills__skill">
          <span class="skills__skill-title">React / Redux</span>
          <div class="skills__skill-box">
            <div
              class="skill-level skills__skill-box--react"
              v-scrollAnimation
            ></div>
          </div>
        </div>
        <div class="skills__skill">
          <span class="skills__skill-title">CSS</span>
          <div class="skills__skill-box">
            <div
              class="skill-level skills__skill-box--css"
              v-scrollAnimation
            ></div>
          </div>
        </div>
        <div class="skills__skill">
          <span class="skills__skill-title">Vue / Vuex</span>
          <div class="skills__skill-box">
            <div
              class="skill-level skills__skill-box--vue"
              v-scrollAnimation
            ></div>
          </div>
        </div>
        <div class="skills__skill">
          <span class="skills__skill-title">SCSS/SASS</span>
          <div class="skills__skill-box">
            <div
              class="skill-level skills__skill-box--scss"
              v-scrollAnimation
            ></div>
          </div>
        </div>
        <div class="skills__skill">
          <span class="skills__skill-title">Svelte</span>
          <div class="skills__skill-box">
            <div
              class="skill-level skills__skill-box--svelte"
              v-scrollAnimation
            ></div>
          </div>
        </div>
        <div class="skills__skill">
          <span class="skills__skill-title">Git</span>
          <div class="skills__skill-box">
            <div
              class="skill-level skills__skill-box--git"
              v-scrollAnimation
            ></div>
          </div>
        </div>
        <div class="skills__skill">
          <span class="skills__skill-title">Node.js</span>
          <div class="skills__skill-box">
            <div
              class="skill-level skills__skill-box--nodejs"
              v-scrollAnimation
            ></div>
          </div>
        </div>
        <div class="skills__skill">
          <span class="skills__skill-title">PHP</span>
          <div class="skills__skill-box">
            <div
              class="skill-level skills__skill-box--php"
              v-scrollAnimation
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  methods: {
    goToHome() {
      this.$emit('scrollToHome');
    }
  }
};
</script>

<style lang="scss" scoped>
.enter {
  animation: animate 2s ease-in-out forwards;
}

.skills {
  background: #fff;

  &__skill-title {
    margin-left: 1rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .up-arrow {
      cursor: pointer;

      & svg {
        transition: transform 200ms ease-in;
      }

      & svg:hover {
        transform: scale(1.2);
      }
    }
  }

  .skills-grid {
    margin: 4rem 0;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;

    .skills__skill {
      color: #333;

      &-box {
        position: relative;
        display: block;
        background: #e4e4e4;
        width: 100%;
        height: 40px;
        overflow: hidden;
        border-radius: 50px;

        & .skill-level {
          position: absolute;
          border-radius: 50px;
          top: 0;
          left: 0;
          display: inline-block;
          height: 100%;
          background: linear-gradient(to right, #9430c3, #1c8aac) no-repeat;
        }

        &--js {
          width: 63%;
        }

        &--html {
          width: 85%;
        }

        &--react {
          width: 68%;
        }

        &--css {
          width: 81%;
        }

        &--vue {
          width: 72%;
        }

        &--scss {
          width: 71%;
        }

        &--svelte {
          width: 51%;
        }

        &--git {
          width: 50%;
        }

        &--nodejs {
          width: 40%;
        }

        &--php {
          width: 33%;
        }
      }
    }
  }
}

@keyframes animate {
  from {
    width: 0;
  }
}

@media screen and (max-width: 500px) {
  .skills {
    width: 100%;

    .header {
      h1 {
        font-size: 40px;
        line-height: 0.9;
      }

      .up-arrow svg {
        margin-top: 5px;
        height: 40px;
        width: auto;
      }
    }

    .skills-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
