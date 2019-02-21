import Home from '@/views/Home.vue'
import { shallowMount } from '@vue/test-utils'

jest.mock('axios')

it('fetches data when a created is called', () => {

    const wrapper = shallowMount(Home)
    wrapper.vm.fetchResults()
    expect(wrapper.vm.value).toBe(undefined)

})