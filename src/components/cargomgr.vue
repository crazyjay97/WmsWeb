<template>
  <div> 
      {{store.state.count}}
  </div>
</template>
<script>
import store from '@/store/store'

export default {
    data(){
        return {
            store
        }
    },
    store
};
</script>

