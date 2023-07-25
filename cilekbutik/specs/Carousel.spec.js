import { mount, RouterLinkStub } from "@vue/test-utils";
import Carousel from "@/components/Carousel";

describe("Carousel", () => {
  test("mounts properly", () => {
    const wrapper = Carousel;
    expect(wrapper).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = mount(Carousel, { 
      stubs: {
        NuxtLink: RouterLinkStub
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe('next', () => {
  test('next emit test', () => {
    const wrapper = mount(Carousel, { 
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    wrapper.vm.next()
    expect(wrapper.emitted().next[0]).toEqual([])
  })
})

describe('prev', () => {
  test('prev emit test', () => {
    const wrapper = mount(Carousel, { 
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    wrapper.vm.prev()
    expect(wrapper.emitted().prev[0]).toEqual([])
  })
})