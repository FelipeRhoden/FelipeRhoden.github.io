Vue.component('navbar',{
    template: `
        <div id="navBar" class="w3-bar navBBlue">
            <a :href="brand.link"  
                class="w3-bar-item" 
                style="font-weight: bold; text-decoration: none;">
                {{brand.name}}
            </a>
            <a v-for="link in itens"
                :key="link.id" 
                :href="link.link" 
                class="w3-bar-item w3-button w3-hover-blue w3-hide-small">
                {{link.name}}
            </a>

            <a href="javascript:void(0)"
                class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium w3-hover-blue" 
                @click="collapsNavBar">
                &#9776;
            </a>

            <div id="demo" 
                class="w3-bar-block navBBlue w3-hide w3-hide-large w3-hide-medium">
                <a v-for="link in itens" 
                    :key="link.id" 
                    :href="link.link" 
                    class="w3-bar-item w3-button w3-hover-blue">
                    {{link.name}}
                </a>
                
            </div>
        </div>
    `,
    data(){
        return {
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
            ],
        }
    },
    methods: {
        collapsNavBar(){
            let x = document.getElementById("demo");
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
            } else { 
                x.className = x.className.replace(" w3-show", "");
            }
        }
    },
});

Vue.component('navfooter',{
    template: `
        <div class="w3-bar navBGrey" style="position: absolute; bottom: 0;">
            <a href="https://liperrhoden@gmail.com" target="_blank" rel="noopener noreferrer" title="gmail"><img class="w3-bar-item image" src="https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-128.png" alt="Gmail"></a>
            <a href="https://github.com/felipeRhoden/" target="_blank" rel="noopener noreferrer" title="github"><i style="font-size:24px" class="w3-bar-item fa">&#xf09b;</i></a>
        </div>
    `
})

var app = new Vue({
    el : '#app',
    data : {
        repositories: [
            {
                name: 'Malditos Goblins',
                link: 'https://github.com/FelipeRhoden/Malditos-Goblins',
            },
            {
                name: '.Parchment',
                link: 'https://github.com/FelipeRhoden/.parchment',
            },
        ]
    },
});

