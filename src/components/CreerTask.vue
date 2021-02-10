<template>
  <div id="create">
    <button @click="openForm" v-show="!isCreating">
      Add
    </button>
    <div v-show="isCreating">
      <div class="content">
        <div class="form">
          <label>Title</label>
          <input v-model="titleText" type="text" />
        </div>
        <div class="form">
          <label>Project</label>
          <input v-model="projectText" type="text" />
        </div>
        <div>
          <button @click="sendForm">
            Create
          </button>
          <button @click="closeForm">
            Cancel
          </button>
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
      projectText: "",
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
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        const title = this.titleText;
        const project = this.projectText;
        this.$emit("creer-task", {
          title,
          project,
          done: false,
        });
        this.titleText = "";
        this.projectText = "";
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
