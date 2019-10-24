# Protractor
Automatização de teste end-2-end

########################################### PREREQUISITOS ########################################### 
	Instalar
		Instalar Node.js: na época do vídeo (2015)- Node v0.12.4. Podemos instalar versão nova
		Node Package Manager: npm
			PARA WINDOWS: https://www.guru99.com/download-install-node-js.html
		Java 1.7
		Git/Smartgit - para comitar os testes

	INSTALL PROTRACTOR: isto instalará tando o 'protractor', ferramenta 'webdriver' e o jasmine
		npm install -g protractor
	TESTAR SE INSTALOU
			protractor --version
			npm view jasmine version
	UPDATE WEBDRIVER.
		webdriver-manager update
		Esta é uma ferramenta para facilmente iniciar o servidor SELENIUM, com a aplicação
	START webdriver, para testar
		webdriver-manager start
		Por padrão, a porta é a 4444, logo, acessar: localhost:4444
		Use 'ctrl + c' no terminal, para parar o servidor

	Instalar pacote para ver relatório NO CONSOLE
		npm install -g jasmine-spec-reporter --save-dev
			Fonte: https://medium.com/@gtgunarathna/test-result-report-configuration-for-protractor-test-suite-c36f58b7b616
		npm install -g colors
			Para usar cores no relatório

	Instalar pacote para relátorio em html
		OPÇÃO 1
		npm install protractor-jasmine2-html-reporter --save-dev
			Aqui temos opção de screenshot do resultado
			Fonte: https://www.npmjs.com/package/protractor-jasmine2-html-reporter
		OPÇÃO 2
			npm install protractor-html-reporter-2
				Fonte: https://www.npmjs.com/package/protractor-html-reporter-2
		OPÇÃO 3 (Escolhida pelo time QA)
			npm install -g protractor-beautiful-reporter --save-dev
				Fonte: https://www.npmjs.com/package/protractor-beautiful-reporter

################
LIDANDO COM PROBLEMAS
################
	
	TENTE LIMPAR E REINSTALAR WEBDRIVERS
		webdriver-manager clean
		webdriver-manager status
		webdriver-manager update

	TENTE MUDAR VERSÃO CHROMEDRIVER PARA 2.37
	NO LINUX
		Remover versão existente
			rm /usr/local/bin/chromedriver
		Install ChromeDriver
			//wget -N http://chromedriver.storage.googleapis.com/2.37/chromedriver_linux64.zip -P ~/
		Verificar versão
			chromedriver -v
		FONTE: https://gist.github.com/ziadoz/3e8ab7e944d02fe872c3454d17af31a5

########################################### STARTING ###########################################

VIDEOS BASE: https://www.youtube.com/watch?v=zpwQ8vAXhJ0

	Protractor precisa de 2 arquivos
		conf.js: arquivo de configuração que, dentre outras coisas, o endereço do selenium rodando a aplicação de teste, e o arquivo com as especificações de teste, o specBy.js
			Exemplo de um conf.js:
				exports.config = {
					seleniumAddress: 'http://localhost:4444/wd/hub',
					specs: ['specBy.js']
				}

		specBy.js: arquivo com a especificação de testes que serão executados
			Exemplo de um specBy.js:
				describe('Choko demo', function(){
					it('title', function (){
						browser.driver.get('http://demo.choko.org');
						var title = element(by.css('h1'));
						expect(title.getText()).toEqual('Demo application');
					});
				});

	Jasmine é biblioteca para testes unitários

########################################### LOCALIZADORES ###########################################

Fonte: http://www.protractortest.org/#/api?view=ProtractorBy


	#Específicos para aplicações AngularJS
		-by.binding
			Exemplo de app:
				<span>{{person.name}}</span>
				<span> ng-bind="person.email"></span>
			Localizando...
				var elto =  element(by.binding('person.name'));
				var elto2 = element(by.binding('person.email'));
		
		-by.model
			Exemplo
				<input type="text" ng-model="person.name">
			Localizando...
				var elto = element(by.model('person.name'));
		
		-by.repeater
			Exemplo
				<div ng-repeat="cat in pets">
					<span>{cat.name}</span>>
					<span>{cat.age}</span>
				</div>
			Localizando...
				var elto = element(by.repeater('cat in pets').row(1)); --pega o segundo gato do array
				var elto2 = element(by.repeater('cat i  pets').row(0).column('cat.age'));

		-by.options
			Exemplo
				<select ng-model="color" ng-options="c for c in colors">
					<option value="0" selected="selecte">red</option>
					<option value="1">green</option>
				</select>
			Localizando...
				var allOption = element.all(by.options('c for c in colors')); --'element.all' todos as opções do Select
				var firstOption = allOptions.first();

	#Para qualquer aplicações web
	-by.id
		Exemplo
			<div id="meuId">'teste'</div>
		Localizando...
			var elto =  element(by.id('#meuId')); -- retornará exatamente a div com o referido ID
	
	-by.className
		Exemplo
			<div class="minhaclasse">'teste'</div>
		Localizando..
			element(by.className('minhaClasse'))
	
	-by.css
		Busca pelas tags
		Exemplo
			<div>
				<a href="http://google.com"></a>
			</div>
		Localizando...
			var elto = element(by.css('div a'))	--retornará o 'a' dentro da div
	
	-by.cssContaningText
		Exemplo
			<div>
				<a href="http://google.com">Link</a>
				<a href="http://google.com">Test</a>
			</div>
		Localizando
			element(by.cssContainingText('div a', 'Link')); --encontra duas tags 'a' mas retorna aquela com o texto 'Link'

	-by.buttonText
		Exemplo
			<button>Login</button>
		Localizando...
			element(by.buttonText('Login'));

	-by.partionButtonText
		Exemplo
			<button>Login Facebook</button>
			<button>Login Google</button>
		Localizando...
			element(by.partialButtonText('Google'));--retorna botão com texto Google
			Ou
			element(by.partialButtonText('Facebook'));--retorna botão com texto Facebook

