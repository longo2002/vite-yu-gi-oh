
<template>
    <div class="container">
        <AppMainBody />
    </div>
</template>

<script setup>
import AppMainBody from '../components/AppMainBody.vue'
</script>

<script>

export default {
    data() {
        return {
        }
    }


}

</script>

<style scoped>
.container {
    background-color: orange;
    padding: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>