import { mount, RouterLinkStub } from "@vue/test-utils";
import AdresGirisi from "@/components/AdresGirisi";

describe("AdresGirisi", () => {
  test("mounts properly", () => {
    const wrapper = AdresGirisi;
    expect(wrapper).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = mount(AdresGirisi, { 
      stubs: {
        NuxtLink: RouterLinkStub
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe ('data', () => {
  test('data test', () => {
    const wrapper = mount(AdresGirisi,{
    stubs: {
      NuxtLink: RouterLinkStub
    }});
    expect(wrapper.vm.faturaTipi).toBe('bireysel')
    expect(wrapper.vm.faturaDetayi).toBe(false)
    expect(wrapper.vm.sepettekiUrunleriGoster).toBe(false)
  })
})