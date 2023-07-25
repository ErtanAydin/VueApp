<template>
  <div >
    <div class="CarouselBody">
        <Carousel @next="next" @prev="prev" class="Carousel">
            <CarouselSlide v-for="(slide,index) in slides" :key="index" :index="index" :visibleSlide="visibleSlide">
                <a href="#"><img :src="slide.url"/></a>
            </CarouselSlide>
        </Carousel>
    </div>
    <div class="UrunlerBody">
        <div class="CokSatanUrunler">
            ÇOK SATAN ÜRÜNLER
        </div>
        <UrunListeleme class="Urunler"/>
    </div>
  </div>
</template>

<script>
  import Carousel from '@/components/Carousel'
  import CarouselSlide from '@/components/CarouselSlide'
  import UrunListeleme from '@/components/UrunListeleme'
  
  export default {

    data(){
        return{
            visibleSlide: 0,
            interval: undefined,
        }
    },

    computed: {
        slides () {
            return this.$store.state.slides
        },

        slidesLen() {
            return this.$store.state.slides.length;
        }
    },
    methods: {
        init() {
            this.interval = setInterval(() => {
                this.visibleSlide++;
                if(this.visibleSlide >= this.slidesLen) {
                    this.visibleSlide = 0;
                }
            }, 5000);
        },         
        next() {
            if(this.visibleSlide >= this.slidesLen -1) {
                this.visibleSlide = -1;
            }else {
                this.visibleSlide++;
            }
        },
        prev() {
            if(this.visibleSlide <= 0) {
                this.visibleSlide = this.slidesLen -1;
            }else {
                this.visibleSlide--;
            }
        }        
    },
    mounted() {
        this.init();
    },
    created() {
        this.$store.dispatch('slidesfetch')
    },

    components:{
      Carousel,
      CarouselSlide,
      UrunListeleme
    }
  }
</script>

<style>
.CarouselBody {
    max-width: 64%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 30px;
}
.UrunlerBody {
    max-width: 70%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;
}
.CokSatanUrunler {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 30px;
    transform: scaleY(1.2);
    font-family: 'Oswald', sans-serif;
}
</style>
