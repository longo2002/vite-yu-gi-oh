<template>
    <div class="header">
        <p>Found cards.</p>
    </div>
    <div class="container-cards">
        <div class="card">
            <div class="card-img">

            </div>
            <div class="card-description">

            </div>
        </div>

    </div>
</template>
<script>

export default {
    data() {
        return {

        }
    }

}

</script>

<style scoped>
.header {
    background-color: black;
    color: rgb(220, 218, 218);
    width: 1300px;
    padding: 0 25px;
    font-weight: 700;
}

.container-cards {
    width: 1200px;
    padding: 75px;
    gap: 50px;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
}

.card {
    background-color: rgba(0, 0, 0, 0.3);
    flex-basis: 20%;
    height: 350px;
}

.card-img {
    height: 250px;
}

.card-description {
    height: calc(100% - 250px);
}
</style>