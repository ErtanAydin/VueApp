import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils";
import Adres from "@/pages/Adres";
import Kategoriler from "@/pages/Kategoriler";
import Sepet from "@/pages/Sepet";
import Urun from "@/pages/Urun";
import UyeGirisi from "@/pages/UyeGirisi";
import Vuex from "vuex";
import firebase from "firebase"

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
    },
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

const onAuthStateChanged = jest.fn()

const getRedirectResult = jest.fn(() => {
  return Promise.resolve({
    user: {
      email:'a@hotmail.com',
      sifre: '123456'
    }
  })
})


const initializeApp = jest
  .spyOn(firebase, 'initializeApp')
  .mockImplementation(() => {
    return {
      auth: () => {
        return {
          getRedirectResult
        }
      }
    }
  })

  jest.spyOn(firebase, 'auth').mockImplementation(() => {
    return {
      onAuthStateChanged,
      currentUser: {
        email: 'a@hotmail.com',
        sifre: '123456'
      },
      getRedirectResult,

    }
  })

describe("Adres", () => {
  test("mounts properly", () => {
    const wrapper = Adres;
    expect(wrapper).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = mount(Adres, { 
      store, 
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      } 
    })
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("Kategoriler", () => {
    test("mounts properly", () => {
      const wrapper = Kategoriler;
      expect(wrapper).toBeTruthy();
    });
  
    test("renders properly", () => {
      const wrapper = mount(Kategoriler, { 
        store, 
        localVue,
        stubs: {
          NuxtLink: RouterLinkStub
        } 
      })
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

describe("Sepet", () => {
test("mounts properly", () => {
    const wrapper = Sepet;
    expect(wrapper).toBeTruthy();
});

test("renders properly", () => {
    const wrapper = mount(Sepet, { 
      store, 
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      } 
    })
    expect(wrapper.html()).toMatchSnapshot();
});
});

describe("Urun", () => {
    test("mounts properly", () => {
    const wrapper = Urun;
    expect(wrapper).toBeTruthy();
    });

    test("renders properly", () => {
    const wrapper = mount(Urun, { 
      store, 
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      } 
    })
    expect(wrapper.html()).toMatchSnapshot();
    });
});

describe("UyeGirisi", () => {
    test("mounts properly", () => {
        const wrapper = UyeGirisi;
        expect(wrapper).toBeTruthy();
    });
    
    test("renders properly", () => {
        const wrapper = mount(UyeGirisi, { 
          store, 
          localVue,
          stubs: {
            NuxtLink: RouterLinkStub
          } 
        })
        expect(wrapper.html()).toMatchSnapshot();
    });
    });

describe("firebase auth test", () => {
  test("firebase auth çağırıldı", async () => {
    const wrapper = mount(UyeGirisi, {
      stubs: {
        NuxtLink: RouterLinkStub
      }});

      expect(firebase.auth).toHaveBeenCalled()
  })
})