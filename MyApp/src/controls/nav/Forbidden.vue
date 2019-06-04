<template>
    <div class="forbidden">
        <h3>
            You are not authorized to access
            <code v-if="usePath">{{usePath}}</code>
            <span v-else>this page</span>
        </h3>
        <p v-if="message">{{message}}</p>
        <p v-else-if="useRole">Missing role <code>{{useRole}}</code></p>
        <p v-else-if="usePermission">Missing permission <code>{{usePermission}}</code></p>
    </div>    
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export class Forbidden extends Vue {
    @Prop({ default: '' }) message!: string;
    @Prop({ default: '' }) path!: string;
    @Prop({ default: '' }) role!: string;
    @Prop({ default: '' }) permission!: string;

    protected get usePath() {
        return this.path || this.$route.query.path as string || null;
    }

    protected get useRole() {
        return this.role || this.$route.query.role as string || null;
    }

    protected get usePermission() {
        return this.permission || this.$route.query.permission as string || null;
    }
}
export default Forbidden;
</script>
