<template>
    <div v-if="errorSummary" class="alert alert-danger mt-2">{{errorSummary}}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { errorResponseExcept } from '@servicestack/client';

@Component
export class ErrorSummary extends Vue {
    @Prop({ default: null }) responseStatus!: object;
    @Prop({ default: '' }) except!: string;
    get errorSummary(){ return errorResponseExcept.call(this.$props, this.except); }
}
export default ErrorSummary;
</script>