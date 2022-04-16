<template>
    <div id="itemListBlock">
        <img :src="img == '' || img == null || typeof img == 'undefinded' ? 'https://i.imgur.com/6PRUynM.png' : img" alt="LogoPng" style="border-radius: 10%; height: 80%; width: 20%;">
        <div id="titleData">
            <h2>{{ language.card_name }} {{ name }}</h2>
            <h3>{{ language.card_pp }} {{ pp }} pp</h3>
        </div>
        <button @click="selectItem(img, name, pp, description, sql_name, category_name, amount)" type="button" id="buyButton"><i class="fas fa-shopping-basket"></i></button>
    </div>
</template>

<script>

export default {
    name: 'PremiumItems',
    props: {
        img: String,
        name: String, 
        pp: Number,
        description: String,
        sql_name: String,
        category_name: String,
        amount: Number,
        language: Object
    },
    data() {
        return {
            currentSelectedItemInItemList: 'Kenyér',
            selectionItem: [],
        }
    },
    methods: {
        selectItem(img, name, pp, description, sql_name, category_name, amount) {
            this.$emit('selectedItems', this.selectionItem = [{img: img, name: name, pp: pp, description: description, sql_name: sql_name, category: category_name, amount: amount}])
        }
    }
}
</script>

<style scoped>
:root {
    --d: 0%;
}
#itemListBlock {
    width: 20vmin;
    height: 6vmin;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(87, 87, 87) !important;
    border-radius: 1vmin;
    margin: 1.5vmin;
    color: white;
}
#titleData {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 70%;
}
#itemListBlock:hover {
    cursor: pointer;
}
#itemListBlock h2 {
    font-size: 1.3vmin;
    margin: 0.5vmin;
}
#itemListBlock h3 {
    font-size: 1.2vmin;
    margin: 0.5vmin;
}
#itemListBlock #buyButton {
    width: 3vmin;
    height: 3vmin;
    font-size: 1.5vmin;
    font-weight: 700;
    border-radius: 1vmin;
    border: none;
    background-color: rgb(66, 66, 66) !important;
    color: white;
    transition:0.3s;
    background: linear-gradient(currentColor 0 0) bottom /var(--d, 0) 0.1vmin no-repeat;
}
#itemListBlock #buyButton:hover {
    cursor: pointer;
    --d: 100%;
    background-color: rgb(20, 20, 20) !important;
}

</style>