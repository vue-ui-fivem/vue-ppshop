<template>
    <nav>
        <div id="profileData">
            <img :src="defaultList.characterData[0].discordName" alt="profilePicture">
            <h2>{{ defaultList.language.welcome_message }}, {{ defaultList.characterData[0].icName }}</h2>
            <h3>{{ defaultList.language.owned_premiumPoint }} {{ defaultList.characterData[0].characterPp }}pp</h3>
        </div>
        <div :id="currentButtonQuantity > 3 ? 'premiumTypesSpaceEvenly' : 'premiumTypesFlexStart' ">
            <button v-if="defaultList.settings.item" @click="filterItems('item')" :style="currentButtonInNavbar == 'item' ? 'background-color:' + selectedButtonColor: ''" type="button" class="premiumTypesButton"><i class="fas fa-archive"></i> {{ defaultList.language.navbar_item }}</button>
            <button v-if="defaultList.settings.weapon" @click="filterItems('weapon')" :style="currentButtonInNavbar == 'weapon' ? 'background-color: ' + selectedButtonColor: ''" type="button" class="premiumTypesButton"><i class="iconify" data-icon="mdi:pistol"></i> {{ defaultList.language.navbar_weapon }}</button>
            <button v-if="defaultList.settings.car" @click="filterItems('car')" :style="currentButtonInNavbar == 'car' ? 'background-color: ' + selectedButtonColor: ''" type="button" class="premiumTypesButton"><i class="fa fa-car" aria-hidden="true"></i> {{ defaultList.language.navbar_cars }}</button>
            <button v-if="defaultList.settings.money" @click="filterItems('money')" :style="currentButtonInNavbar == 'money' ? 'background-color: ' + selectedButtonColor: ''" type="button" class="premiumTypesButton"><i class="fas fa-money-bill-wave"></i> {{ defaultList.language.navbar_money }}</button>
            <button v-if="defaultList.settings.ammo" @click="filterItems('ammo')" :style="currentButtonInNavbar == 'ammo' ? 'background-color: ' + selectedButtonColor: ''" type="button" class="premiumTypesButton"><i class="iconify" data-icon="mdi:ammunition"></i> {{ defaultList.language.navbar_ammo }}</button>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'Navbar',
    props: {
        defaultList: Object
    },
    data() {
        return {
            currentButtonInNavbar: 'car',
            currentButtonQuantity: 0,
            selectedButtonColor: 'rgb(0 154 255)'
        }
    },
    created() {
        this.filterItems(this.currentButtonInNavbar)
    },
    methods: {
        filterItems(filterName) {
            this.currentButtonInNavbar = filterName
            const data = this.defaultList.itemList.filter(i => i.category_name == filterName)

            this.$emit('takeTheFilteredList', data)
        }
    }
}
</script>

<style scoped>
nav {
    background-color: var(--main-bg-color);
    width: 27%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    color: white;
    border-radius: 1vmin 5vmin 1vmin 1vmin;
}
nav #profileData {
    background-color: var(--main-bg-color);
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    border-radius: 1vmin 5vmin 0vmin 0vmin;
}
nav img {
    margin-top: 5vmin;
    border-radius: 50%;
    height: 50%;
    width: 50%;
}
nav #profileData h2 {
    font-size: 2vmin;
    margin: 1vmin;
}
nav #profileData h3 {
    margin-bottom: 2vmin;
    font-size: 1.6vmin;
}
nav #premiumTypesSpaceEvenly {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    text-align: center;
}
nav #premiumTypesFlexStart {
    margin: 0.5vmin;
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    text-align: center;
}
nav .premiumTypesButton {
    margin: 0.5vmin;
    border: none;
    font-size: 1.5vmin;
    width: 100%;
    height: 16%;
    background-color: var(--main-bg-color);
    color: white;
}
nav .iconify {
    position: relative;
    top: 0.3vmin;
    margin-right: 0.6vmin;
}
nav .premiumTypesButton:hover {
    cursor: pointer;
    background-color: var(--main-bg-color-hover);
    transition: background-color 0.3s ease;
}
nav i {
    margin: 1vmin;
}
</style>