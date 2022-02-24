<template>
  <v-card class="pa-3 ma-3" width="350" height="230px" outlined :ripple="false">
    <v-fab-transition>
      <v-icon large color="primary" v-if="isActive" class="float-right"
        >mdi-check-circle-outline</v-icon
      >
    </v-fab-transition>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-subtitle-1 mb-4">
          <v-icon class="text-h4 mr-4" color="orange">
            mdi-email-receive
          </v-icon>
          <span>{{ receiver }}</span>
        </div>
        <v-list-item-title class="text-body-1 mb-1">
          <v-icon class="text-h4 mr-3" color="cyan">mdi-cellphone</v-icon>
          {{ phone }}
        </v-list-item-title>
        <div class="mt-2 mb-n2 text-body-2">
          <v-icon class="text-h4 mr-3" color="green">
            mdi-map-marker-radius
          </v-icon>
          {{ address }}
        </div>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-spacer></v-spacer>
      <template v-if="editable">
        <v-btn icon color="warning">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon color="error">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "AddressBox",
  data() {
    return {};
  },
  props: ["receiver", "phone", "address", "editable", "isActive"],
};
</script>

<style scoped>
</style>