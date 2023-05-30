<template>
  <div class="home">
    <v-list
      two-line
      subheader
    >
      <v-subheader>Hangout notifications</v-subheader>
        <v-list-item>
          <template v-slot:default="{ active, }">
            <v-list-item-action>
              <v-checkbox
                :input-value="active"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Wake up</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
    </v-list>

  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data (){
      
    }
  }
</script>
