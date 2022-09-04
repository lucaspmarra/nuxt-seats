<template>
  <b-card style="max-width: 40rem" class="container shadow mb-5 index-card">
    <h2 class="text-center">Acolhimento Individual</h2>
    <b-card-text>
      <section class="pt-2">
        <h4>O que é e como acontecerá?</h4>
        <p>
          Um membro da equipe do Projeto Bem Cuidar (Eleições 2022)
          disponibilizará 15 minutos do seu tempo para acolher aos servidores
          dos Cartórios Eleitorais que estiverem em situação desafiadora/de
          estresse, em até 24h após agendamento e, caso verifique a necessidade,
          encaminhará ao profissional especializado em escuta da SEATS, ou à
          outros profissionais, conforme a necessidade.
        </p>
      </section>

      <section class="pt-2">
        <h4>Como entrar em contato?</h4>
        <p>
          Zap Seats/Telefone para agendamento:
          <a href="tel:+556239204339">(62) 3920-4339</a>
        </p>
      </section>
    </b-card-text>

    <b-button to="/" variant="primary" class="mt-4">Voltar</b-button>
  </b-card>
</template>

<script>
export default {
  head: {
    title: 'Acolhimento Individual',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Página de informações referente ao Acolhimento Individual, com informações sobre o que é e como entrar em contato',
      },
    ],
  },
}
</script>

<style></style>
