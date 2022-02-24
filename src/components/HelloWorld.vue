<template>
  <v-container>
    <v-sheet class="d-flex primary" height="450" :style="sheetStyle">
      <v-card
        width="100"
        height="100"
        v-for="i in cardAmount"
        :key="i"
        class="ma-5"
        >{{ i }}</v-card
      >
    </v-sheet>
    <v-row class="d-flex mt-10">
      <v-col>
        <v-text-field
          label="方块数"
          class="mx-5"
          v-model.number="cardAmount"
          dense
        ></v-text-field
      ></v-col>
      <v-col>
        <v-select
          label="justify-content"
          class="mx-2"
          v-model="sheetStyle.justifyContent"
          dense
          :items="[
            'flex-start',
            'flex-end',
            'center',
            'space-between',
            'space-around',
          ]"
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          label="align-items"
          class="mx-2"
          :items="['flex-start', 'flex-end', 'center', 'baseline', 'stretch']"
          v-model="sheetStyle.alignItems"
          dense
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          label="flex-direction"
          class="mx-2"
          :items="['row', 'row-reverse', 'column', 'column-rev  verse']"
          v-model="sheetStyle.flexDirection"
          dense
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          label="align-content"
          class="mx-2"
          :items="[
            'flex-start',
            'flex-end',
            'center',
            'space-between',
            'space-around',
            'stretch',
          ]"
          v-model="sheetStyle.alignContent"
          dense
        ></v-select>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Vuetify</h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    cardAmount: 1,
    sheetStyle: {
      justifyContent: "",
      flexDirection: "",
      alignItems: "",
      alignContent: "",
    },
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
