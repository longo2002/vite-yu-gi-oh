<template>
    <div class="header">
        <p>Found cards.</p>
    </div>
    <div class="container-cards">
        <div class="card">
            <div class=" card-img">
                <img :src="cardsImg" alt="Card_Img">
            </div>
            <div class="card-description">
                <ul class="characteristics">
                    <li>{{ cardsName }}</li>
                    <li>{{ cardsType }}</li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            cardsImg: "",
            cardsName: "",
            cardsType: "",
            cardNum: 0,
            cardImgNum: 0,
        }
    },
    methods: {
        cardsNameRequest() {
            axios
                .get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
                .then((res) => {
                    console.log(res.data.data[this.cardNum].card_images)
                    this.cardsName = res.data.data[this.cardNum].name
                    this.cardsType = res.data.data[this.cardNum].type
                    this.cardsImg = res.data.data[this.cardNum].card_images[this.cardImgNum].image_url_cropped
                })
            this.cardNum++
        }
    },
    created: function () {
        this.cardsNameRequest()
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.characteristics {
    color: black;
    padding: 0;
    margin: 0;
}

.characteristics li:first-child {
    font-weight: 800;
    text-transform: uppercase;
    font-size: 12px;
}

.characteristics li:last-child {
    text-align: center;
}
</style>