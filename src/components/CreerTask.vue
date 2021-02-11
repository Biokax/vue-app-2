<template>
  <div id="create">
    <button @click="openForm" v-show="!isCreating" class="btn btn-primary">
      Ajouter
    </button>
    <div v-show="isCreating">
      <div class="content">
        <div class="card-body">
        <div class="form">
          <label>Titre</label>
          <input v-model="titleText" type="text" />
        </div>
        <div>
          <button @click="sendForm" class="btn btn-sm btn-outline-secondary">
            Créer
          </button>
          <button @click="closeForm" class="btn btn-sm btn-outline-secondary">
            Annuler
          </button>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreerTask",
  data() {
    return {
      titleText: "",
      isCreating: false,
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.titleText.length > 0) {
        const title = this.titleText;
        this.$emit("creer-task", {
          title,
          done: false,
        });
        this.titleText = "";
        this.isCreating = false;
      }
    },
  },
};
</script>
<style>
#create {
  padding-top: 1em;
}
</style>