########################################### AÇÕES ###########################################

	Após encontrar o elemento acima, podemos realizar algumas ações como clique, limpar campo, preencher campo, ler valor do campo....

	var el = element(by.css('.minhaClasse'));
		-click
			el.click()
		-preenche input
			el.sendKeys('texto')
		-limpa input
			el.clear()
		-pega o texto do input
			el.getAttribute('value');

########################################### VERIFICANDO ########################################### 
	-se texto de elemento é IGUAL
		expect(el.getText()).toEqual('texto')
	-se texto de elemento CONTEM
		expect(el.getText()).toContais('texto')
	-se elemento está sento exibido
		expect(el.isDisplayed()).toBe(true)
	-se elto está presente
		expect(el.isPresent()).toBe(true)

NAVEGADORES SUPORTADOS
	Chrome, Firefox, Safari e IE


########################################### CONFIGURAÇÕES GERAIS ###################################
	- Mudando a porta default do WEBDRIVER
		OPÇÃO 1
			-Por que aprender a executar o selenium em uma porta diferente da default(4444)?
				Muitas vezes é possível que a porta default esteja ocupada por outro processo
			-HOW: Na linha de comando, iniciar o selenium na porta 4443:
				webdriver-manager start --seleniumPort 4443
			-Lembrar de atualizar o arquivo conf.js com a porta nova
			-Rodar novamente o teste
				protractor conf.js

		OPÇÃO 2
			-Sobreescrever a configuração do arquivo conf.js direto no comando de execução do teste:
				protractor conf.js --seleniumAddress http://localhost:4443/wd/hub

	- Expecificando o navegador que rodará o teste
		Por default, o protractor utiliza o Chrome. Mas pode-se alterar isto, definindo um objeto 'capabilities'. 
		Para isso, no do arquivo conf.js, adiciona-se uma nova linha de configuração dentro de 'exports.config':
			exports.config = {
				...
				,	
				capabilities: {
					browserName: 'firefox'
				}
			}

	- Testando em browsers diferentes, de forma paralela
		É possível executar os mesmos testes do specBy.js de forma paralela em mais de um navegador suportado pelo protractor. Para isso, adiciona-se o objeto 'multiCapabilities', que recebe um array de capabilities:
			exports.config = {
				...
				,
				multiCapabilities : [
					{
						browserName: 'firefox'
					},
					{
						browserName: 'chrome'
					}
				]
			}
		OBSERVAÇÃO: os testes em geral são mais lentos no Firefox. A dica do instrutor é usar o padrão, o Chrome

	- Definindo um URL base para todos os testes
	  E executando os testes com um URL relativa
		Porque é interessante fazer isso?
			No AngularJS, o sistema de rotas tem como base a URL da aplicação. Quando uma navegação é necessária, o sistema de rotas utiliza a URL relativa ao invés da url completa. Logo, para os testes, também se usa esta lógica, definindo qual a URL base da aplicação, no arquivo de configuração. E no arquivo de testes (specBy.js), quando for necessário navegar entre páginas, escreve-se as URLs relativas.
		No arquivo conf.js, dentro de 'exports.config', adicionamos nova linha:
			exports.config = {
				...
				,
				baseURL: 'http://demo.choko.org/'
			}
		No arquivo specBy.js, ao invés de escrevermos toda a URL da aplicação que será testada, adicionamos apenas uma barra para os teste identificar a URL base da configuração:
			ANTES:
				browser.driver.get('http://demo.choko.org');
			DEPOIS:
				browser.get('/')
		Agora, com a URL base definida, se o testador quiser testar a página de login, pode usar a URL relativa
				browser.get('/sign-in')


########################################### 
BOAS PRÁTICAS
###################################
https://talkingabouttesting.com/2014/10/08/reflexao-e-um-pouco-de-codigo-sobre-boas-praticas-na-escrita-de-testes-e2e-com-protractor/

https://stackoverflow.com/questions/24782783/how-to-reuse-code-in-protractor-angularjs-testing

https://medium.com/@gtgunarathna/test-result-report-configuration-for-protractor-test-suite-c36f58b7b616
