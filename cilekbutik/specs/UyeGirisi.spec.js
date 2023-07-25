import { mount, RouterLinkStub } from "@vue/test-utils";
import UyeGirisi from "@/components/UyeGirisi";
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

describe("methods", () => {
  test("onayla", async () => {
    const mockRouter = {
      push: jest.fn()
    }
    const wrapper = mount(UyeGirisi, {
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
      wrapper.vm.email = 'a@hotmail.com'
      wrapper.vm.sifre = '123456'
      expect(firebase.auth).toHaveBeenCalled()
      expect(wrapper.vm.email).toBe('a@hotmail.com')
      expect(wrapper.vm.sifre).toBe('123456')
      expect(mockRouter.push)
      expect(console.clear())
      expect(console.log(wrapper.vm.user))
      expect(console.log('a@hotmail.com' + ' giris yapildi') )
  })
})

describe("mounted with firebase", () => {
  test("mounted with firebase test", async () => {
    const wrapper = mount(UyeGirisi, {
      stubs: {
        NuxtLink: RouterLinkStub
      }});
      
      expect(firebase.auth).toHaveBeenCalled()
  })
})

describe("UyeGirisi", () => {
  test("mounts properly", () => {
    const wrapper = UyeGirisi;
    expect(wrapper).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = mount(UyeGirisi, {
      stubs: {
        NuxtLink: RouterLinkStub
      }});
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe ('data', () => {
  test('data test', () => {
    const wrapper = mount(UyeGirisi,{
    stubs: {
      NuxtLink: RouterLinkStub
    }});
    expect(wrapper.vm.user).toBe('')
    expect(wrapper.vm.eposta).toBe('')
    expect(wrapper.vm.sifre).toBe('')
    expect(wrapper.vm.errors).toBe('')
  })
})