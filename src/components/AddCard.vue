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
export default {
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
    // const { inputText } = this.$refs;
    this.$refs.inputText.focus();
    this.setupClickOutside(this.$el)
  },
  methods:{
    onSubmit(){
      console.log('submit !')
    },
    setupClickOutside(el){
      document.querySelector('body').addEventListener('click', e => {
        if(el.contains(e.target)) return
        else this.setupClickOutside()
      })
    },
    closeAddCard(){
      this.$emit('close')
    }
  }
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