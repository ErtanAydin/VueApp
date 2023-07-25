import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import NavigationBar from "@/components/NavigationBar";
import Vuex from "vuex"

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    Navbar: []
  },
  actions: {
    Navbarfetch(){
      let Navbar = [
        {
            id:0,
            name:'Yeni Ürünler',
        }]
        this.state.Navbar=Navbar
    }
  }
})

describe("NavigationBar", () => {
  test("mounts properly", () => {
    const wrapper = NavigationBar;
    expect(wrapper).toBeTruthy();
  });

  test("gerçek Vuex Store kullanarak NavigationBar render edildi", () => {
    const wrapper = mount(NavigationBar, { 
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
    expect(store.state.Navbar).not.toBe(undefined)
  })
})

describe('computed', () => {
  test('computed test', () => {
    expect(store.state.Navbar).not.toBe(undefined)
  })
})