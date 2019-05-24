<template>
    <div>
        <div :class="['form-check',{'is-invalid':errorField,'form-control':errorField}]">
            <input type="checkbox" :id="id" :name="id" @input="onInput" :checked="value" value="true"
                :class="['form-check-input',{'is-invalid':errorField},inputClass]" />
            <label class="form-check-label" :for="id"><slot></slot></label>
        </div>
        <small v-if="help" class="text-muted">{{help}}</small>
        <div v-if="errorField" class="invalid-feedback">{{errorField}}</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { errorResponse } from '@servicestack/client';

@Component
export class CheckBox extends Vue {
    @Prop({ default: null }) responseStatus!: object;
    @Prop({ default: '' }) id!: string;
    @Prop({ default: '' }) placeholder!: string;
    @Prop({ default: false }) value!: boolean;
    @Prop({ default: '' }) help!: string;
    @Prop({ default: '' }) inputClass!: string;

    get errorField(){ return errorResponse.call(this.$props, this.id); }

    @Emit('input')
    protected onInput(e: InputEvent) { return e.target.checked; }
}

export default CheckBox;
</script>