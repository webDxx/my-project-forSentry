<template>
  <div>
    <svg width="320" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="13" rx="2" ry="2" width="14" height="5" fill="red">
        <animate attributeType="XML" attributeName="width" values="40;70;40" dur="1s" repeatCount="indefinite" />
        <animate attributeType="XML" attributeName="x" values="60;40;60" dur="1s" repeatCount="indefinite" />
      </rect>
      <rect x="0" y="23" rx="2" ry="2" width="14" height="5" fill="red">
        <animate attributeType="XML" attributeName="width" values="40;70;40" dur="0.3s" repeatCount="indefinite" />
        <animate attributeType="XML" attributeName="x" values="60;40;60" dur="0.3s" repeatCount="indefinite" />
      </rect>
      <rect x="0" y="33" rx="2" ry="2" width="14" height="5" fill="red">
        <animate attributeType="XML" attributeName="width" values="40;70;40" dur="0.7s" repeatCount="indefinite" />
        <animate attributeType="XML" attributeName="x" values="60;40;60" dur="0.7s" repeatCount="indefinite" />
      </rect>
    </svg>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="sass" scoped>

</style>
