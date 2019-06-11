import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';

import About from '@/components/About.vue';

describe('/about About.vue', () => {

    it ('should render correct contents', () => {
        const wrapper = shallowMount(About, {
            propsData: { message: 'This is the About page' },
        });
        expect(wrapper.vm.$el.querySelector('h3')!.textContent).toBe('This is the About page');
    });

});
