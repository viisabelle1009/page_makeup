/**
 * =======================================================================
 * SERVIDOR NODE.JS EXPRESS - VITÓRIA SILVA MAKEUP & SKIN CARE
 * Configurado com Boas Práticas de Segurança e Otimizado para Hostinger
 * =======================================================================
 * Arquivo de Entrada (Entry File na Hostinger): server.js
 * Porta: process.env.PORT || 3000
 * =======================================================================
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// 1. SEGURANÇA: Desabilitar o cabeçalho 'X-Powered-By' para ocultar a tecnologia do servidor
app.disable('x-powered-by');

// 2. SEGURANÇA: Cabeçalhos HTTP de Proteção (Security Headers)
app.use((req, res, next) => {
  // Impede que o navegador adivinhe o tipo MIME (MIME sniffing)
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // Proteção contra Clickjacking (permite iframe apenas da mesma origem)
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');

  // Política de Referrer para evitar vazamento de URLs internas
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Desativa permissões não utilizadas pelo site
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Proteção básica XSS para navegadores legados
  res.setHeader('X-XSS-Protection', '1; mode=block');

  next();
});

// 3. SEGURANÇA: Limitação de tamanho do corpo da requisição (previne DoS por flood de memória)
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false, limit: '10kb' }));

// 4. SEGURANÇA: Rate Limiting simples em memória para rotas de API
const ipRequestCounts = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minuto
const MAX_REQUESTS_PER_WINDOW = 60; // Máximo de 60 requisições por minuto por IP

setInterval(() => {
  ipRequestCounts.clear();
}, RATE_LIMIT_WINDOW_MS);

const apiRateLimiter = (req, res, next) => {
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const currentCount = ipRequestCounts.get(clientIp) || 0;

  if (currentCount >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      error: 'Muitas requisições. Por favor, tente novamente em instantes.'
    });
  }

  ipRequestCounts.set(clientIp, currentCount + 1);
  next();
};

// Rota de Health Check protegida com rate limit
app.get('/api/health', apiRateLimiter, (req, res) => {
  res.json({
    status: 'ok',
    app: 'Vitória Silva Makeup & Skin Care',
    timestamp: new Date().toISOString()
  });
});

// Caminho da pasta de arquivos compilados de produção (dist)
const distPath = path.join(__dirname, 'dist');

// Se a pasta 'dist' existir (após executar 'npm run build'), serve os arquivos estáticos de forma segura
if (fs.existsSync(distPath)) {
  app.use(
    express.static(distPath, {
      dotfiles: 'ignore', // Ignora arquivos ocultos iniciados com ponto
      index: 'index.html',
      maxAge: '1d' // Cache de 1 dia para arquivos estáticos
    })
  );

  // SPA Fallback: Qualquer rota não reconhecida entrega o index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  // Fallback caso o comando de build ainda não tenha sido executado
  app.get('*', (req, res) => {
    res.status(200).send(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Vitória Silva Makeup - Inicializando</title>
        <style>
          body { font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #F8F3EF; color: #302521; }
          .card { background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; max-width: 480px; }
          code { background: #EFE8E1; padding: 0.2rem 0.4rem; border-radius: 4px; font-size: 0.9rem; }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>Vitória Silva Makeup</h2>
          <p>O servidor está ativo! Para carregar o visual completo, execute o comando de build:</p>
          <p><code>npm run build</code></p>
        </div>
      </body>
      </html>
    `);
  });
}

// 5. SEGURANÇA: Tratamento de Erros Seguro (não expõe stack traces detalhados para o usuário)
app.use((err, req, res, next) => {
  console.error('Erro interno do servidor:', err.message);
  res.status(500).json({
    error: 'Ocorreu um erro interno no servidor. Por favor, tente novamente mais tarde.'
  });
});

// Inicialização do servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(`Servidor rodando com sucesso na porta: ${PORT}`);
  console.log(`Acesse localmente em: http://localhost:${PORT}`);
  console.log(`Ambiente: ${process.env.NODE_ENV || 'production'}`);
  console.log(`====================================================`);
});
