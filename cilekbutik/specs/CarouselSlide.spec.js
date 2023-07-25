import { mount, RouterLinkStub } from "@vue/test-utils";
import CarouselSlide from "@/components/CarouselSlide";

describe("CarouselSlide", () => {
  test("mounts properly", () => {
    const wrapper = CarouselSlide;
    expect(wrapper).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = mount(CarouselSlide, { 
      stubs: {
        NuxtLink: RouterLinkStub
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});