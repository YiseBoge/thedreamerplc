<template>
  <base-section id="map" space="0">
    <iframe
      allowfullscreen
      aria-hidden="false"
      frameborder="0"
      height="500"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1584.3742309257473!2d38.78962279847581!3d8.988130739945307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84e4aa092813%3A0xbb84990929808c9a!2sMillennium%20Hall!5e0!3m2!1sen!2set!4v1598190781031!5m2!1sen!2set"
      style="border:0; display: block;"
      tabindex="0"
      width="100%"
    />
  </base-section>
</template>

<script>
export default {
  name: "SectionMap",

  provide: {
    heading: { align: "center" }
  }
};
</script>
