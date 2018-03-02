<template>
  <div class="hello">
    <ul>
      <li v-for="contact in contacts" :key="contact">
        <div class="name">{{contact.name}}<div>
        <div class="email">{{contact.email}}<div>
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
  text-align: center;
}

li .name {
  color: #444;
  display: block;
  font-size: 20px;
}

li .email {
  color: rgb(180, 152, 25);
  display: block;
  font-size: 12px;
}

a {
  color: #35495E;
}
</style>
