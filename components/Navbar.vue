<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <b-navbar
    id="navbar"
    class="shadow navbar sticky-top"
    toggleable="sm"
    type="light"
  >
    <b-navbar-nav>
      <b-link to="/">
        <img
          alt="Ir para a página Inicial da página Bem Cuidar - Eleições 2022"
          class="ml-auto tre-logo"
          src="../assets/img/tre-go.png"
        />
      </b-link>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  data() {
    return {}
  },
}
</script>
