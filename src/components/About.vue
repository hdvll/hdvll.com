<template>
  <section class="about" id="about">
    <div class="container">
      <div class="header">
        <h1 class="section-header">About me</h1>
        <span class="up-arrow" @click="goToHome">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="#fff" />
            <path
              d="M40 31.4615L28.2179 20.9823C26.3103 19.2856 23.431 19.2985 21.5387 21.0122L10 31.4615"
              stroke="#1c8aac"
              stroke-width="5"
            />
          </svg>
        </span>
      </div>
      <div class="about-me">
        <div class="about-me__left">
          <img src="@/assets/magnus.png" alt="Image of Magnus Hedvall" />
          <h4>Magnus Hedvall</h4>
          <span>hello@hdvll.com</span>
          <div class="about-me__social">
            <a href="https://www.github.com/hdvll" target="_blank">
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3533 24.156C10.3533 24.28 10.2098 24.3793 10.0288 24.3793C9.82288 24.3979 9.67934 24.2986 9.67934 24.156C9.67934 24.0319 9.82288 23.9326 10.0039 23.9326C10.1911 23.914 10.3533 24.0133 10.3533 24.156ZM8.41248 23.8768C8.36879 24.0009 8.49361 24.1435 8.68083 24.1808C8.84309 24.2428 9.03031 24.1808 9.06775 24.0567C9.10519 23.9326 8.98662 23.79 8.7994 23.7341C8.63714 23.6907 8.45616 23.7527 8.41248 23.8768ZM11.1709 23.7713C10.9899 23.8148 10.8651 23.9326 10.8838 24.0753C10.9025 24.1994 11.0648 24.28 11.252 24.2366C11.433 24.1932 11.5578 24.0753 11.5391 23.9512C11.5203 23.8334 11.3518 23.7527 11.1709 23.7713ZM15.2773 0C6.62139 0 0 6.53216 0 15.1362C0 22.0158 4.35602 27.9028 10.578 29.9747C11.3768 30.1174 11.6576 29.6273 11.6576 29.2241C11.6576 28.8395 11.6389 26.718 11.6389 25.4152C11.6389 25.4152 7.27043 26.3457 6.35304 23.5666C6.35304 23.5666 5.6416 21.7615 4.61812 21.2962C4.61812 21.2962 3.189 20.3223 4.71798 20.3409C4.71798 20.3409 6.27191 20.4649 7.12689 21.9414C8.4936 24.3359 10.7839 23.6473 11.6764 23.2379C11.8199 22.2453 12.2255 21.5567 12.6749 21.1473C9.18632 20.7627 5.66656 20.2602 5.66656 14.2926C5.66656 12.5867 6.14086 11.7306 7.13937 10.6388C6.97711 10.2356 6.44665 8.57307 7.30163 6.4267C8.60594 6.02348 11.6077 8.10161 11.6077 8.10161C12.8559 7.75422 14.1976 7.57433 15.5269 7.57433C16.8562 7.57433 18.1979 7.75422 19.4461 8.10161C19.4461 8.10161 22.4478 6.01728 23.7521 6.4267C24.6071 8.57927 24.0767 10.2356 23.9144 10.6388C24.9129 11.7368 25.5245 12.5929 25.5245 14.2926C25.5245 20.2788 21.8487 20.7565 18.3602 21.1473C18.9343 21.6374 19.4211 22.5679 19.4211 24.0257C19.4211 26.1162 19.4024 28.703 19.4024 29.2117C19.4024 29.6149 19.6894 30.105 20.482 29.9623C26.7227 27.9028 30.9539 22.0158 30.9539 15.1362C30.9539 6.53216 23.9331 0 15.2773 0ZM6.06597 21.3955C5.98484 21.4575 6.00356 21.6002 6.10965 21.718C6.20951 21.8173 6.35304 21.8607 6.43417 21.7801C6.5153 21.718 6.49658 21.5753 6.39049 21.4575C6.29063 21.3582 6.1471 21.3148 6.06597 21.3955ZM5.39197 20.893C5.34829 20.9736 5.41069 21.0729 5.53551 21.1349C5.63536 21.1969 5.76017 21.1783 5.80386 21.0915C5.84754 21.0108 5.78514 20.9116 5.66032 20.8496C5.53551 20.8123 5.43566 20.8309 5.39197 20.893ZM7.41396 23.1014C7.31411 23.182 7.35156 23.3681 7.49509 23.486C7.63863 23.6287 7.81961 23.6473 7.90074 23.548C7.98187 23.4674 7.94442 23.2813 7.81961 23.1634C7.68231 23.0207 7.49509 23.0021 7.41396 23.1014ZM6.70252 22.1895C6.60267 22.2515 6.60267 22.4128 6.70252 22.5555C6.80237 22.6982 6.97087 22.7602 7.052 22.6982C7.15185 22.6175 7.15185 22.4562 7.052 22.3136C6.96463 22.1709 6.80237 22.1088 6.70252 22.1895Z"
                  fill="white"
                  fill-opacity="0.4"
                />
              </svg>
            </a>
            <a href="https://www.twitter.com/hedvallmagnus" target="_blank">
              <svg
                width="38"
                height="30"
                viewBox="0 0 38 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.3401 7.47654C33.3636 7.80464 33.3636 8.13283 33.3636 8.46093C33.3636 18.4687 25.7007 30 11.695 30C7.38007 30 3.37175 28.7578 0 26.6016C0.613064 26.6719 1.20247 26.6953 1.83912 26.6953C5.39942 26.6953 8.67689 25.5 11.2941 23.461C7.94596 23.3906 5.1401 21.211 4.17337 18.2109C4.64498 18.2812 5.11652 18.3281 5.61171 18.3281C6.29547 18.3281 6.9793 18.2343 7.61588 18.0703C4.12626 17.3671 1.50896 14.3203 1.50896 10.6406V10.5469C2.5228 11.1094 3.70183 11.461 4.9514 11.5078C2.90006 10.1484 1.55614 7.82809 1.55614 5.20307C1.55614 3.79685 1.93333 2.50779 2.59357 1.38278C6.34257 5.97652 11.9779 8.97647 18.2969 9.30466C18.179 8.74215 18.1082 8.15627 18.1082 7.57032C18.1082 3.3984 21.5036 0 25.7241 0C27.9169 0 29.8975 0.91406 31.2886 2.39062C33.0098 2.06251 34.6603 1.42967 36.1222 0.562504C35.5563 2.32036 34.3538 3.79692 32.7741 4.73436C34.3067 4.57037 35.7922 4.1484 37.1597 3.56253C36.1224 5.06246 34.8255 6.39835 33.3401 7.47654V7.47654Z"
                  fill="white"
                  fill-opacity="0.4"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/magnushedvall" target="_blank">
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.0248 0H2.14901C0.963351 0 0 0.970982 0 2.16295V27.8371C0 29.029 0.963351 30 2.14901 30H28.0248C29.2104 30 30.1805 29.029 30.1805 27.8371V2.16295C30.1805 0.970982 29.2104 0 28.0248 0ZM9.12152 25.7143H4.64834V11.3973H9.12826V25.7143H9.12152ZM6.88493 9.44196C5.45001 9.44196 4.29129 8.28348 4.29129 6.86384C4.29129 5.4442 5.45001 4.28571 6.88493 4.28571C8.31312 4.28571 9.47857 5.4442 9.47857 6.86384C9.47857 8.29018 8.31985 9.44196 6.88493 9.44196V9.44196ZM25.8892 25.7143H21.416V18.75C21.416 17.0893 21.3824 14.9531 19.0919 14.9531C16.761 14.9531 16.4039 16.7612 16.4039 18.6295V25.7143H11.9307V11.3973H16.222V13.3527H16.2827C16.8822 12.2277 18.3441 11.0424 20.5201 11.0424C25.0471 11.0424 25.8892 14.0089 25.8892 17.8661V25.7143V25.7143Z"
                  fill="white"
                  fill-opacity="0.4"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/magnus.hedvall.54"
              target="_blank"
            >
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.3642 15.0913C30.3642 6.75456 23.569 0 15.1821 0C6.79521 0 0 6.75456 0 15.0913C0 22.6235 5.55187 28.8669 12.8099 30V19.4538H8.95315V15.0913H12.8099V11.7663C12.8099 7.98438 15.075 5.89533 18.5442 5.89533C20.2056 5.89533 21.943 6.18986 21.943 6.18986V9.90183H20.0281C18.1426 9.90183 17.5543 11.0653 17.5543 12.2586V15.0913H21.7649L21.0915 19.4538H17.5543V30C24.8123 28.8669 30.3642 22.6235 30.3642 15.0913Z"
                  fill="white"
                  fill-opacity="0.4"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="about-me__right">
          <h2>Who is this Magnus guy anyway?</h2>
          <p>
            My story starts way back at the start of the millenium. I was a
            young man at the time and wanted to be a rock star or coder. Well
            that didn’t happen and I ended up working in the financial sector
            instead for about 15 years. I had a bunch of jobs, for example as a
            Project Manager, with Contract Management, as a Problem Manager but
            also as a Software Engineer with application maintenance in Linux
            and Windows environments. All the time I had the dream of one day
            working as a web developer.
          </p>
          <p>
            You see, my passion has always been front-end web development with
            focus on design and UI/UX and even if my career path took me to
            other places I never stopped working on that in my spare time. So a
            few years ago I made the switch to work full time as a front-end
            developer. I properly learnt Javascript and got into React and Vue
            and now I work at a small company in my hometown Enköping in Sweden
            with in-house products or with consultant work for some of our
            clients.
          </p>
          <img src="@/assets/greeting.svg" alt="Greeting from Magnus" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  methods: {
    goToHome() {
      this.$emit('scrollToHome');
    }
  }
};
</script>

