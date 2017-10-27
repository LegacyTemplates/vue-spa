import { expect } from 'chai';
import Vue from 'vue';
import View1 from './View1.vue';

const ctor = () => new View1().$mount() as View1;

describe('/view1 View.vue', () => {

    it ('should render correct contents', () => {
        const vm = ctor();
        expect(vm.$el.querySelector('h3').textContent).eq('This is View 1');
    })

})
