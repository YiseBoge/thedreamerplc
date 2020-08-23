<template>
  <base-section id="projects">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-vuetify"
      title="Projects"
    />

    <v-container v-for="project in projects" :key="project.title" class="mb-5">
      <v-row class="mb-5">
        <v-col cols="12">
          <base-title
            :space="$vuetify.breakpoint.mdAndUp ? 0 : 4"
            title="Project"
            size="display-1"
          />

          <base-divider :color="'primary'" />
        </v-col>
      </v-row>
      <v-row class="mb-5">
        <v-col
          v-if="project.align === 'left'"
          cols="12"
          md="5"
          class="text-center"
        >
          <base-avatar
            :icon="'mdi-image-size-select-actual'"
            :outlined="'true'"
            :size="150"
            align="center"
            class="mb-5"
          />
        </v-col>
        <v-col cols="12" md="7">
          <base-body space="0">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              itaque modi ab accusantium architecto voluptates ipsa molestiae.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              itaque modi ab accusantium architecto voluptates ipsa molestiae.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              itaque modi ab accusantium architecto voluptates ipsa molestiae.
            </span>
          </base-body>
        </v-col>

        <v-col
          v-if="project.align === 'right'"
          cols="12"
          md="5"
          class="text-center"
        >
          <base-avatar
            :icon="'mdi-image-size-select-actual'"
            :outlined="'true'"
            :size="150"
            class="mb-5"
          />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: "SectionProjects",

  data: () => ({
    projects: [
      {
        title: "Project",
        text:
          "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",
        align: "left"
      },
      {
        title: "Project",
        text:
          "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",
        align: "right"
      },
      {
        title: "Project",
        text:
          "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",
        align: "left"
      }
    ]
  })
};
</script>
