<template>
  <div class="wrapper">
    <el-timeline>
      <el-timeline-item v-for="(item, key) in steps" :key="key" :timestamp="item.time" placement="top">
        <el-card>
          <h4>{{item.title}}</h4>
          <p>{{item.value}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
export default {
  name: "Step",
  props: {
     steps: {
         type: Array,
         require: true,
         default() {
           return [];
         }
     }
  }
};
</script>