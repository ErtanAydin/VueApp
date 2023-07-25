import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Vuex from "vuex"
import UrunListeleme from "@/components/UrunListeleme";

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    Urunler: [],
    deger:0
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
    },
    SepeteEkle(){
      let deger = 0
      this.state.deger = deger
    }
  }
})

describe("UrunListeleme", () => {
  test("mounts properly", () => {
    const wrapper = UrunListeleme;
    expect(wrapper).toBeTruthy();
  });

  test("gerçek Vuex Store kullanarak UrunListeleme render edildi", () => {
    const wrapper = mount(UrunListeleme, { 
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
})

describe('computed', () => {
  test('computed test', () => {
    expect(store.state.Urunler).not.toBe(undefined)
  })
})

describe('methods', () => {
  test('methods test', () => {
    const wrapper = mount(UrunListeleme, { 
      store, 
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      } 
    })
    wrapper.vm.SepeteEkle()
    expect(store.state.deger).toBe(0)
  })
})