import { mount, RouterLinkStub } from "@vue/test-utils";
import UrunFiltreleme from "@/components/UrunFiltreleme";

describe("UrunFiltreleme", () => {
  test("mounts properly", () => {
    const wrapper = UrunFiltreleme;
    expect(wrapper).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = mount(UrunFiltreleme, { 
      stubs: {
        NuxtLink: RouterLinkStub
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe ('data', () => {
  test('data test', () => {
    const wrapper = mount(UrunFiltreleme,{
    stubs: {
      NuxtLink: RouterLinkStub
    }});
    expect(wrapper.vm.AltKategoriler).not.toBe(undefined)
    expect(wrapper.vm.FiyatAralık).not.toBe(undefined)
  })
})