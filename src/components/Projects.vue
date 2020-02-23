<template>
  <section class="projects" id="projects">
    <div class="imageModal" v-if="imageModal" @click.self="imageModal = false">
      <svg
        width="35"
        height="35"
        viewBox="0 0 25 25"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
        class="screenshotImage"
        @click="imageModal = false"
      >
        <path d="M2 2L22 22M22 2L2 22" stroke="white" stroke-width="3" />
      </svg>
      <img :src="image" :alt="`Screenshot of ${siteName}`" />
    </div>
    <div class="container">
      <div class="header">
        <h1 class="section-header">Personal projects</h1>
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
      <div class="project-grid">
        <div class="project__card">
          <div class="project__screenshots">
            <h2>Destiny 2 stats lookup</h2>
            <div class="screenshots" v-lazy-container="{ selector: 'img' }">
              <img
                :data-src="screenshots.d2stats_1"
                alt="Destiny 2 Stats Lookup screenshot"
                @click="
                  showScreenshot(
                    'd2stats_1.png',
                    'Destiny 2 Stats Lookup Screenshot'
                  )
                "
              />
              <img
                :data-src="screenshots.d2stats_2"
                alt="Destiny 2 Stats Lookup screenshot"
                @click="
                  showScreenshot(
                    'd2stats_2.png',
                    'Destiny 2 Stats Lookup Screenshot'
                  )
                "
              />
              <img
                :data-src="screenshots.d2stats_3"
                alt="Destiny 2 Stats Lookup screenshot"
                @click="
                  showScreenshot(
                    'd2stats_3.png',
                    'Destiny 2 Stats Lookup Screenshot'
                  )
                "
              />
            </div>
          </div>
          <div class="project__content">
            <div class="project__description">
              Simple stat tracker website enabled by an excellent REST API
              provided by the game's developer, Bungie. Visitors can search
              gamertags for any of the game's platforms or authenticate with
              their Bungie.net account for quick access to their own stats.
            </div>
          </div>
          <div class="project__stack">
            <span>
              <img src="@/assets/icons/mongodb.svg" />
              Mongo
            </span>
            <span>
              <img src="@/assets/icons/express.svg" />
              Express
            </span>
            <span>
              <img src="@/assets/icons/react.svg" />
              React
            </span>
            <span>
              <img src="@/assets/icons/nodejs.svg" />
              Node.js
            </span>
            <a
              href="https://github.com/hdvll/destiny2-stats-lookup"
              target="_blank"
              class="github"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 49 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M16.0927 38.8086C16.0927 39.0039 15.8696 39.1602 15.5883 39.1602C15.2682 39.1895 15.0451 39.0332 15.0451 38.8086C15.0451 38.6133 15.2682 38.457 15.5495 38.457C15.8405 38.4277 16.0927 38.584 16.0927 38.8086ZM13.0759 38.3691C13.008 38.5645 13.202 38.7891 13.493 38.8477C13.7452 38.9453 14.0363 38.8477 14.0945 38.6523C14.1527 38.457 13.9684 38.2324 13.6773 38.1445C13.4251 38.0762 13.1438 38.1738 13.0759 38.3691ZM17.3634 38.2031C17.0821 38.2715 16.8881 38.457 16.9172 38.6816C16.9463 38.877 17.1985 39.0039 17.4895 38.9355C17.7708 38.8672 17.9649 38.6816 17.9358 38.4863C17.9066 38.3008 17.6447 38.1738 17.3634 38.2031ZM23.7462 0.78125C10.292 0.78125 0 11.0645 0 24.6094C0 35.4395 6.77077 44.707 16.4419 47.9688C17.6835 48.1934 18.1201 47.4219 18.1201 46.7871C18.1201 46.1816 18.091 42.8418 18.091 40.791C18.091 40.791 11.3008 42.2559 9.87485 37.8809C9.87485 37.8809 8.76902 35.0391 7.17818 34.3066C7.17818 34.3066 4.95682 32.7734 7.33338 32.8027C7.33338 32.8027 9.74874 32.998 11.0777 35.3223C13.202 39.0918 16.762 38.0078 18.1492 37.3633C18.3723 35.8008 19.0028 34.7168 19.7012 34.0723C14.2788 33.4668 8.80782 32.6758 8.80782 23.2812C8.80782 20.5957 9.54504 19.248 11.0971 17.5293C10.8449 16.8945 10.0204 14.2773 11.3493 10.8984C13.3766 10.2637 18.0425 13.5352 18.0425 13.5352C19.9825 12.9883 22.0681 12.7051 24.1342 12.7051C26.2004 12.7051 28.2859 12.9883 30.226 13.5352C30.226 13.5352 34.8918 10.2539 36.9191 10.8984C38.2481 14.2871 37.4235 16.8945 37.1713 17.5293C38.7234 19.2578 39.674 20.6055 39.674 23.2812C39.674 32.7051 33.9606 33.457 28.5381 34.0723C29.4305 34.8437 30.1872 36.3086 30.1872 38.6035C30.1872 41.8945 30.1581 45.9668 30.1581 46.7676C30.1581 47.4023 30.6043 48.1738 31.8362 47.9492C41.5364 44.707 48.1132 35.4395 48.1132 24.6094C48.1132 11.0645 37.2004 0.78125 23.7462 0.78125ZM9.42864 34.4629C9.30253 34.5605 9.33163 34.7852 9.49654 34.9707C9.65174 35.127 9.87485 35.1953 10.001 35.0684C10.1271 34.9707 10.098 34.7461 9.93305 34.5605C9.77785 34.4043 9.55474 34.3359 9.42864 34.4629ZM8.38101 33.6719C8.31311 33.7988 8.41011 33.9551 8.60412 34.0527C8.75932 34.1504 8.95333 34.1211 9.02123 33.9844C9.08913 33.8574 8.99213 33.7012 8.79812 33.6035C8.60412 33.5449 8.44891 33.5742 8.38101 33.6719ZM11.5239 37.1484C11.3687 37.2754 11.4269 37.5684 11.65 37.7539C11.8731 37.9785 12.1544 38.0078 12.2805 37.8516C12.4066 37.7246 12.3484 37.4316 12.1544 37.2461C11.941 37.0215 11.65 36.9922 11.5239 37.1484ZM10.4181 35.7129C10.2629 35.8105 10.2629 36.0645 10.4181 36.2891C10.5733 36.5137 10.8352 36.6113 10.9613 36.5137C11.1165 36.3867 11.1165 36.1328 10.9613 35.9082C10.8255 35.6836 10.5733 35.5859 10.4181 35.7129Z"
                    fill="#fff"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="48.1132" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Github
            </a>
          </div>
        </div>
        <div class="project__card">
          <div class="project__screenshots">
            <h2>BRF Ängslyckan</h2>
            <div class="screenshots" v-lazy-container="{ selector: 'img' }">
              <img
                :data-src="screenshots.brf_angslyckan_1"
                alt="BRF Ängslyckan screenshot"
                @click="
                  showScreenshot(
                    'brf-angslyckan_1.png',
                    'BRF Ängslyckan screenshot'
                  )
                "
              />
              <img
                :data-src="screenshots.brf_angslyckan_2"
                alt="BRF Ängslyckan screenshot"
                @click="
                  showScreenshot(
                    'brf-angslyckan_2.png',
                    'BRF Ängslyckan screenshot'
                  )
                "
              />
              <img
                :data-src="screenshots.brf_angslyckan_3"
                alt="BRF Ängslyckan screenshot"
                @click="
                  showScreenshot(
                    'brf-angslyckan_3.png',
                    'BRF Ängslyckan screenshot'
                  )
                "
              />
            </div>
          </div>
          <div class="project__content">
            <div class="project__description">
              Website for the housing cooperative Ängslyckan in Enköping.
              Residents can login using email and password provided and managed
              on the site by administrators of the house community board.
              Residents can view news and upcoming events and admins can manage
              residents, post, edit and delete news and events and upload
              documents. <em>Work in progress</em>
            </div>
          </div>
          <div class="project__stack">
            <span>
              <img src="@/assets/icons/vue.svg" />
              Vue
            </span>
            <span>
              <img src="@/assets/icons/vuetify.svg" />
              Vuetify
            </span>
            <span>
              <img src="@/assets/icons/firebase.svg" />
              Firebase
            </span>
            <a
              href="https://github.com/hdvll/brf-angslyckan"
              target="_blank"
              class="github"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 49 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M16.0927 38.8086C16.0927 39.0039 15.8696 39.1602 15.5883 39.1602C15.2682 39.1895 15.0451 39.0332 15.0451 38.8086C15.0451 38.6133 15.2682 38.457 15.5495 38.457C15.8405 38.4277 16.0927 38.584 16.0927 38.8086ZM13.0759 38.3691C13.008 38.5645 13.202 38.7891 13.493 38.8477C13.7452 38.9453 14.0363 38.8477 14.0945 38.6523C14.1527 38.457 13.9684 38.2324 13.6773 38.1445C13.4251 38.0762 13.1438 38.1738 13.0759 38.3691ZM17.3634 38.2031C17.0821 38.2715 16.8881 38.457 16.9172 38.6816C16.9463 38.877 17.1985 39.0039 17.4895 38.9355C17.7708 38.8672 17.9649 38.6816 17.9358 38.4863C17.9066 38.3008 17.6447 38.1738 17.3634 38.2031ZM23.7462 0.78125C10.292 0.78125 0 11.0645 0 24.6094C0 35.4395 6.77077 44.707 16.4419 47.9688C17.6835 48.1934 18.1201 47.4219 18.1201 46.7871C18.1201 46.1816 18.091 42.8418 18.091 40.791C18.091 40.791 11.3008 42.2559 9.87485 37.8809C9.87485 37.8809 8.76902 35.0391 7.17818 34.3066C7.17818 34.3066 4.95682 32.7734 7.33338 32.8027C7.33338 32.8027 9.74874 32.998 11.0777 35.3223C13.202 39.0918 16.762 38.0078 18.1492 37.3633C18.3723 35.8008 19.0028 34.7168 19.7012 34.0723C14.2788 33.4668 8.80782 32.6758 8.80782 23.2812C8.80782 20.5957 9.54504 19.248 11.0971 17.5293C10.8449 16.8945 10.0204 14.2773 11.3493 10.8984C13.3766 10.2637 18.0425 13.5352 18.0425 13.5352C19.9825 12.9883 22.0681 12.7051 24.1342 12.7051C26.2004 12.7051 28.2859 12.9883 30.226 13.5352C30.226 13.5352 34.8918 10.2539 36.9191 10.8984C38.2481 14.2871 37.4235 16.8945 37.1713 17.5293C38.7234 19.2578 39.674 20.6055 39.674 23.2812C39.674 32.7051 33.9606 33.457 28.5381 34.0723C29.4305 34.8437 30.1872 36.3086 30.1872 38.6035C30.1872 41.8945 30.1581 45.9668 30.1581 46.7676C30.1581 47.4023 30.6043 48.1738 31.8362 47.9492C41.5364 44.707 48.1132 35.4395 48.1132 24.6094C48.1132 11.0645 37.2004 0.78125 23.7462 0.78125ZM9.42864 34.4629C9.30253 34.5605 9.33163 34.7852 9.49654 34.9707C9.65174 35.127 9.87485 35.1953 10.001 35.0684C10.1271 34.9707 10.098 34.7461 9.93305 34.5605C9.77785 34.4043 9.55474 34.3359 9.42864 34.4629ZM8.38101 33.6719C8.31311 33.7988 8.41011 33.9551 8.60412 34.0527C8.75932 34.1504 8.95333 34.1211 9.02123 33.9844C9.08913 33.8574 8.99213 33.7012 8.79812 33.6035C8.60412 33.5449 8.44891 33.5742 8.38101 33.6719ZM11.5239 37.1484C11.3687 37.2754 11.4269 37.5684 11.65 37.7539C11.8731 37.9785 12.1544 38.0078 12.2805 37.8516C12.4066 37.7246 12.3484 37.4316 12.1544 37.2461C11.941 37.0215 11.65 36.9922 11.5239 37.1484ZM10.4181 35.7129C10.2629 35.8105 10.2629 36.0645 10.4181 36.2891C10.5733 36.5137 10.8352 36.6113 10.9613 36.5137C11.1165 36.3867 11.1165 36.1328 10.9613 35.9082C10.8255 35.6836 10.5733 35.5859 10.4181 35.7129Z"
                    fill="#fff"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="48.1132" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Github
            </a>
          </div>
        </div>
        <div class="project__card">
          <div class="project__screenshots">
            <h2>Vue Firebase Authentication demo</h2>
            <div class="screenshots" v-lazy-container="{ selector: 'img' }">
              <img
                :data-src="screenshots.firebase_auth_demo_1"
                alt="Vue Firebase Authentication Demo screenshot"
                @click="
                  showScreenshot(
                    'firebase-auth-demo_1.png',
                    'Vue Firebase Authentication Demo screenshot'
                  )
                "
              />
              <img
                :data-src="screenshots.firebase_auth_demo_2"
                alt="Vue Firebase Authentication Demo screenshot"
                @click="
                  showScreenshot(
                    'firebase-auth-demo_2.png',
                    'Vue Firebase Authentication Demo screenshot'
                  )
                "
              />
            </div>
          </div>
          <div class="project__content">
            <div class="project__description">
              Demo site for using Google's Firebase service to authenticate
              users with Google, Facebook or through the email and password
              authentication included in Firebase.
            </div>
          </div>
          <div class="project__stack">
            <span>
              <img src="@/assets/icons/vue.svg" />
              Vue
            </span>
            <span>
              <img src="@/assets/icons/firebase.svg" />
              Firebase
            </span>
            <a
              href="https://github.com/hdvll/vue-firebase-authentication-demo"
              target="_blank"
              class="github"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 49 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M16.0927 38.8086C16.0927 39.0039 15.8696 39.1602 15.5883 39.1602C15.2682 39.1895 15.0451 39.0332 15.0451 38.8086C15.0451 38.6133 15.2682 38.457 15.5495 38.457C15.8405 38.4277 16.0927 38.584 16.0927 38.8086ZM13.0759 38.3691C13.008 38.5645 13.202 38.7891 13.493 38.8477C13.7452 38.9453 14.0363 38.8477 14.0945 38.6523C14.1527 38.457 13.9684 38.2324 13.6773 38.1445C13.4251 38.0762 13.1438 38.1738 13.0759 38.3691ZM17.3634 38.2031C17.0821 38.2715 16.8881 38.457 16.9172 38.6816C16.9463 38.877 17.1985 39.0039 17.4895 38.9355C17.7708 38.8672 17.9649 38.6816 17.9358 38.4863C17.9066 38.3008 17.6447 38.1738 17.3634 38.2031ZM23.7462 0.78125C10.292 0.78125 0 11.0645 0 24.6094C0 35.4395 6.77077 44.707 16.4419 47.9688C17.6835 48.1934 18.1201 47.4219 18.1201 46.7871C18.1201 46.1816 18.091 42.8418 18.091 40.791C18.091 40.791 11.3008 42.2559 9.87485 37.8809C9.87485 37.8809 8.76902 35.0391 7.17818 34.3066C7.17818 34.3066 4.95682 32.7734 7.33338 32.8027C7.33338 32.8027 9.74874 32.998 11.0777 35.3223C13.202 39.0918 16.762 38.0078 18.1492 37.3633C18.3723 35.8008 19.0028 34.7168 19.7012 34.0723C14.2788 33.4668 8.80782 32.6758 8.80782 23.2812C8.80782 20.5957 9.54504 19.248 11.0971 17.5293C10.8449 16.8945 10.0204 14.2773 11.3493 10.8984C13.3766 10.2637 18.0425 13.5352 18.0425 13.5352C19.9825 12.9883 22.0681 12.7051 24.1342 12.7051C26.2004 12.7051 28.2859 12.9883 30.226 13.5352C30.226 13.5352 34.8918 10.2539 36.9191 10.8984C38.2481 14.2871 37.4235 16.8945 37.1713 17.5293C38.7234 19.2578 39.674 20.6055 39.674 23.2812C39.674 32.7051 33.9606 33.457 28.5381 34.0723C29.4305 34.8437 30.1872 36.3086 30.1872 38.6035C30.1872 41.8945 30.1581 45.9668 30.1581 46.7676C30.1581 47.4023 30.6043 48.1738 31.8362 47.9492C41.5364 44.707 48.1132 35.4395 48.1132 24.6094C48.1132 11.0645 37.2004 0.78125 23.7462 0.78125ZM9.42864 34.4629C9.30253 34.5605 9.33163 34.7852 9.49654 34.9707C9.65174 35.127 9.87485 35.1953 10.001 35.0684C10.1271 34.9707 10.098 34.7461 9.93305 34.5605C9.77785 34.4043 9.55474 34.3359 9.42864 34.4629ZM8.38101 33.6719C8.31311 33.7988 8.41011 33.9551 8.60412 34.0527C8.75932 34.1504 8.95333 34.1211 9.02123 33.9844C9.08913 33.8574 8.99213 33.7012 8.79812 33.6035C8.60412 33.5449 8.44891 33.5742 8.38101 33.6719ZM11.5239 37.1484C11.3687 37.2754 11.4269 37.5684 11.65 37.7539C11.8731 37.9785 12.1544 38.0078 12.2805 37.8516C12.4066 37.7246 12.3484 37.4316 12.1544 37.2461C11.941 37.0215 11.65 36.9922 11.5239 37.1484ZM10.4181 35.7129C10.2629 35.8105 10.2629 36.0645 10.4181 36.2891C10.5733 36.5137 10.8352 36.6113 10.9613 36.5137C11.1165 36.3867 11.1165 36.1328 10.9613 35.9082C10.8255 35.6836 10.5733 35.5859 10.4181 35.7129Z"
                    fill="#fff"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="48.1132" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Github
            </a>
          </div>
        </div>
        <div class="project__card">
          <div class="project__screenshots">
            <h2>React Firebase Authentication demo</h2>
            <div class="screenshots" v-lazy-container="{ selector: 'img' }">
              <img
                :data-src="screenshots.firebase_auth_demo_3"
                alt="React Firebase Authentication Demo screenshot"
                @click="
                  showScreenshot(
                    'firebase-auth-demo_3.png',
                    'React Firebase Authentication Demo screenshot'
                  )
                "
              />
              <img
                :data-src="screenshots.firebase_auth_demo_4"
                alt="React Firebase Authentication Demo screenshot"
                @click="
                  showScreenshot(
                    'firebase-auth-demo_4.png',
                    'React Firebase Authentication Demo screenshot'
                  )
                "
              />
            </div>
          </div>
          <div class="project__content">
            <div class="project__description">
              Demo site for using Google's Firebase service to authenticate
              users with Google, Facebook or through the email and password
              authentication included in Firebase.
            </div>
          </div>
          <div class="project__stack">
            <span>
              <img src="@/assets/icons/react.svg" />
              React
            </span>
            <span>
              <img src="@/assets/icons/redux.svg" />
              Redux
            </span>
            <span>
              <img src="@/assets/icons/firebase.svg" />
              Firebase
            </span>
            <a
              href="https://github.com/hdvll/react-firebase-authentication-demo"
              target="_blank"
              class="github"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 49 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M16.0927 38.8086C16.0927 39.0039 15.8696 39.1602 15.5883 39.1602C15.2682 39.1895 15.0451 39.0332 15.0451 38.8086C15.0451 38.6133 15.2682 38.457 15.5495 38.457C15.8405 38.4277 16.0927 38.584 16.0927 38.8086ZM13.0759 38.3691C13.008 38.5645 13.202 38.7891 13.493 38.8477C13.7452 38.9453 14.0363 38.8477 14.0945 38.6523C14.1527 38.457 13.9684 38.2324 13.6773 38.1445C13.4251 38.0762 13.1438 38.1738 13.0759 38.3691ZM17.3634 38.2031C17.0821 38.2715 16.8881 38.457 16.9172 38.6816C16.9463 38.877 17.1985 39.0039 17.4895 38.9355C17.7708 38.8672 17.9649 38.6816 17.9358 38.4863C17.9066 38.3008 17.6447 38.1738 17.3634 38.2031ZM23.7462 0.78125C10.292 0.78125 0 11.0645 0 24.6094C0 35.4395 6.77077 44.707 16.4419 47.9688C17.6835 48.1934 18.1201 47.4219 18.1201 46.7871C18.1201 46.1816 18.091 42.8418 18.091 40.791C18.091 40.791 11.3008 42.2559 9.87485 37.8809C9.87485 37.8809 8.76902 35.0391 7.17818 34.3066C7.17818 34.3066 4.95682 32.7734 7.33338 32.8027C7.33338 32.8027 9.74874 32.998 11.0777 35.3223C13.202 39.0918 16.762 38.0078 18.1492 37.3633C18.3723 35.8008 19.0028 34.7168 19.7012 34.0723C14.2788 33.4668 8.80782 32.6758 8.80782 23.2812C8.80782 20.5957 9.54504 19.248 11.0971 17.5293C10.8449 16.8945 10.0204 14.2773 11.3493 10.8984C13.3766 10.2637 18.0425 13.5352 18.0425 13.5352C19.9825 12.9883 22.0681 12.7051 24.1342 12.7051C26.2004 12.7051 28.2859 12.9883 30.226 13.5352C30.226 13.5352 34.8918 10.2539 36.9191 10.8984C38.2481 14.2871 37.4235 16.8945 37.1713 17.5293C38.7234 19.2578 39.674 20.6055 39.674 23.2812C39.674 32.7051 33.9606 33.457 28.5381 34.0723C29.4305 34.8437 30.1872 36.3086 30.1872 38.6035C30.1872 41.8945 30.1581 45.9668 30.1581 46.7676C30.1581 47.4023 30.6043 48.1738 31.8362 47.9492C41.5364 44.707 48.1132 35.4395 48.1132 24.6094C48.1132 11.0645 37.2004 0.78125 23.7462 0.78125ZM9.42864 34.4629C9.30253 34.5605 9.33163 34.7852 9.49654 34.9707C9.65174 35.127 9.87485 35.1953 10.001 35.0684C10.1271 34.9707 10.098 34.7461 9.93305 34.5605C9.77785 34.4043 9.55474 34.3359 9.42864 34.4629ZM8.38101 33.6719C8.31311 33.7988 8.41011 33.9551 8.60412 34.0527C8.75932 34.1504 8.95333 34.1211 9.02123 33.9844C9.08913 33.8574 8.99213 33.7012 8.79812 33.6035C8.60412 33.5449 8.44891 33.5742 8.38101 33.6719ZM11.5239 37.1484C11.3687 37.2754 11.4269 37.5684 11.65 37.7539C11.8731 37.9785 12.1544 38.0078 12.2805 37.8516C12.4066 37.7246 12.3484 37.4316 12.1544 37.2461C11.941 37.0215 11.65 36.9922 11.5239 37.1484ZM10.4181 35.7129C10.2629 35.8105 10.2629 36.0645 10.4181 36.2891C10.5733 36.5137 10.8352 36.6113 10.9613 36.5137C11.1165 36.3867 11.1165 36.1328 10.9613 35.9082C10.8255 35.6836 10.5733 35.5859 10.4181 35.7129Z"
                    fill="#fff"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="48.1132" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      imageModal: false,
      image: '',
      siteName: '',
      screenshots: {
        brf_angslyckan_1: require('../assets/screenshots/brf-angslyckan_1.png'),
        brf_angslyckan_2: require('../assets/screenshots/brf-angslyckan_2.png'),
        brf_angslyckan_3: require('../assets/screenshots/brf-angslyckan_3.png'),
        d2stats_1: require('../assets/screenshots/d2stats_1.png'),
        d2stats_2: require('../assets/screenshots/d2stats_2.png'),
        d2stats_3: require('../assets/screenshots/d2stats_3.png'),
        firebase_auth_demo_1: require('../assets/screenshots/firebase-auth-demo_1.png'),
        firebase_auth_demo_2: require('../assets/screenshots/firebase-auth-demo_2.png'),
        firebase_auth_demo_3: require('../assets/screenshots/firebase-auth-demo_3.png'),
        firebase_auth_demo_4: require('../assets/screenshots/firebase-auth-demo_4.png')
      }
    };
  },
  methods: {
    goToHome() {
      this.$emit('scrollToHome');
    },
    showScreenshot(image, siteName) {
      if (!this.imageModal) {
        this.image = require('../assets/screenshots/' + image);
        this.siteName = siteName;
        this.imageModal = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.projects {
  background: #e4e4e4;

  .imageModal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    & svg {
      margin-bottom: 1rem;
      cursor: pointer;
    }

    & img {
      background: #000;
      width: 80%;
      height: 80%;
      max-width: 1067px;
      max-height: 800px;
      object-fit: contain;
      border: 1px solid #fff;
    }
  }

  .header {
    display: flex;
    align-items: center;

    .up-arrow {
      margin-left: auto;
      cursor: pointer;

      & svg {
        transition: transform 200ms ease-in;
      }

      & svg:hover {
        transform: scale(1.2);
      }
    }
  }
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin-top: 4rem;
  margin-bottom: 2rem;

  .project__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    border-radius: 5px;

    .project__screenshots {
      padding: 2rem;
      background: linear-gradient(to right, #1c8aac, #9430c3) no-repeat;
      width: 100%;
      margin-bottom: 1rem;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;

      & h2 {
        color: #fff;
        letter-spacing: 0.5px;
        font-size: 2rem;
        margin-bottom: 1.5rem;
        line-height: 1.1;
        text-align: center;
      }

      .screenshots {
        display: flex;
        justify-content: space-evenly;

        & img {
          width: 27%;
          max-width: 150px;
          max-height: 100px;
          object-fit: cover;
          cursor: pointer;
          border: 1px solid #fff;
          transition: all 200ms ease-in-out;
          opacity: 0.5;
        }

        & img:hover {
          transform: scale(1.2);
          opacity: 1;
        }
      }
    }

    .project__content {
      padding: 0 2rem;
      display: flex;
      margin-bottom: 2rem;

      .project__description {
        line-height: 1.6;
        color: #717171;
      }

      .project__screenshot img {
        margin-left: 1rem;
        width: 200px;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
      }
    }

    .project__stack {
      padding: 0 2rem;
      margin-top: auto;
      display: flex;
      align-items: center;
      color: #a7a7a7;
      margin-bottom: 2rem;

      & span {
        display: flex;
        flex-direction: column;
        font-size: 0.7rem;
        text-transform: uppercase;
        align-items: center;
        margin-right: 1rem;

        & img {
          width: auto;
          height: 30px;
          margin-bottom: 0.2rem;
        }
      }

      .github {
        margin-left: auto;
        display: flex;
        font-size: 0.7rem;
        text-transform: uppercase;
        align-items: center;
        color: #fff;
        text-decoration: none;
        transition: color 300ms ease-in-out;
        background: #333;
        padding: 0.5rem 1rem;
        transition: background 300ms ease-in-out;
        border-radius: 5px;

        & svg {
          margin-right: 0.5rem;
        }

        &:hover {
          background: #1c8aac;
        }
      }
    }
  }
}

@media screen and (max-width: 964px) {
  .projects {
    width: 100%;

    .imageModal {
      & img {
        width: 80%;
        height: auto;
      }
    }

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

    .project-grid {
      grid-template-columns: 1fr;

      .project__card {
        .project__screenshots {
          & h2 {
            font-size: 1.6rem;
          }
        }
        .project__content {
          padding: 1rem;
        }

        .project__stack {
          padding: 0 1rem;
          & span {
            margin-right: 0.4rem;
          }

          & img {
            height: 25px;
          }

          & .github {
            padding: 0.5rem 0.7rem;
          }
        }
      }
    }
  }
}
</style>
