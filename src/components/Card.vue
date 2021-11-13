<template>
  <Modal>
    <div slot="body">
      {{card}}
    </div>
  </Modal>
</template>
<script>
import Modal from './Modal.vue'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    Modal
  },
  name: "Card",
  computed: {
 ...mapState({
   card:'card'
 })
  },
  created(){
    
    const id = this.$route.params.cid;
    this.FETCH_CARD({id})
    console.log(`id = ${id}`)
  },
  methods:{
  ...mapActions([
    'FETCH_CARD'
    ])
  }
  
};
</script>

<style scoped>
</style>