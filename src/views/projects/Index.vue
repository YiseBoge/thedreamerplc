<script>
// Extensions
import View from "@/views/View";

// Mixins
import LoadSections from "@/mixins/load-sections";

export default {
  name: "Projects",

  metaInfo: { title: "Projects" },

  extends: View,

  mixins: [LoadSections(["hero-alt", "projects", "info"])],

  props: {
    id: {
      type: String,
      default: "about"
    }
  }
};
</script>
