import { mount, RouterLinkStub } from "@vue/test-utils";
import SepeteEkleEkranı from "@/components/SepeteEkleEkranı";

describe("SepeteEkleEkranı", () => {
  test("mounts properly", () => {
    const wrapper = SepeteEkleEkranı;
    expect(wrapper).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = mount(SepeteEkleEkranı, { 
      stubs: {
        NuxtLink: RouterLinkStub
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
describe ('data', () => {
  test('data test', () => {
    const wrapper = mount(SepeteEkleEkranı,{
    stubs: {
      NuxtLink: RouterLinkStub
    }});
    expect(wrapper.vm.UrunOzellikleri).not.toBe(undefined)
    expect(wrapper.vm.counter).toBe(1)
  })
})

describe("methods", () => {
  test("AdetArttır", () => {
    const wrapper = mount(SepeteEkleEkranı,{
      stubs: {
        NuxtLink: RouterLinkStub
      }});
      wrapper.vm.AdetArttır()
      expect(wrapper.vm.counter).toBe(2)
  });
  test("AdetAzalt", () => {
    const wrapper = mount(SepeteEkleEkranı,{
      stubs: {
        NuxtLink: RouterLinkStub
      }});
      wrapper.vm.AdetArttır()
      expect(wrapper.vm.counter).toBe(2)
      wrapper.vm.AdetAzalt()
      expect(wrapper.vm.counter).toBe(1)
      wrapper.vm.AdetAzalt()
      expect(wrapper.vm.counter).toBe(1)
  });
});