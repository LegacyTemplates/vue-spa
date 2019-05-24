<template>
    <div class="forbidden">
        <h3>
            You are not authorized to access
            <code v-if="path">{{path}}</code>
            <span v-else>this page</span>
        </h3>
        <p v-if="message">{{message}}</p>
        <p v-else-if="role">Missing role <code>{{role}}</code></p>
        <p v-else-if="permission">Missing permission <code>{{permission}}</code></p>
    </div>    
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

export class Forbidden extends Vue {
    @Prop({ default: '' }) message!: string;
    @Prop({ default: '' }) path!: string;
    @Prop({ default: '' }) role!: string;
    @Prop({ default: '' }) permission!: string;
}
export default Forbidden;
</script>
