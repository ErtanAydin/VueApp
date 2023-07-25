import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import SepetEkranı from "@/components/SepetEkranı";
import Vuex from "vuex"

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    Sepet: []
  },
  actions: {
    Sepetfetch(){
      let Sepet = [
        {
            id:0,
            url:'https://www.cilekbutik.net/cdn/1/300/500/images/urunler/5fa57c217b440-1353.jpg',
            name:'Lakers Sweat',
            fiyat:55.00,
            barkod:"6242005630101",
            kategori:"Ceket",
            beden:'M',
            renk:'TURUNCU',
            tutar:55.00,
            adet:10,
            counter:1,
        }]
        this.state.Sepet=Sepet
    }
  }
})

describe("methods", () => {
  test("AdetArttır", () => {
    const { AdetArttır } = SepetEkranı.methods
    let Urun = { counter : 0 }
    AdetArttır(Urun)
    expect(Urun.counter).toBe(1);
  });

  test("UrunSil", () => {
    const wrapper = mount(SepetEkranı, { 
      store, 
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      } 
    })
    wrapper.vm.UrunSil()
    expect(store.state.sepet).toBe(undefined)
  })

  test("AdetAzalt", () => {
    const { AdetAzalt } = SepetEkranı.methods
    let Urun = { counter : 2 }
    AdetAzalt(Urun)
    expect(Urun.counter).toBe(1);
    AdetAzalt(Urun)
    expect(Urun.counter).toBe(1);
  });
});

describe("SepetEkranı", () => {
  test("mounts properly", () => {
    const wrapper = SepetEkranı;
    expect(wrapper).toBeTruthy();
  });

  test("gerçek Vuex Store kullanarak SepetEkranı render edildi", () => {
    const wrapper = mount(SepetEkranı, { 
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
    expect(store.state.Sepet).not.toBe(undefined)
  })
})

describe('computed', () => {
  test('computed test', () => {
    expect(store.state.Sepet).not.toBe(undefined)
  })
  test('GenelToplamHesaplama test', () => {
    const wrapper = mount(SepetEkranı, { 
      store, 
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      } 
    })
    expect(wrapper.vm.GenelToplamHesaplama).toBe(55)
  })
  test('GenelToplamHesaplamaKDV test', () => {
    const wrapper = mount(SepetEkranı, { 
      store, 
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      } 
    })
    expect(wrapper.vm.GenelToplamHesaplamaKDV).toBe(55)
  })
})