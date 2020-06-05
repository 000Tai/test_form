<template>
  <div>
    Formページ
    <HeadComp></HeadComp>
    <TextareaComp></TextareaComp>
    <StringComp></StringComp>
  </div>
</template>

<script>
import HeadComp from "@/components/modules/HeadComp"
import TextareaComp from "@/components/modules/TextareaComp"
import StringComp from "@/components/modules/StringComp"
export default {
  name: "form",
  props: {
    msg: String
  },
  components: {
    HeadComp,
    TextareaComp,
    StringComp
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
