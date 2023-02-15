<template>
  <div>
    <router-link to="/login"></router-link>
    <router-link to="/register"></router-link>
    <router-link to="/ToDoList"></router-link>
    </div>
    
    <router-view></router-view>
</template>

<script>




export default {
  name: 'App',
}
</script>

<style>

body{
  background-color: rgb(0, 0, 0);
  background-image: linear-gradient(to bottom right, #B6EADA, #5B8FB9);
}
</style>
