<!-- Pagination.vue -->
<template>
  <div class="pagination">
    <button class="pagination-button" :disabled="currentPage === 1" @click="previousPage">
      <font-awesome-icon class="icon" :icon="['fas', 'chevron-left']" />
    </button>
    <span class="pagination-info">Página {{ currentPage }} de {{ totalPages }}</span>
    <button
      class="pagination-button"
      :disabled="currentPage === totalPages"
      @click="nextPage"
    >
      <font-awesome-icon class="icon" :icon="['fas', 'chevron-right']" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";

export default defineComponent({
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const previousPage = () => {
      if (props.currentPage > 1) {
        emit("update:currentPage", props.currentPage - 1);
      }
    };

    const nextPage = () => {
      if (props.currentPage < props.totalPages) {
        emit("update:currentPage", props.currentPage + 1);
      }
    };

    return {
      previousPage,
      nextPage,
    };
  },
});
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.pagination-button {
  background-color: #598e98;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.2rem 0.3rem;
  cursor: pointer;
}

.pagination-button:disabled {
  background-color: #c4c4c4;
  cursor: not-allowed;
}

.pagination-info {
  font-size: 1rem;
}

</style>
