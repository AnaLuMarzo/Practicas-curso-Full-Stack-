//creo un objeto VUE:
const app= new Vue({
    el :"#app", //id q voy a modificar
    data:{   //voy a almacenar un dato solo: personas
        personas:[]  //va un arreglo
    },
    created(){
        this.fetchData('https://randomuser.me/api/') //cuando se crea el objeto main llama a esta funcion
    },
     methods:{  //las funciones las tengo definida en el atributo metodos
         fetchData(url){
             fetch(url)
                 .then(response => response.json())
                 .then(data =>{
                 this.personas=data.results;
                })  //todo lo que mande a pedir me lo pone en el data. data.results es del JSON de todo el JSON de la url solo quiero el "results"
         }//llamo a la funcion fechData de JS
     } //Cuando creas el objeto Vue ejecutas esta funcion: ejecutando la funcion fetch q ya tiene JS pasale la url y cuando el fetch te conteste esos datos guardalos en mi arreglo de personajes
})