    //con esto ya hago mi Vue
    const app=new Vue({   //necesito min dos prop
        el: "#app",// pongo la etiqueta de html q quiero modificar con el id tal...
        data:{
            msj:"Hello word desde Vue",  //creo una propiedad: mensaje
            otroMensaje:"Otro mensaje desde VUE",
            imagen1: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            imagen2: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            desc1:"Ricky",
            desc2:"Morty",
            //arreglo con las 4 fotos
            fotos:[
                "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
            ],
            personajes:[  //arreglo con dos personajes
                {
                    "id":1,
                    "name":"Rick noseque", 
                    "status":"alive",
                    "species":"human",
                    "gender":"male",
                    "image":"https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                },
                {
                    "id":2,
                    "name":"Morty nosecuanto",
                    "status":"alive",
                    "species":"human",
                    "gender":"male",
                    "image":"https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                
                }
            ]
        }
    })

    const ejemplo=new Vue({   //necesito min dos prop
        el: "#ej" 
    })