
export const state = () => ({
   Urunler: [],
   Sepet: [],
   Navbar: [],
   slides: [],
   visibleSlide:0,
})

export const getters = () => ({
   StoktakiUrunler(state, getters) {
      return state.Urunler.filter(Urun => Urun.adet > 0)
   },

   SepetToplam(state, getters) {
      return getters.SepetUruleri.reduce((toplam, Urun) => toplam + Urun.fiyat * Urun.adet, 0)
   },

   StoktaVarMı() {
      return (Urun) => {
         return Urun.adet > 0
      }
   }
})

export const actions = {

   async Urunlerfetch({ commit }) {
      const urunler = await this.$fire.database.ref("Urunler").once("value");
      commit("setUrunler", urunler.val());
   },

   async Navbarfetch({ commit }) {
      const Navbar = await this.$fire.database.ref("Navbar").once("value");
      commit("setNavbar", Navbar.val());
   },

   async slidesfetch({ commit }) {
      const slides = await this.$fire.database.ref("slides").once("value");
      commit("setslides", slides.val());
   },

   async Sepetfetch({ commit }) {
      const Sepet = await this.$fire.database.ref("Sepet").once("value");
      commit("setSepet", Sepet.val());
   },
      
  
   SepeteEkle({ state, getters, commit }, Urun) {
      
      const SepetUrunu = state.Sepet.find(item => item.id === Urun.id)
      if (!SepetUrunu) {
         commit('SepetDizisineEkle', Urun.id)
      } else {
         commit('AdetiArttır', SepetUrunu)
      }
      commit('AdetiAzalt', Urun)
   },
}

export const mutations = {
   setUrunler(state, Urunler) {
      state.Urunler = Urunler
   },

   setNavbar(state, Navbar) {
      state.Navbar = Navbar
   },
   setslides(state, slides) {
      state.slides = slides
   },

   setSepet(state, Sepet) {
      state.Sepet = Sepet
   },

   SepetDizisineEkle(state, UrunId) {
      state.Sepet.push(UrunId)
   },

   AdetiArttır(state, SepetUrunu) {
      SepetUrunu.counter++
   },

   AdetiAzalt(state, Urun) {
      Urun.counter--
   },

   SepetBoşaltma(state) {
      state.Sepet = []
   }
}
