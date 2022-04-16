<template>
  <div class="noselect" id="container">
    <header>
        <input type="text" id="search" :placeholder="language.search_placeholder" v-model="searchQuery">
        <div>
          <h3>{{ serverName }}</h3>
          <i @click="closeAll()" class="fas fa-times"></i>
        </div>
    </header>
    <div id="itemsBlock" >
      <div id="selectedSection">
        <SelectedItem :selectionItem="selectionItem" :language="language"/>
      </div>
      <div id="listOfItems">
        <PremiumItems @selectedItems='selectedItems($event)' v-for="(value, index) in filteredList" :key="index" :name="value.name" :pp="value.pp" :sql_name="value.sql_name" :category_name="value.category_name" :amount="value.amount" :description="value.description" :language="language" />
      </div>
      <p>© Created by Beni</p>
    </div>
    <Navbar  @takeTheFilteredList="setData($event)" :defaultList="{characterData, settings, itemList, language}" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import PremiumItems from './components/PremiumItems.vue'
import SelectedItem from './components/SelectedItem.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    PremiumItems,
    SelectedItem
  },
  data() {
    return {
      serverName: 'Fivem RolePlay',
      settings : {
        item : true,
        weapon : true,
        car : true, 
        money : true,
        ammo : true
      },
      language: {
        welcome_message:'Hello',
        owned_premiumPoint: 'A te prémium pontod: ',
        navbar_item: 'Itemek',
        navbar_weapon: 'Fegyverek',
        navbar_cars: 'Autók',
        navbar_money: 'Pénzek',
        navbar_ammo: 'Lőszerek',
        search_placeholder: 'Keresés nevek alapján',
        card_name: 'Név:',
        card_pp: 'Prámium pont:',
        total: 'Összesen: ',
        piece: 'db',
        buy_button: 'Vásárlás'
        },
      itemList: [
        {
          name: 'AK-47',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'weapon',
          amount: 0
        },
        {
          name: 'Pistol',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'item',
          amount: 0
        },
        {
          name: '10$',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'money',
          amount: 0
        },
        {
          name: '10db lőszer',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'ammo',
          amount: 0
        },
        {
          name: 'T201',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'car',
          amount: 0
        },
        {
          name: 'T202',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'car',
          amount: 0
        },
        {
          name: 'T203',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'car',
          amount: 0
        },
        {
          name: 'T204',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'car',
          amount: 0
        },
        {
          name: 'T204',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'car',
          amount: 0
        },
        {
          name: 'T204',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'car',
          amount: 0
        },
        {
          name: 'T204',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'car',
          amount: 0
        },
        {
          name: 'T204',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'car',
          amount: 0
        },
        {
          name: 'T204',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'car',
          amount: 0
        },
        {
          name: 'T204',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'car',
          amount: 0
        },
        {
          name: 'T204',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'car',
          amount: 0
        },
        {
          name: 'T204',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'car',
          amount: 0
        },
        {
          name: 'T204',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'car',
          amount: 0
        },
        {
          name: 'T204',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'car',
          amount: 0
        },
        {
          name: 'T204',
          description: 'vKenéyrKenéyr',
          sql_name: 'bolide',
          pp: 102,
          category_name: 'car',
          amount: 0
        },
      ],
      currentList: [],
      firstCategory: '',
      searchQuery: '',
      selectionItem: [{
        name: 'T201',
        description: 'Ez egy gyors kocsi',
        sql_name: 'bolide',
        pp: 1020,
        category_name: 'car',
        amount: 0
        }],
      characterData: [{discordName: 'https://i.imgur.com/3GIiIQM.jpg', characterPp: '100', icName: '!&!Beni#0864'}] //The picture come from Discord
    }
  },
  mounted() {
    document.onkeyup = (data) => {
      if (data.which == 27) {
          fetch('https://ppshop-simple/exit', {
              method: 'POST',
          })
      }
    };
    window.addEventListener('message', (event) => {
      let display = document.getElementById('container');
      
      if (event.data.type == 'ui') {
        if (event.data.status == true) {
          display.style.display = 'block';
        }
      } else if(event.data.type == 'def') {
        this.settings = event.data.settings;
        Object.keys(this.settings).forEach(e => { if (this.settings[e]) { this.firstCategory = e; return } } );
        this.itemList = event.data.types;
        this.serverName = event.data.serverName;
        this.language = event.data.language;
        this.characterData = [{discordName: event.data.avatar, characterPp: event.data.characterPp, icName: event.data.icName}];

        this.firstLoad()
      }
    })
  },
  computed: {
    filteredList() {
      return this.currentList.filter(i => {
        return i.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
    },
  },
  methods: {
    setData(list) {
      this.currentList = list;
    },
    firstLoad() {
      const data = this.itemList.filter(i => i.category_name == String(this.firstCategory))
      this.selectionItem = [{
        img: data[0].img,
        name: data[0].name,
        description: data[0].description,
        sql_name: data[0].sql_name,
        pp: data[0].pp,
        category: data[0].category_name,
        amount: undefined
      }]
      this.currentList = data
    },
    selectedItems(items) {
      this.selectionItem = items
    },
    closeAll() {
      fetch('https://ppshop-simple/exit', {
          method: 'POST',
      })
    }
  }
}
</script>

<style>
:root {
  --d: 0%;
  --main-bg-color: #1193a5;
  --main-bg-color-hover: rgb(30, 65, 49);
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  outline: none;
}
button {
  outline: none;
}
#container {
  width: 100vmin;
  height: 70vmin;
  background-color: rgb(39, 39, 39);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1vmin;
}
div #itemsBlock {
  float: right;
  width: 73%;
  height: 93%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  overflow: overlay;
  border-radius: 0vmin 0vmin 1vmin 0vmin;
}
#itemsBlock p {
  margin: 0vmin;
  padding: 0vmin;
  font-size: 1.2vmin;
  color: white;
  letter-spacing: 0.3vmin;
}
#selectedSection {
  width: 95%;
  height: 30%;
}
#listOfItems {
  height: 60%;
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  overflow: overlay;
  background-color: rgba(43, 43, 43, 0.74);
  box-shadow: 5px 6px 41px 12px #5555558a;
  border-radius: 1.5vmin;
}
header {
    float: right;
    width: 73%;
    height: 7%;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
header #search {
    margin-left: 2vmin;
    width: 26vmin;
    height: 3vmin;
    background: grey;
    outline: none;
    border: none;
    background: linear-gradient(currentColor 0 0) bottom /var(--d, 0) 0.2vmin no-repeat;
    transition:0.3s;
    color: white;
    text-align: left;
}
#search:focus {
  --d: 100%;
}
header #search::placeholder {
    color: white;
    text-align: left;
    font-size: 1.5vmin;
}
header div {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
}
header h3 {
    font-size: 1.5vmin;
    margin: 1vmin;
}
header i {
    color: red;
    font-size: 1.7vmin;
    padding-right: 2vmin;
}
::-webkit-scrollbar {
    width: 0.7vmin;
}

::-webkit-scrollbar-track {
    background: #414141;
}

::-webkit-scrollbar-thumb {
    background: rgb(134, 134, 134); 
    border-radius: 1vmin;
}

::-webkit-scrollbar-thumb:hover {
    background: rgb(133, 129, 129); 
}

.input:focus+.underline {
  transform: scale(1);
}

.underline {
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
  -webkit-transition: all 0.5s linear;
  transition: all 0.5s linear;
}
</style>