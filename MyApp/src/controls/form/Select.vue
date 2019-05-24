<template>
    <div>
        <label v-if="label" class="form-label">{{label}}</label>
        <select :id="id" :name="id" :class="['form-control',{'is-invalid':errorField}, selectClass]"
                :multiple="multiple" @change="onInputValues">
            <option v-for="kvp in kvpValues" :key="kvp.key" :value="kvp.key" :selected="hasValue(kvp.key)">{{kvp.value}}</option>
        </select>
        <small v-if="help" class="text-muted">{{help}}</small>
        <div v-if="errorField" class="invalid-feedback">{{errorField}}</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { errorResponse } from '@servicestack/client';

@Component
export class Select extends Vue {
    @Prop({ default: null }) responseStatus!: object;
    @Prop({ default: '' }) id!: string;
    @Prop({ default: '' }) label!: string;
    @Prop({ default: '' }) help!: string;
    @Prop({ default: 'form-control form-control-lg' }) selectClass!: string;
    @Prop({ default: false }) multiple: boolean;
    @Prop({ default: () => (null) }) value!: string[]|string;
    @Prop({ default: () => ([])}) values: any[];

    get errorField(){ return errorResponse.call(this.$props, this.id); }
    get hasError(){ return !!this.errorField; }
    get kvpValues() {
        const kvps = (this.values || []).map((x) => typeof x === 'string'
            ? { key: x, value: x }
            : x);
        return kvps;
    }

    hasValue(elValue: string) {
        return this.multiple
            ? (this.value instanceof Array
                ? this.value.indexOf(elValue) >= 0
                : false)
            : this.value === elValue;
    }

    @Emit('input')
    protected onInputValues(e: InputEvent) {
        return this.multiple ? selectedOptions(e.target as any as HTMLSelectElement) : e.target.value;
    }
}

function selectedOptions(select: HTMLSelectElement) {
    return Array.from(select.options).filter((x) => x.selected).map((x) => x.value);
}

export default Select;
</script>