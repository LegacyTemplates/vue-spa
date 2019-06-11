import { shallowMount } from '@vue/test-utils';

import { Input } from '@servicestack/vue';
import Home from '@/components/Home/index.vue';
import HelloApi from '@/components/Home/HelloApi.vue';

describe('Home.vue', () => {

    it ('should have correct data', () => {
        const wrapper = shallowMount(HelloApi) as any;
        expect(wrapper.vm.result).toBe('');
    });

    it ('should render correct contents', (done) => {
        const wrapper = shallowMount(HelloApi, {
            propsData: { name: 'Vue' },
        });
        const vm = wrapper.vm as any;
        expect(vm.name).toBe('Vue');
        expect(wrapper.find(Input).props().type).toBe('text');
        expect(vm.$el.querySelector('h3.result')!.textContent).toBe('');

        vm.result = 'Bye Vue';

        expect(vm.$el.querySelector('h3.result')!.textContent).toBe('Bye Vue');
        done();
    });

});
