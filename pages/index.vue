<template>
  <div class="container mb-4">
    <section class="mb-4">
      <b-card>
        <b-row class="d-flex align-items-center mx-auto card-info">
          <b-col>
            <img src="../assets/img/banner-espaco-bem-cuidar.png" alt="Banner"
          /></b-col>
          <b-col class="text-center card-info-text">
            <p>
              Seja bem vinda e bem vindo a esse espaço de autocuidado. Somos uma
              equipe que tem pensado no seu bem estar emocional e queremos
              oferecer algumas ferramentas de promoção de saúde mental para o
              desafiador período eleitoral. Veja dentre as opções abaixo o que
              faz sentido para o seu momento de vida. Vamos cuidar de você?
            </p></b-col
          >
        </b-row>
      </b-card>
    </section>

    <b-card-group deck>
      <b-card title="Roda de Conversa" class="card-items text-center">
        <b-img
          center
          src="../assets/img/martina-group-people.png"
          alt="Grupo de pessoas conversa por mensagem eletrônica"
        ></b-img>
        <nuxt-link to="/roda-de-conversa" class="stretched-link"></nuxt-link>
      </b-card>

      <b-card
        title="Terapia Comunitária Integrativa"
        class="card-items text-center"
      >
        <nuxt-link to="/terapia-comunitaria" class="stretched-link"></nuxt-link>
        <b-img
          center
          src="../assets/img/martina-woman-and-man-at-laptop.png"
          alt="Amigos conversando"
          class="image"
        ></b-img>
      </b-card>

      <b-card
        title="Técnica de Redução de Estresse"
        class="card-items text-center"
      >
        <nuxt-link to="/reducao-de-estresse" class="stretched-link"></nuxt-link>
        <b-img
          center
          src="../assets/img/martina-woman-with-laptop-and-popcorn-lies-on-pillow.png"
          alt="Pessoa deitada comendo pipoca e relaxando"
        ></b-img>
      </b-card>
    </b-card-group>

    <b-card-group class="pt-4" deck>
      <b-card
        title="Outras Práticas Integrativas e Complementares em Saúde (PICS)"
        class="card-items text-center"
      >
        <nuxt-link to="/outras-praticas" class="stretched-link"></nuxt-link>
        <b-img
          center
          src="../assets/img/martina-girl-with-bags-goes-shopping.png"
          alt="Ilustração de uma pessoa caminhando com sacolas de shopping"
        ></b-img>
      </b-card>

      <b-card title="Acolhimento Individual" class="card-items text-center">
        <nuxt-link
          to="/acolhimento-individual"
          class="stretched-link"
        ></nuxt-link>
        <b-img
          center
          src="../assets/img/martina-friends-met-for-a-cup-of-coffee.png"
          alt="Pessoas abraçadas conversando"
        ></b-img>
      </b-card>

      <b-card title="Vídeos, áudios e textos" class="card-items text-center">
        <nuxt-link to="/conteudo-diverso" class="stretched-link"></nuxt-link>
        <b-img
          center
          src="../assets/img/martina-woman-getting-thumbs-up-and-likes-on-social-media.png"
          alt="Pessoa usuária de rede social tirando foto"
        ></b-img>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
