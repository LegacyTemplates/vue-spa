<template>
  <div id="about">
    <Icon icon="raphael:users" class="svg-8x ml-2 text-green" />
    <h3>{{message}}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export class About extends Vue {
  @Prop({ default: null }) message: string;
}
export default About;
</script>
