

    // Modelo (Model) de dados de um usuário
    //
    // Sua função é lidar com a busca, armazenamento e processamento de dados.
    class UserModel
    {
        // Definimos as propriedades do nosso objeto
        constructor() { console.log("Model: Fui criada!");

            this._nome = "";
            this._imagem = "";
        }

        // Buscamos um usuário na API
        buscaUsuario()
        {
            console.log("Model: Buscando um usuário...");

            // Criamos uma request
            let request = new XMLHttpRequest();
            
            // Dizemos o que fazer quando uma response chegar
            request.addEventListener( "load", () =>
            {
                // Se o status da response é 200 OK...
                if ( request.status == 200 )
                {
                    // Processamos os dados da response
                    let dados = this._processaResponse( request.responseText );
                    // e atualizamos as propriedades dessa model
                    this._atualiza( dados );
                }
            })

            // Configuramos a request para buscar de forma
            // síncrona os dados da API
            request.open( "GET", "https://randomuser.me/api", false );

            // Mandamos a request
            request.send();
        }

        // Como a response vem como uma string, nós precisamos
        // processar esses dados para que possamos trabalhar
        // com eles
        _processaResponse( responseString )
        {
            console.log("Model: Processando response...");

            let response = JSON.parse( responseString );
            return response.results[0];
        }

        // Atualizamos os dados da nossa model de acordo com os
        // dados da response da API
        _atualiza( dados )
        {
            console.log( "Model: Atualizando os meus dados" );

            this._nome = dados.name.first + " " + dados.name.last;
            this._imagem = dados.picture.large;
        }

        // Método para devolver o nome do usuário
        getNome()
        {
            return this._nome;
        }

        // Método para devolver a imagem do usuário
        getImagem()
        {
            return this._imagem;
        }
    }

    // Visualização (View) de um usuário
    //
    // Sua função é lidar com a disponibilização de dados para o usuário final.
    class UserView
    {
        // Construtor vazio: nossa view não tem atributos!
        constructor() { console.log("View: Fui criada!"); }

        // Método encarregado de pegar os dados da model de usuário
        // e mostrar na tela de alguma forma
        render( model )
        {
            console.log( "View: Recebi um usuário e vou criar uma visualização" );

            // Criamos uma div
            let card = document.createElement( "div" );
            
            // Colocamos foto e nome
            card.innerHTML = `
                <img src=${ model.getImagem() }>
                <p>${ model.getNome() }</p>
            `
            // Adicionamos a div ao nosso documento
            document.body.appendChild( card );
        }
    }

    // Controlador (Controller) de um usuário
    //
    // Sua função é ser o ponto de entrada da plataforma e mediar as models e as views.
    class UserController
    {
        // Também não precisamos de propriedades nessa controller
        constructor() { console.log("Controller: Fui criada!"); }

        // Função chamada quando queremos adicionar um usuário
        adicionaUsuario()
        {
            console.log( "Controller: Vou adicionar um usuário..." );

            // Criamos uma model e buscamos dados
            let user = new UserModel();
            user.buscaUsuario();

            // Passamos os dados para a view
            let view = new UserView();
            view.render( user );
        }
    }
    
    // Criamos a nossa controller (precisamos de um ponto de entrada)
    let controller = new UserController();
    
    // Lidamos com o input do lado de fora:
    document.getElementById( "busca" ).addEventListener( "click", controller.adicionaUsuario );

