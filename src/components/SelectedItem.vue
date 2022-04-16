<template>
    <div id="selectedItemCont">
        <img :src="selectionItem[0].img == '' || selectionItem[0].img == null || typeof selectionItem[0].img == 'undefinded' ? 'https://i.imgur.com/6PRUynM.png' : selectionItem[0].img" alt="" style="height: 70%; width: 20%">
        <div id="titleSection">
            <h3>{{ selectionItem[0].name }}</h3>
            <p>{{ selectionItem[0].description }}</p>
        </div>
        <div id="buySection">
            <div id="amountSection">
                <div id="amountAdder">
                    <p @click="setquantity('down')" class="action"><i class="fas fa-minus-circle"></i></p>
                    <p>{{ quantity }} {{ language.piece }}</p>
                    <p @click="setquantity('up')" class="action"><i class="fas fa-plus-circle"></i></p>
                </div>
                <p style="text-align: right;">{{ language.total }} <br><br>{{ selectionItem[0].pp * quantity }} pp</p>
            </div>
            <div id="buyButton">
                <button @click="buyItem">{{ language.buy_button }} <i class="fas fa-check"></i></button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'SelectedItem',
    props: {
        selectionItem: Object,
        language: Object
    },
    data() {
        return {
            quantity: 1,
        }
    },
    created() {
        console.log(this.selectionItem)
    },
    methods: {
        setquantity(direction) {
            if (direction == 'up') {
                this.quantity += 1
            } else if(direction == 'down' && this.quantity > 1) {
                this.quantity -= 1
            }
        },
        buyItem() {
            for (let i = 0; i < this.quantity; i++) {
                fetch('https://ppshop-simple/buy', {
                    method: 'POST',
                    body: JSON.stringify({
                        category: this.selectionItem[0].category,
                        name: this.selectionItem[0].name,
                        sql_name: this.selectionItem[0].sql_name,
                        ppPoint: this.selectionItem[0].pp,
                        amount: this.selectionItem[0].amount
                    })
                })
            }
        }
    }
}
</script>

<style scoped>
#selectedItemCont {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    overflow: hidden;
    background-color: rgba(43, 43, 43, 0.74);
    box-shadow: 5px 6px 41px 12px #5555558a;
    border-radius: 1.5vmin;
}
#titleSection {
    height: 100%;
    width: 60%;
}
#titleSection h3 {
    margin: 1vmin;
    font-size: 2vmin;
}
#titleSection p {
    margin: 1.5vmin;
    font-size: 1.3vmin;
}
#buySection {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
#amountSection {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
#amountAdder {
    display: flex;
    align-items: center;
    margin-top: 3vmin;
}
#amountSection .action {
    font-size: 1.5vmin;
    text-align: center;
    color: rgb(156, 156, 156);
    margin: 1.5vmin;
}
#amountSection .action:hover {
    cursor: pointer;
    color: rgb(199, 199, 199);
}
#buyButton {
    display: flex;
    justify-content: center;
}
#buyButton button {
    margin: 0.5vmin;
    border: none;
    font-size: 1.3vmin;
    width: 12vmin;
    height: 3vmin;
    border-radius: 1vmin;
    background-color: #212327;
    color: white;
}
#buyButton button:hover {
    cursor: pointer;
    background-color: rgb(73, 73, 73);
}
</style>
