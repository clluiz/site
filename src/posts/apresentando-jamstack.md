---
layout: blog.njk
permalink: /blog/introducao-ao-jam-stack.html
date: 2021-01-01
description: Introdução a uma nova forma de criar sites e aplicações web de maneira mais rápida, segura e fácil
title: Apresentando o JAMStack e seus impactos para os negócios
---

## Apresentando o JAMStack e seus impactos para os negócios

### Introdução

Neste artigo irei abordar uma arquitetura que está sendo utilizada para desenvolver sites, aplicações web, lojas virtuais e blogs aliando redução de custos e complexidade a maiores segurança e escalabilidade. 
Ao ter contato com uma nova tecnologia é importante saber por que ela foi criada. A seguinte pergunta deve ser respondida: qual problema essa tecnologia resolve e como ela resolve? 

Para ajudar a responder essa pergunta voltaremos ao início dos anos 90. Nessa época, lançar um site era uma atividade relativamente simples já que as páginas possuiam pouca ou nenhuma interatividade com o usuário. Era época da [WEB 1.0](https://pt.wikipedia.org/wiki/World_Wide_Web#Web_1.0). Por esse motivo os sites eram considerados estáticos. As páginas que faziam parte do site eram colocadas em servidores e disponibilizados através do protcolo HTTP. Para esses sites não haviam gerenciadores de conteúdo e qualquer modificação em seu conteúdo era feita através da edição dos arquivos .html.

Com o passar do tempo e a evolução das tecnologias as formas de se acessar e interagir com uma página da internet foram aumentando consideravelmente, era possível fazer compras, criar blogs, assistir vídeos, acessar redes sociais. Desenvolver aplicações que acompanhassem o ritmo de novos modelos de negócio de forma rápida, segura e escalável se tornou um desafio muito grande para desenvolvedores e empreendedores.

Hoje, a complexidade para criação de sites, e-commerce, blog e outros tipos de plataformas é muito grande porque os desenvolvedores devem cuidar de t um fluxo muito complexo que abrange o codificação, os testes em dispositivos com vários tamanhos de tela, várias velocidades de conexão à internet, até a configuração de servidores (*on-premise* ou na nuvem), provisionamento de bancos de dados, considerações sobre segurança da informação. Todo esse processo além de complexo não é barato e tem vários desafios de escalabilidade e também na forma de oferecer uma excelente experiência para o usuário.

### O que é JAMStack

Mas o que significa JAMStack? Esse termo foi criado por Mathias Biilmann e significa Javascript, API's e Markup. 

JAMStack não é um novo *framework*. É apenas um conjunto de boas práticas que foram desenvolvidas ao longo do tempo pelo acúmulo de experiências de vários desenvolvedores.

* Javascript - qualquer linguagem que possa ser utilizada no navegador do cliente. Javascript é a mais linguagem "nativa" para adicionar interatividade aos sites, porém devido a projetos como [Web Assembly](https://webassembly.org/) outras linguagens podem ser utilizdas.
* API's - toda a lógica da aplicação deve ser feita utilizando-se de chamada para várias API's separadas, isso vai de encontro à evolução das arquitetura baseada em microsserviços.
* Markup - o HTML é construído durante o deploy da aplicação.

### Características de uma aplicação feita usando JAMStack

Um site estático e desenvolvido usando apenas html, css e talvez um pouco de javascript. Todos esses arquivos são colocado em um servidor e qualquer alteração do conteúdo é feita diretamente nesse arquivos. 

Uma *single page web* é feita utilizando uma única página e as interações são controladas usando javascript que pode eventualmente acessar uma API que por sua vez pode acessar um banco de dados. Essas característas fornecem as *SPA's* uma alta interatividade com o usuário. 

Já uma aplicação feita usando JAMStack se situa entre um site estático e uma *SPA*. Um site feito usando o JAMStack possui um passo extra no deploy que é a geração de um conteúdo pré-compilado. Todo esse conteúdo é hospedado em CDN's (*content delivery network's*). 

![Diferença entra a arquitetura tradicional e markdown](https://dinarys.com/photos/7/jam-dinarys.png)

### Vantagens de se utilizar JAMStack

* Maior segurança: ao construir sua lógica usando API's de qualidade a equipe de desenvolvimento fica livre da carga de identificar e resolver todas as possíveis vulnerabilidades já que esse trabalho ficará a cargo dos mantenedores da API;
* Desempenho: por ter seu conteúdo hospedado em CDN's a velocidade de acesso é reduzida e a disponibilidade aumenta. Além disso devido a boa parte da aplicação ser renderizada durante o deploy a forma de acesso á praticamente igual à de um site estático;
* Custo: não será necessário gastar com servidores locais ou pagamento de valores para provedores de serviços de *cloud computing*;
* Escala: não é necessário se preocupar com picos de acesso, já que toda essa carga é tratada pela CDN;

Tudo isso causa um impacto positivo nos negócios já que um [site mais rápido pode afetar consideravelmente a experiência do usuário e a taxa de conversão disso em $$](https://blog.hubspot.com/marketing/page-load-time-conversion-rates).

Com uma estrutura de código mais simples, as alterações e correções de problemas se tornam mais rápidas e ágeis.

### Conclusão

Quando eu tomei conhecimento sobre JAMStack eu achei que se tratava apenas de mais uma *buzzword* tão comum em nossa indústria e que sites feitos utilizando essa metodologia eram apenas sites estáticos "gourmetizados". Mas ao estudar mais e me inteirar sobre o assunto percebi que se trata de algo que realmente irá mudar radicalmente a forma como novas aplicações web serão desenvolvidas. Além disso JAMStack se alinha muito bem às mudanças que surgiram com o advento das arquiteturas de microsserviços.

### Leituras recomendadas

Nesse artigo eu apenas introduzi o JAMStack. Caso você tenha se interessado, segue uma pequena lista com leituras recomendadas com mais detalhes, vantagens e também desvantagens do uso do JAMStack.

* https://www.netlify.com/jamstack/
* https://bejamas.io/blog/jamstack/
* https://hackernoon.com/forget-docker-the-future-is-jamstack-aae5bcaf4616
* https://snipcart.com/blog/jamstack

### Referências

A imagem que ilustra a diferença entre as arquiteuras tradicionas e o JAMStack foi extraída [daqui](https://snipcart.com/blog/jamstack)