<style lang="scss" scoped>
.about {
  background: #1c8aac;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .section-header {
      color: #fff;
    }

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

  .about-me {
    margin: 4rem 2rem 2rem 2rem;
    display: flex;
    justify-content: space-between;

    &__left {
      margin-right: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;

      & h4 {
        margin-top: 1rem;
        font-size: 1.8rem;
      }

      & span {
        opacity: 0.5;
        margin-bottom: 1rem;
      }

      & .about-me__social {
        display: flex;
        justify-content: space-between;
        width: 50%;

        & svg path {
          transition: all 300ms ease-in-out;
          fill-opacity: 0.5;
        }

        & svg:hover path {
          fill-opacity: 1;
        }
      }
    }

    .about-me__right {
      color: #fff;

      & h2 {
        font-weight: 700;
        letter-spacing: 0.5px;
        font-size: 1.8rem;
        line-height: 1.2;
      }

      & p {
        opacity: 0.7;
        font-weight: 300;
        margin: 1rem 0;
        line-height: 1.6;
      }
    }
  }
}

@media screen and (max-width: 964px) {
  .about {
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

    .about-me {
      flex-direction: column;

      &__left {
        margin-right: 0;
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);

        & img {
          width: 250px;
          height: auto;
        }

        & h4 {
          font-size: 1.6rem;
        }

        & .about-me__social {
          width: 180px;
        }
      }

      .about-me__right {
        & img {
          width: 250px;
          height: auto;
        }
      }
    }
  }
}
</style>
