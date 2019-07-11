<template>


    <div id="app">

        <b-button v-b-modal.modal-xl variant="primary">open modal</b-button>

            <modal></modal>
    </div>


</template>

<script>

   import modal from  './modal/modal.vue';

    export default {
        data() {
            return {
                page: 1,
                myclass: ['myclass']
            }
        },
        components: {
                  modal
        }
    }

</script>

<style></style>