import { mount, RouterLinkStub } from "@vue/test-utils";
import Header from "@/components/Header";
import * as firebase from 'firebase'

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

describe("mounted with firebase", () => {
  test("mounted with firebase test", async () => {
    const wrapper = mount(Header, {
      stubs: {
        NuxtLink: RouterLinkStub
      }});
      
      expect(wrapper.vm.user).toBe(wrapper.vm.user)
      expect(firebase.auth).toHaveBeenCalled()
      if(wrapper.vm.user=null){ 
        expect(wrapper.vm.UyeOlText).toBe('Çıkış Yap')
        expect(wrapper.vm.GirisYapText).toBe('Hesabım')
      }
  })
})

describe("methods", () => {
  test("signout", async () => {
    const mockRouter = {
      push: jest.fn()
    }
    const wrapper = mount(Header, {
      props: {
        authenticated: true
      },
      global: {
        mocks: {
          $router: mockRouter
        }
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      }});
      wrapper.vm.email = ''
      wrapper.vm.sifre = ''
      expect(firebase.auth).toHaveBeenCalled()
      expect(wrapper.vm.user).toBe('')
      expect(wrapper.vm.UyeOlText).toBe('Üye Ol')
      expect(wrapper.vm.GirisYapText).toBe('Giriş Yap')
      expect(mockRouter.push)
      expect(console.clear())
      expect(console.log('Cikis yapildi.') )
  })
})

describe("Header", () => {
  test("mounts properly", () => {
    const wrapper = Header;
    expect(wrapper).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = mount(Header, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe ('data', () => {
  test('data test', () => {
    const wrapper = mount(Header,{
    stubs: {
      NuxtLink: RouterLinkStub
    }});
    expect(wrapper.vm.user).toBe('')
    expect(wrapper.vm.eposta).toBe('')
    expect(wrapper.vm.sifre).toBe('')
    expect(wrapper.vm.UyeOlText).toBe('Üye Ol')
    expect(wrapper.vm.GirisYapText).toBe('Giriş Yap')
  })
})