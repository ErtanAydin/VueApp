<template>
    <div class="UyeGirisiDiv">
        <h3 class="UyeGirisiBaslık">
            Üye Girişi
        </h3>
        <form @submit.prevent="onayla">
            <p class="UyeGirisiEposta"> E-Posta Adresiniz</p>

            <input type="text" v-model="eposta" class="UyeGirisiInput"/>

            <p class="UyeGirisiSifre"> Şifre</p>

            <input type="password" v-model="sifre" class="UyeGirisiInput"/>
            <div class="SagText">
                <a href="https://www.cilekbutik.net/uye-giris?sayfa=sifre" class="UyeGirisiLink">Şifremi Hatırlat</a>
            </div>

            <button type="submit" class="GirisYapButon"> Giriş Yap </button>
        </form>
    </div>
</template>

<script>

import firebase from 'firebase'
require('firebase/auth')

export default {
    data(){
        return{
            user:'',
            eposta: '',
            sifre: '',
            errors: ''
        }
    },
    mounted(){
      firebase.auth().onAuthStateChanged(user => {
        this.user = user;
      })
    },
    methods:{
        onayla(){
            firebase.auth().signInWithEmailAndPassword(this.eposta, this.sifre).then(user => {
                this.$router.push('/')
                console.clear()
                console.log(this.eposta + ' giris yapildi') 
            })  
        }
    }
    
}
</script>

<style scoped>

    .UyeGirisiDiv{
        width: 650px;
        border-width:0.1px;
        border-style: solid;
        border-color:#E5E7E9;
        display:block;
        border-radius: 4px;
        padding-left:15px;
        height:310px;
    }

    .UyeGirisiBaslık{
        font-size:19px;
        letter-spacing:-1px;
        font-weight: 600;
        color:#212529;
        font-family: 'Oswald', sans-serif;
        padding-top:5px;
    }

    
    .UyeGirisiEposta,
    .UyeGirisiSifre{
        letter-spacing:-1px;
        font-size:15px;
        font-weight: 500;
        font-family: 'Oswald', sans-serif;
        cursor: default;
    }

    .UyeGirisiEposta{
        margin-top:45px;
    }

    .UyeGirisiSifre{
        margin-top:20px;
    }

    .UyeGirisiInput{
        width:620px;
        height: 35px;
        border-width:0.1px;
        border-style: solid;
        border-color:#E5E7E9;
        border-radius: 4px;
        margin-top:-10px;
    }

    .SagText{
        text-align: right;
    }

    .UyeGirisiLink{
        text-decoration: none;
        color:#fd6120;
        margin-right:15px;
        font-family: 'Oswald', sans-serif;
        letter-spacing:-1px;
    }

    .GirisYapButon{
        border-radius: 4px;
        border:none;
        color:white;
        background:#28a745;
        height:40px;
        width:80px;
        font-family: 'Oswald', sans-serif;
        letter-spacing:0px;
        font-weight: 600;
        cursor:pointer;
        
    }

    .GirisYapButon:hover{
        background-color:#1E8449;
    }

</style>