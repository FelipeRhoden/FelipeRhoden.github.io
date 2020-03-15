

let navBar = new Vue({
    el : '#navBar',
    data : {
        brand : {
            name : "Felipe Rhoden",
            link : "https://felipeRhoden.github.io",
            img : ""
        },
        itens : [
            {
                id : 1, 
                name : 'Home',
                link : 'https://felipeRhoden.github.io', 
            },{
                id : 2,
                name : 'Sobre',
                link : './sobre.html' 
            }
        ]
    },
    methods : {
        collapsNavBar(){
            let x = document.getElementById("demo");
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
            } else { 
                x.className = x.className.replace(" w3-show", "");
            }
        }
    }
})

