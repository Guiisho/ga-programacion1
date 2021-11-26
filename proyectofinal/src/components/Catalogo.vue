<template>
    <div class="row">


        <div v-for="p of listaProductos" v-bind:key="p.id" class="col-3">
            
            <div class="card">
                <img :src="p.URL" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{p.descripcion}}</h5>
                    <p class="card-text">{{p.precio}}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import {db} from '@/utils/firebase.js'
import {collection,  onSnapshot} from 'firebase/firestore'
export default {
    name: 'Catalogo',
    data()
    {
        return{
            listaProductos:[]
        }
    },
    methods:{
        adquirirCatalogo()
        {
            onSnapshot(collection(db, 'catalogo'), (snapshot) =>{
                this.listaProductos=[]
                snapshot.docs.map((doc) =>{
                    this.listaProductos.push({...doc.data(),id:doc.id})
                })
            })
        }
    },

    mounted(){
        this.adquirirCatalogo()
    }
}
</script>