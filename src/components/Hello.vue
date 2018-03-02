<template>
  <div class="hello">
    <ul>
      <li v-for="contact in contacts" :key="contact">
        {{contact.name}}
        {{contact.email}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      contacts: [{
        name: 'andrea',
        email: 'andrea@dad.com'
      }, {
        name: 'paco',
        email: 'paco@dad.com'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
