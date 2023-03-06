<template>
    <div class="container">
        <img src="../assets/logo.png" alt="logo">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'YU-GI-OH Api',
            logo: "../assets/logo.png"
        }
    }

}
</script>


<style scoped>
.container {
    height: 75px;
    gap: 15px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    background-color: white;
}

.container h1 {
    margin: 0;
    color: black;
    font-size: 24px;
}

.container img {
    width: 100px;
}
</style>