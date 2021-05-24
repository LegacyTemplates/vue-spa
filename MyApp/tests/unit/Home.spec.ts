import 'node-fetch';
import { Input } from '@servicestack/vue';
import Home from '@/components/Home/index.vue';
import HelloApi from '@/components/Home/HelloApi.vue';
import { shallowMount } from '@vue/test-utils';

describe('Home.vue', () => {

    it ('should have correct data', async () => {
        const wrapper = shallowMount(HelloApi) as any;
        expect(wrapper.vm.result).toBe('');
    });

    it ('should render correct contents', async () => {
        const wrapper = shallowMount(HelloApi, {
            propsData: { name: 'Vue' },
        });
        const vm = wrapper.vm as any;
        expect(vm.name).toBe('Vue');
        expect(wrapper.findComponent(Input).props().type).toBe('text');
        expect(vm.$el.querySelector('h3.result')!.textContent).toBe('');

        await wrapper.setData({result: 'Bye Vue'});

        expect(vm.$el.querySelector('h3.result')!.textContent).toBe('Bye Vue');
    });

});
