<template>
  <div class="add-card">
    <form @submit.prevent="onSubmit">
      <input
        class="form-control"
        type="text"
        v-model="inputTitle"
        ref="inputText"
      />
      <button class="btn btn-success" type="submit" :disabled="invalidInput">
        Add Card
      </button>
      <a @click.prevent="closeAddCard" class="cancel-add-btn">&times;</a>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["listId"],
  data() {
    return {
      inputTitle: "",
    };
  },
  computed: {
    invalidInput() {
      return !this.inputTitle.trim();
    },
  },
  mounted() {
    alert(`@@${this.listId} @@` )
    // const { inputText } = this.$refs;
    this.$refs.inputText.focus();
    // this.setupClickOutside(this.$el);
  },
  methods: {
    ...mapActions(["ADD_CARD"]),
    onSubmit() {
      if (this.invalidInput) return;
      const { inputTitle, listId } = this;
      this.ADD_CARD({ title: inputTitle, listId }).finally(
        () => (this.inputTitle = "")
      );
    },
    setupClickOutside(el) {
      document.querySelector("body").addEventListener("click", (e) => {
        if (el.contains(e.target)) return;
        else this.setupClickOutside();
      });
    },
    closeAddCard() {
      this.$emit("close");
    },
  },
};
</script>


<style scoped>
.add-card {
  border: 1px solid red;
}

button[disabled] {
  background: #000;
}
</style>