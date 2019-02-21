import { mount } from '@vue/test-utils'
import HeaderSlider from '@/components/HeaderSlider.vue'
import Footer from '@/components/Footer.vue'
import ProductList from '@/components/ProductList.vue'



describe('HeaderSlider', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HeaderSlider)
    expect(wrapper.isVueInstance()).toBeTruthy()

  })
})

describe('HeaderSlider', () => {
  test('renders Correctly', () => {
    const wrapper = mount(HeaderSlider)
    expect(wrapper.element).toMatchSnapshot()

  })
})

describe('Footer', () => {
  test('Footer is a Vue instance', () => {
    const wrapper = mount(Footer)
    expect(wrapper.isVueInstance()).toBeTruthy()

  })
})

describe('Footer', () => {
  test('Footer renders Correctly', () => {
    const wrapper = mount(Footer)
    expect(wrapper.element).toMatchSnapshot()

  })
})

describe('ProductList', () => {
  test('ProductList is a Vue instance', () => {
    const wrapper = mount(ProductList)
    expect(wrapper.isVueInstance()).toBeTruthy()

  })
})

describe('ProductList', () => {
  test('ProductList renders Correctly', () => {
    const wrapper = mount(ProductList)
    expect(wrapper.element).toMatchSnapshot()

  })
})