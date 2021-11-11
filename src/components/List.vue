<template>
  <div class="list" style="border: 5px solid purple">
    <div class="list-header">
      <div class="list-header-title">
        {{ data.title }}
      </div>
      <div class="card-list">
        <CardItem v-for="card in data.cards" :key="card.id" :data="card"/>
      </div>

      <div v-if="isAddCard">
        <AddCard :list-id="data.id" @close="isAddCard = false" />
      </div>
      <div v-else>
        <a class="add-card-btn" href="" @click.prevent="showAddCard">&plus; add card...</a>
      </div>
    </div>
  </div>
</template>

<script>
import AddCard from "./AddCard.vue";
import CardItem from './CardItem.vue'

export default {
  name: "List",
  props: ["data"],
  components: {
    AddCard,
    CardItem
  },
  data() {
    return {
      isAddCard: false,
    };
  },
  methods: {
    showAddCard() {
      console.log("showAddCard");
      this.isAddCard = true;
    },
  },
};
</script>

<style scoped>
.list {
  padding: 10px;
  border: 3px solid gold;
}
</style>