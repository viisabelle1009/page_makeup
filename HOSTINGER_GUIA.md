# Guia de Publicação na Hostinger - Vitória Silva Makeup

Este projeto foi preparado especialmente para execução e hospedagem na **Hostinger com Node.js 22**.

---

## 1. Onde Fazer Alterações Manuais (Textos, Preços e Fotos)

Para facilitar sua manutenção sem complicações técnicas, todo o conteúdo editável está concentrado em um único arquivo:
- **`src/data/siteContent.js`**

Neste arquivo você pode alterar:
- Preços dos serviços e do portfólio
- Telefone e link do WhatsApp
- Usuário do Instagram
- Descrições e depoimentos
- Imagens do portfólio

---

## 2. Configurações no Painel da Hostinger (Passo a Passo)

1. Acesse o **hPanel da Hostinger** > **Aplicações** / **Node.js**.
2. Clique em **Criar Aplicação** ou configure seu domínio:
   - **Versão do Node.js:** Escolha **`Node.js 22.x`**
   - **Modo da Aplicação:** `Production` (Produção)
   - **Raiz da Aplicação (*Application root*):** `/` ou `public_html` (pasta onde você fez upload dos arquivos)
   - **Arquivo de Inicialização (*Application startup file / Entry file*):** `server.js`
   - **Porta:** O servidor já reconhece automaticamente a porta gerenciada pela Hostinger (`process.env.PORT || 3000`).

---

## 3. Comandos para Preparar e Iniciar o Site

No terminal SSH ou no console de comandos da Hostinger, execute:

```bash
# 1. Instalar as dependências necessárias
npm install

# 2. Gerar a versão de produção final (cria a pasta 'dist')
npm run build

# 3. Iniciar o servidor de produção
npm start
```

---

## 4. Como Testar se o Site Está Funcionando

- Acesse a URL do seu domínio no navegador (ex: `https://vit-ria-silva-makeup-skin-care.com.br` ou link temporário da Hostinger).
- Você pode checar o status da API acessando: `https://seu-dominio.com/api/health`
  - Resposta esperada: `{"status":"ok","app":"Vitória Silva Makeup & Skin Care"}`
- Teste os botões de agendamento e o formulário para confirmar o redirecionamento ao WhatsApp `(11) 95130-9221`.
