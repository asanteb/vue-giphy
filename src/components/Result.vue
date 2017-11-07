<template>
  <div>
    <b>#{{item.id}}</b>
    <span>{{ item.title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: { default: { id: 'sss', title: 'ede' } , required: true },
    searchText: { default: '', required: true }
  }
}
</script>
