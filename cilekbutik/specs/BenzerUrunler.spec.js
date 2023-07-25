import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import BenzerUrunler from "@/components/BenzerUrunler";
import Vuex from "vuex"

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    Urunler: []
  },
  actions: {
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

describe("BenzerUrunler", () => {
  test("mounts properly", () => {
    const wrapper = BenzerUrunler;
    expect(wrapper).toBeTruthy();
  });

  test("gerçek Vuex Store kullanarak BenzerUrunler render edildi", () => {
    const wrapper = mount(BenzerUrunler, { 
      store, 
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  });
});

describe('created', () => {
  test('created test', () => {
    expect(store.state.Urunler).not.toBe(undefined)
  })
});

describe('computed', () => {
  test('computed test', () => {
    expect(store.state.Urunler).not.toBe(undefined)
  })
})