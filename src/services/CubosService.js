import axios from "axios"
import { Global } from "@/Global";

export default class CubosService {
    getMarcas(){
        return new Promise((resolve)=>{
            const endpoint = 'api/Cubos/Marcas';
            let url = Global.urlCubos + endpoint;
            axios.get(url)
            .then(response => {
                resolve(response.data)
            })
        })
    }

    getCubos(){
        return new Promise((resolve)=>{
            const endpoint = 'api/Cubos';
            let url = Global.urlCubos + endpoint;
            axios.get(url)
            .then(response => {
                resolve(response.data)
            })
        })
    }

    getCubosMarca(marca){
        return new Promise((resolve)=>{
            const endpoint = 'api/Cubos/CubosMarca/'+marca;
            let url = Global.urlCubos + endpoint;
            axios.get(url)
            .then(response => {
                resolve(response.data)
            })
        })
    }

    getCuboId(id){
        return new Promise((resolve)=>{
            const endpoint = 'api/Cubos/'+id;
            let url = Global.urlCubos + endpoint;
            axios.get(url)
            .then(response => {
                resolve(response.data)
            })
        })
    }

    getComentariosId(id){
        return new Promise((resolve)=>{
            const endpoint = 'api/ComentariosCubo/GetComentariosCubo/'+id;
            let url = Global.urlCubos + endpoint;
            axios.get(url)
            .then(response => {
                resolve(response.data)
            })
        })
    }

    setLogin(user){
        return new Promise((resolve, reject)=>{
            const endpoint = 'api/manage/login';
            let url = Global.urlCubos + endpoint;
            let headers = {
                'Content-type': 'application/json'
            }
            axios.post(url, user, {headers: headers})
            .then(response => {
                resolve(response.data.response)
            })
            .catch(error => {
                reject(error)
            })

        })
    }

    getPerfil(token){
        return new Promise((resolve)=>{
            const endpoint = 'api/Manage/PerfilUsuario';
            let url = Global.urlCubos + endpoint;
            let header = {
                'Authorization': token,
                'Content-type': 'application/json'
            }
            
            axios.get(url, {headers: header})
            .then(response => {
                resolve(response.data)
            })
        })
    }

    getCompras(token){
        return new Promise((resolve)=>{
            const endpoint = 'api/Compra/ComprasUsuario';
            let url = Global.urlCubos + endpoint;
            let header = {
                'Authorization': token,
                'Content-type': 'application/json'
            }
            
            axios.get(url, {headers: header})
            .then(response => {
                resolve(response.data)
            })
        })
    }
}