let app = new Vue({
    el: "#container",
    data: {
        corrente : 0,
        elenco : [
            {
                pic: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                pic: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },	
            {
                pic: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                pic: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                pic: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            }
        ],
    },
    methods : {
        iscorrente: function(indiceimmagine){
           
            return indiceimmagine == this.corrente
           
        },

        indietro: function(elenco){
            this.corrente--;
            if(this.corrente < 0){
                this.corrente = elenco.length - 1;
            }
        },
        
        successivo: function(elenco){
            this.corrente++;
            if(this.corrente == elenco.length){
                this.corrente = 0;
            }
        }
    
    }
});