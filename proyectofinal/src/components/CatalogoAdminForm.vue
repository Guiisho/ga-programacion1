<template>
<div class="row">
<div class="col-4">
    <div class="mb-3 mt-3">
        <label class="form-label">Descripción</label>
        <input v-model="d" class="form-control" type="text" placeholder="Ingrese descripción">
    </div>
     <div class="mb-3">
        <label class="form-label">Precio</label>
        <input v-model="p" class="form-control" type="text" placeholder="Ingrese precio">
    </div>
     <div class="mb-3">
        <label class="form-label">Porcentaje de descuento</label>
        <input v-model="pd" class="form-control" type="text" placeholder="Ingrese el porcentaje de descuento">
    </div>
     <div class="mb-3">
        <label class="form-label">Categoría</label>
        <input v-model="c" class="form-control" type="text" placeholder="Ingrese categoría">
    </div>
     <div class="mb-3">
        <label class="form-label">Stock</label>
        <input v-model="s" class="form-control" type="text" placeholder="Ingrese stock">
    </div>
     <div class="mb-3">
        <label class="form-label">Estado</label>
        <input class="form-control" type="text" placeholder="Ingrese estado">
    </div>
    <div class="mb-3">
        <label class="form-label">Agregar Imagen</label>
        <input @change="vista_previa()" id="formcatsm" class="form-control" type="file">
    </div>
    <div class="mb-3">
    <img :src="preview" class="img-fluid">
</div>
    <div>
        <button v-if="estado ==0" @click="guardarCatalogo()"  class="btn btn-success">Mostrar datos</button>
    </div>
</div>
    <div class="col-8">
        <table class="table">
            <thead>
                <tr>
                    <th>IMG</th>
                    <th>DESCRIPCIÓN</th>
                    <th>PRECIO</th>
                    <th>% DESCUENTO</th>
                    <th>CATEGORÍA</th>
                    <th>STOCK</th>
                    <th>ESTADO</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="catalogo of lista_catalogo" v-bind:key="catalogo.id">
                    <td><img style="width:2.5rem" :src="catalogo.URL" alt=""></td>
                    <td>{{catalogo.descripcion}}</td>
                    <td>{{catalogo.precio}}</td>
                    <td>{{catalogo.pdescuento}}</td>
                    <td>{{catalogo.categoria}}</td>
                    <td>{{catalogo.stock}}</td>
                    <td>
                        <template v-if="catalogo.estado==0">
                            inactivo
                        </template>
                        <template v-else>
                            activo
                        </template>
                    </td>
                         <td>
                             <button @click="eliminarCatalogo(catalogo.id)" class="btn btn-danger btn-sm">X</button>
                        <button @click="editarCatalogo(catalogo)" class="btn btn-primary btn-sm ms-1">Edit</button>
                    </td>
                   
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import {db, storage} from '@/utils/firebase.js'
import {collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc} from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
export default {
    name: 'CatalogoAdminForm',
    data(){
        return{
            descripcion: '',
            precio:'',
            pdescuento:'',
            categoria:'',
            stock:'',
            estado:0,
            lista_catalogo:[],
            id:null,
            preview:null,
            URL:null
        }
    },
    
    methods:{
         async guardarCatalogo()
        {
            await this.subirCatalogo()
            const unCatalogo={
                descripcion:this.d,
                precio:this.p,
                pdescuento:this.pd,
                categoria:this.c,
                stock:this.s,
                URL:this.URL

            }
            const coleccion=collection(db,'catalogo')
            await addDoc(coleccion, unCatalogo)
        },
        adquirirCatalogo()
        {
            onSnapshot(collection(db, 'catalogo'), (snapshot) =>{
                this.lista_catalogo=[]
                snapshot.docs.map((doc) =>{
                    this.lista_catalogo.push({...doc.data(),id:doc.id})
                })
            })
        },

        eliminarCatalogo(id)
        {
            deleteDoc(doc(db,'catalogo',id))
        },
        editarCatalogo(unCatalogo)
        {
            this.descripcion= unCatalogo.descripcion;
            this.precio=unCatalogo.precio;
            this.pdescuento=unCatalogo.pdescuento;
            this.categoria=unCatalogo.categoria;
            this.stock=unCatalogo.stock;
            this.estado=1;
        },
        actualizarCatalogo()
        {
            const catalogoCambiado={
                descripcion:this.descripcion,
                precio: this.precio,
                pdescuento: this.pdescuento,
                categoria: this.categoria,
                stock: this.stock,
            }
             updateDoc(doc(db,'catalogo',this.id), catalogoCambiado)
             this.estado=0;
             this.descripcion='';
             this.precio='';
             this.pdescuento='';
             this.categoria='';
             this.stock='';
        },
         async subirCatalogo()
        {
            const archivo= document.getElementById("formcatsm").files[0]
            const config= ref(storage, 'CatalogoAdminForm/' + archivo.name)
            await uploadBytes(config, archivo).then(() => {
                alert ('Genial')
            })

            this.URL= await getDownloadURL(config)
        },
        vista_previa()
        {
            this.preview= URL.createObjectURL(document.getElementById('formcatsm').files[0])
        }

        
    },
    mounted()
    {
        this.adquirirCatalogo()
    }
}
</script>