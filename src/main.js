import api from './api'

console.log('Curso ES6 Javascript - Rocketseat')


class App {

    constructor() {
        this.repositories = [];
        this.formElem = document.getElementById("repo-form");
        this.listElem = document.getElementById("repo-list");
        this.inputElem = document.querySelector("input[name=repository]");
        this.registerHandlers();
    }

    registerHandlers() {
        // Alternativas 
        // bind utilizado para reconhecer o this
        /*
        this.formElem.onsubmit = function(event) {
            console.log('registerHandlers');      
            this.addRepository();
        }.bind(this);
        */

        /*
        this.formElem.addEventListener('submit', function(event){
            console.log('registerHandlers');   
            this.addRepository();
        }.bind(this));
        */
        // Arrow function 
        this.formElem.onsubmit = event => this.addRepository(event);

    }

    async addRepository(event){
        console.log('addRepository');
        event.preventDefault();
        
        if(this.inputElem.value.length === 0)
            return;
        this.setLoading();    
        try{
            
            const response = await api.get(`/repos/${this.inputElem.value}`);    
        
            const {name, description, owner:{avatar_url}, html_url } = response.data
    
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });
            
            console.log(this.repositories);
            this.render();
        }catch(e){
            alert('Repositorio não existe');
        }
        this.inputElem.value = "";
        this.setLoading(false);
    }

    render() {
        console.log('render');
        this.listElem.innerHTML = "";
        this.repositories.forEach((repo, index) => {
            //console.log(index);
            let imgElem = document.createElement('img');
            imgElem.setAttribute('src', repo.avatar_url);

            let nameElem = document.createElement('strong');
            nameElem.appendChild(document.createTextNode(repo.name));

            let descriptionElem = document.createElement('p');
            descriptionElem.appendChild(document.createTextNode(repo.description));

            let linkElem = document.createElement('a');
            linkElem.setAttribute('href', repo.html_url);
            linkElem.setAttribute('target', '_blank');
            linkElem.appendChild(document.createTextNode('Acessar'));

            let listItemElem = document.createElement('li');

            listItemElem.appendChild(imgElem);
            listItemElem.appendChild(nameElem);
            listItemElem.appendChild(descriptionElem);
            listItemElem.appendChild(linkElem);

            this.listElem.appendChild(listItemElem);
        });
        
    }

    setLoading(loading = true) {
        if(loading === true){
            let alertLoadingElem = document.createElement('span');
            alertLoadingElem.setAttribute('id', 'loading');
            alertLoadingElem.appendChild(document.createTextNode('Carregando...'));
            this.formElem.appendChild(alertLoadingElem);        
        }else{
            document.getElementById('loading').remove();
        }

    }
}

new App();