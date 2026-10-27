# Calculadora Fullstack 🧮

Projeto de uma aplicação web de calculadora simples desenvolvida com arquitetura Fullstack, separando as responsabilidades de interface (Frontend) e de processamento lógico/API (Backend).

## 🚀 Tecnologias Utilizadas

* **Backend:** Node.js, Express, Cors
* **Frontend:** HTML5, CSS3 (Tema Escuro), JavaScript (Fetch API)
* **Controle de Versão:** Git e GitHub

## 📁 Estrutura do Projeto

```text
├── public/
│   └── index.html      # Interface visual da calculadora (Frontend)
├── .gitignore          # Arquivos ignorados pelo Git
├── calculadora.js      # Servidor e rotas da API (Backend)
├── package.json        # Gerenciador de dependências do Node
└── README.md           # Documentação do projeto

⚙️ Funcionalidades da Versão Base

[x] Operações matemáticas básicas: Soma (+), Subtração (-), Multiplicação (*) e Divisão (/).

[x] Tratamento de erros para divisão por zero.

[x] Comunicação assíncrona entre Frontend e Backend via requisições POST (JSON).

🔧 Como Executar o Projeto Localmente

1. Clone o repositório:
git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)

2. Navegue até a pasta do projeto:
cd calculadora

3. Instale as dependências do Node.js:
npm install

4. Inicie o servidor Backend:
node calculadora.js

5. Acesse o navegador: 
Abra a URL http://localhost:3000 para utilizar a calculadora.

### Como salvar no seu projeto:

1. Abra o arquivo `README.md` no VS Code (ou crie um se não existir na raiz do projeto).
2. Apague o texto que estiver lá, cole este conteúdo e aperte **`Ctrl + S`** para salvar.
3. Agora você pode seguir com o primeiro commit na branch `main`:
   ```powershell
   git add .
   git commit -m "docs: adiciona README com documentacao base do projeto"
   git branch -M main
   git push -u origin main --force