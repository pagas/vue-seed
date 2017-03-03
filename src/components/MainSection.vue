<template>
  <div>
    <el-col :span="16">
      THIS IS THE MAIN SECTION???
        <el-button type="primary" icon="delete" @click="openConfirmation()"></el-button>
    </el-col>

    <el-dialog title="Tips" v-model="dialogVisible" size="tiny">
      <span>This is a message</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  methods: {
    openConfirmation() {
        this.dialogVisible = true;
    }
  },
  data() {
    return {
      dialogVisible: false
    }

  }
}
</script>
<style scoped>
  div {

  }

</style>
