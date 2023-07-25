import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import index from "@/pages/index";
import Vuex from "vuex"

const localVue = createLocalVue()
localVue.use(Vuex)

jest.useFakeTimers()

const store = new Vuex.Store({
  state: {
    slides: [],
    Urunler: []
  },
  actions: {
    slidesfetch(){
      let slides = [
        {
          url:'https://www.cilekbutik.net/cdn/1/300/500/images/urunler/5fa57c217b440-1353.jpg',
        },
        {
          url:'https://www.cilekbutik.net/cdn/2/100/100/images/urunler/5fa6a282db005-1368.jpg',
        }]
        this.state.slides=slides
    },
    Urunlerfetch(){
      let Urunler = [
        {
            id:0,
            url:'https://www.cilekbutik.net/cdn/1/300/500/images/urunler/5fa57c217b440-1353.jpg',
            name:'Lakers Sweat',
            fiyat:55.00,
            url2:'https://www.cilekbutik.net/cdn/2/100/100/images/urunler/5fa6a282db005-1368.jpg',
            barkod:"6242005630101",
            kategori:"Ceket",
            bedenler:[{ad:'S'},{ad:'M'},{ad:'L'}],
            beden:'M',
            renk:'TURUNCU',
            tutar:55.00,
            adet:10,
        }]
        this.state.Urunler=Urunler
    }
  }
})

describe('init', () => {
  test('interval test', () => {
    const wrapper = mount(index, { 
      store, 
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.vm.interval).not.toBe(undefined)
  })

  test('visibleSlide artış test', () => {
    const wrapper = mount(index, { 
      store, 
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.vm.visibleSlide).toBe(0)
    jest.advanceTimersByTime(5000)
    expect(wrapper.vm.visibleSlide).toBe(1)
    jest.advanceTimersByTime(5000)
    expect(wrapper.vm.visibleSlide).toBe(0)
  })
})

describe('next', () => {
  test('next test', () => {
    const wrapper = mount(index, { 
      store, 
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    wrapper.vm.next()
    expect(wrapper.vm.visibleSlide).toEqual(1)
    wrapper.vm.next()
    expect(wrapper.vm.visibleSlide).toEqual(-1)
  })
})

describe('prev', () => {
  test('prev test', () => {
    const wrapper = mount(index, { 
      store, 
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    wrapper.vm.prev()
    expect(wrapper.vm.visibleSlide).toEqual(1)
    wrapper.vm.prev()
    expect(wrapper.vm.visibleSlide).toEqual(0)
  })
})
 
describe('mounted', () => {
  test('mounted test', () => {
    const wrapper = mount(index, { 
      store, 
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.vm.interval).not.toBe(undefined)
  })
})

describe('created', () => {
  test('created test', () => {
    expect(store.state.slides).not.toBe(undefined)
  })
})

describe("index", () => {
  test("mounts properly", () => {
    const wrapper = index;
    expect(wrapper).toBeTruthy();
  });

  test("gerçek Vuex Store kullanarak index render edildi", () => {
    const wrapper = mount(index, { 
      store, 
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  });
});