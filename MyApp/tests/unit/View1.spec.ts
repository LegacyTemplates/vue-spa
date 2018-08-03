import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';

import View1 from '@/view1/View1.vue';

describe('/view1 View.vue', () => {

    it ('should render correct contents', () => {
        const wrapper = shallowMount(View1) as any;
        expect(wrapper.vm.$el.querySelector('h3')!.textContent).toBe('This is View 1');
    });

});
