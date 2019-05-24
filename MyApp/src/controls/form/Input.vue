<template>
    <div>
        <label v-if="label" :class="isCheck ? 'form-check-label' : 'form-label'" :for="id">{{label}}</label>
        <div v-if="isCheck" :class="['form-check',{'is-invalid':hasError,'form-control':hasError}]">
            <template v-if="type === 'radio'">
                <div v-for="kvp in kvpValues" :key="kvp.key" :class="['custom-control','custom-radio',{'custom-control-inline':inline}]">
                    <input type="radio" :id="concat(id,'-',kvp.key)" :name="id" :value="kvp.key"
                        :class="['custom-control-input',inputClass]" :checked="value==kvp.key" @change="onInput" />
                    <label class="custom-control-label" :for="concat(id,'-',kvp.key)">{{kvp.value}}</label>
                </div>
            </template>
            <template v-if="type === 'checkbox'">
                <div v-for="kvp in kvpValues" :key="kvp.key" :class="['custom-control','custom-checkbox',{'custom-control-inline':inline}]">
                    <input type="checkbox" :id="concat(id,'-',kvp.key)" :name="id" :value="kvp.key"
                        :class="['form-check-input']" :checked="hasValue(kvp.key)" @change="onInputValues" />
                    <label class="form-check-label" :for="concat(id,'-',kvp.key)">{{kvp.value}}</label>
                </div>
            </template>
            <small v-if="help" class="text-muted">{{help}}</small>
        </div>
        <input v-if="!isCheck" :type="type" :id="id" :name="id" @input="onInput" :value="value"
            :class="['form-control',{'is-invalid':errorField},inputClass]"
            :placeholder="placeholder" />
        <small v-if="!isCheck && help" class="text-muted">{{help}}</small>
        <div v-if="hasError" class="invalid-feedback">{{ errorField }}</div>
    </div>    
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { errorResponse } from '@servicestack/client';

function inputSelectedValues(input: HTMLInputElement) {
    if (input.form == null) {
        throw new Error('multiple values must be within a <form> element');
    }

    const selectedValues = (Array.from(input.form.elements) as HTMLInputElement[])
        .filter((el) => el.name === input.name && el.checked)
        .map((el) => el.value);
    return selectedValues;
}

@Component
export class Input extends Vue {
    @Prop({ default: null }) responseStatus!: object;
    @Prop({ default: 'text' }) type!: string;
    @Prop({ default: '' }) id!: string;
    @Prop({ default: '' }) placeholder!: string;
    @Prop({ default: '' }) label!: string;
    @Prop({ default: '' }) help!: string;
    @Prop({ default: 'form-control-lg' }) inputClass!: string;
    @Prop({ default: false }) inline: boolean;
    @Prop({ default: () => (null) }) value!: string[]|string;
    @Prop({ default: () => ([])}) values: any[];


    concat(prefix: string, id: string, suffix: string) { return prefix + id + (suffix || ''); }
    get isCheck(){ return this.type === 'radio' || this.type === 'checkbox'; }
    get errorField(){ return errorResponse.call(this.$props, this.id); }
    get hasError(){ return !!this.errorField; }
    get kvpValues() {
        const kvps = (this.values || []).map((x) => typeof x === 'string'
            ? { key: x, value: x }
            : x);
        return kvps;
    }

    @Emit('input')
    protected onInput(e: InputEvent) { return e.target.value; }

    @Emit('input')
    protected onInputValues(e: InputEvent) { return inputSelectedValues(e.target); }

    protected hasValue(elValue: string) {
        return this.type === 'checkbox'
            ? (this.value instanceof Array
                ? this.value.indexOf(elValue) >= 0
                : false)
            : this.value === elValue;
    }
}
export default Input;
</script>