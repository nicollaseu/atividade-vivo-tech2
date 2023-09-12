/*5. Como o Node.js lida com módulos e dependências? Quais são as principais
diferenças entre o sistema de módulos do Node.js e o sistema de módulos do
navegador?
O Node.js lida com módulos e dependências usando o sistema de módulos CommonJS. Ele permite que você defina módulos em arquivos 
separados e os importe/exporte em outros arquivos usando `require` e `module.exports`. A principal diferença em 
relação ao sistema de módulos do navegador é que o Node.js é voltado para o ambiente de servidor e carrega módulos de forma síncrona por padrão, 
enquanto os navegadores usam o carregamento assíncrono de módulos ES6 através de `import/export`.*/