import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';

import Home from '@/home/Home.vue';

describe('Home.vue', () => {

    it ('should have correct data', () => {
        const wrapper = shallowMount(Home) as any;
        expect(wrapper.vm.result).toBe('');
    });

    it ('should render correct contents', (done) => {
        const wrapper = shallowMount(Home, {
            propsData: { name: 'Vue' },
        });
        const vm = wrapper.vm as any;
        expect(vm.name).toBe('Vue');
        expect(vm.$el.querySelector('input')!.type).toBe('text');
        expect(vm.$el.querySelector('h3.result')!.textContent).toBe('');

        vm.result = 'Bye Vue';

        expect(vm.$el.querySelector('h3.result')!.textContent).toBe('Bye Vue');
        done();
    });

});
