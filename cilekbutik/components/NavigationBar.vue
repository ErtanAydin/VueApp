<template>
    
    <div>
        <ul  class="navbar">
            <div v-for="(NavBarElement,index) in Navbar" :key="NavBarElement.id">
                <li v-if="index === 0" class="Navbarli"><NuxtLink to="/Kategoriler" class="active"> <i class="fa fa-bars mr-2 pl-2 pr-2" style="margin-right:8px;"></i>{{NavBarElement.name}}</NuxtLink></li>
                <li v-if="index === 1" class="Navbarli" id="UstGiyimDropdown">
                    <NuxtLink to="/Kategoriler">{{NavBarElement.name}}</NuxtLink>
                    <ul v-if="NavBarElement.id === 1" class="dropdownUstGiyim">
                        <li  v-for="index in 5" :key="index" class="DropdownLi"><NuxtLink to="/Kategoriler">{{NavBarElement.üstgiyim[index-1].name}}</NuxtLink></li>
                        <li id="DropdowLiSon" class="DropdownLi"><NuxtLink to="/Kategoriler">{{NavBarElement.üstgiyim[5].name}}</NuxtLink></li>
                    </ul>
                </li>
                <li v-if="index === 2" class="Navbarli" id="AltGiyimDropdown">
                    <NuxtLink to="/Kategoriler">{{NavBarElement.name}}</NuxtLink>
                    <ul v-if="NavBarElement.id === 2" class="dropdownAltGiyim">
                        <li v-for="index in 5" :key="index" class="DropdownLi"><NuxtLink to="/Kategoriler">{{NavBarElement.altgiyim[index-1].name}}</NuxtLink></li>
                        <li id="DropdowLiSon2" class="DropdownLi"><NuxtLink to="/Kategoriler">{{NavBarElement.altgiyim[5].name}}</NuxtLink></li>
                    </ul>
                </li>
                <li v-if="index === 3" class="Navbarli" id="DIŞGiyimDropdown">
                    <NuxtLink to="/Kategoriler">{{NavBarElement.name}}</NuxtLink>
                    <ul v-if="NavBarElement.id === 3" class="dropdownDIŞGiyim">
                        <li v-for="index in 4" :key="index" class="DropdownLi"><NuxtLink to="/Kategoriler">{{NavBarElement.dışgiyim[index-1].name}}</NuxtLink></li>
                    </ul>
                </li>
                <li v-if="index === 4" class="Navbarli"><NuxtLink to="/Kategoriler">{{NavBarElement.name}}</NuxtLink></li>
                <li v-if="index === 5" class="Navbarli"><NuxtLink to="/Kategoriler">{{NavBarElement.name}}</NuxtLink></li>
                <li v-if="index === 6" class="Navbarli"><NuxtLink to="/Kategoriler">{{NavBarElement.name}}</NuxtLink></li>
                <li v-if="index === 7" class="Navbarli"><NuxtLink to="/Kategoriler">{{NavBarElement.name}}</NuxtLink></li>
                <li v-if="index === 8" class="Navbarli"><NuxtLink to="/Kategoriler">{{NavBarElement.name}}</NuxtLink></li>
            </div>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "Navbar",

        computed: {
        
            Navbar () {
                return this.$store.state.Navbar
            },

        },
        created() {
            this.$store.dispatch('Navbarfetch')
        }
    };
</script>

<style scoped>

.navbar {
  list-style-type: none;
  margin: 0px;
  height:60px;
  overflow: hidden;
  background-color: #222;
  flex-wrap: wrap;
  margin-left:-10px;
  margin-right:-10px;
  padding-left:350px;
}

.dropdownUstGiyim,
.dropdownAltGiyim,
.dropdownDIŞGiyim{
  list-style-type: none;
  margin-top:60px;
  overflow: hidden;
  background-color: #ed2c3b;
  display:none;
  position:absolute;
  z-index: 2;
  width:1200px;
  height:100px;
}

.dropdownUstGiyim{
   margin-left:-220px;
}

.dropdownAltGiyim{
   margin-left:-343px;
}

.dropdownDIŞGiyim{
    margin-left:-463px;
}

.DropdownLi{
    display:block;
    float:left;
    padding-right: 155px;
}

#DropdowLiSon{
    padding-left:35px;
}

#DropdowLiSon2{
    padding-left:60px;
}
#UstGiyimDropdown{
    display:flex;
}

#UstGiyimDropdown:hover .dropdownUstGiyim{
     display:inline-block;
}

#AltGiyimDropdown:hover .dropdownAltGiyim{
     display:inline-block;
}

#DIŞGiyimDropdown:hover .dropdownDIŞGiyim{
     display:inline-block;
     height:70px;
}


.Navbarli {
  float: left;
  margin-right:20px;
  letter-spacing: -1px;
  height:60px;
  text-align: center;
  display:flex;
  flex-basis: 100%;
}

li a {
  display: block;
  color: white;
  text-align: center;
  font-weight: 600;
  font-size:14px;
  padding-top:20px;
  padding-right:20px;
  padding-left:20px;
  text-decoration: none;
  font-family: 'Oswald', sans-serif;
  transform: scaleY(1.2)
}

li:hover:not(.active) {
  background-color:#ed2c3b;
}

.active {
  background-color: #ed2c3b;
  padding-left:30px;
}

.MenuIcon{
    padding-right:10px;
}

</style>