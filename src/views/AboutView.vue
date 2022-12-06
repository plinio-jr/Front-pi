<template>
  <div class="about">
<div class="titu">
  <h1>SObre Nós</h1>
</div>


    <h1>O que é esse site</h1>
    <br />
    <p>
      Site desenvolvido para ajudar pessoas que vao comprar em Supermecados, ou
      que nao sao muito organizadas em saber o que comprar.
    </p>
    <hr />
    <h1>Como funciona?</h1>
    <br />
    <p>
      O usuario podera criar uma lista, podera editar ela com os produtos, tendo
      classificado em nome, categoria(opcional), <br/>, peso, ao colocar
      esses dados o usuario tera que informar os dados e tambem devera calcular
      o valor final da compra.
    </p>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
  font-family: "Montserrat";
  
}


.titu h1{
  background: -webkit-linear-gradient(to right, #0044ff, #00eeff, #00ffdd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  margin-bottom: 5rem ;
}

.about{
  margin-top:7rem ;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}


h1{
  text-transform: uppercase;
  font-size: 30pt;
  background: -webkit-linear-gradient(45deg, #0044ff, #00eeff, #00ffdd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900 ;
}





.body {
  border-image-width: auto;
}
.logo img {
  width: 50vw;
  height: 30vh;
}
.logo {
  width: 50vw;
  height: 50vh;
}
</style>

