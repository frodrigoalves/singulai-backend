#!/bin/bash

# Diretório raiz
mkdir -p singulai-final-site/singulai_base_structure
cd singulai-final-site/singulai_base_structure

# Estrutura base
mkdir backend frontend config docs

# Backend
cd backend
mkdir abi config controllers models node_modules routes services src

touch .env avatarRoutes.js db.js server.js

# Voltar à raiz
cd ..

# Frontend
cd frontend
mkdir assets
touch index.html dashboard-final.html pen.html visao-estrategica.html components.html capsula.html

# Voltar
cd ..

# Configurações globais
touch package.json
echo '{ "name": "singulai", "version": "1.0.0" }' > package.json

echo "✅ Estrutura do projeto SingulAI criada com sucesso!"
