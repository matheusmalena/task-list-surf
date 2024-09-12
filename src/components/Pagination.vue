<!-- Pagination.vue -->
<template>
  <div class="pagination">
    <button class="pagination-button" :disabled="currentPage === 1" @click="previousPage">
      <font-awesome-icon class="icon" :icon="['fas', 'chevron-left']" />
    </button>
    <span v-for="page in totalPages" :key="page" class="pagination-info">
      <button
        class="pagination-page"
        :class="{ active: page === currentPage }"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
    </span>   
    <button class="pagination-button" :disabled="currentPage === totalPages" @click="nextPage">
      <font-awesome-icon class="icon" :icon="['fas', 'chevron-right']" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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

    const goToPage = (page: number) => {
      emit("update:currentPage", page);
    };

    return {
      previousPage,
      nextPage,
      goToPage,
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
  background-color: white;
  color: #598e98;
  border: none;
  box-shadow: 1px 1px #c9c9c9;
  border-radius: 5px;
  padding: 0.2rem 0.3rem;
  cursor: pointer;
}

.pagination-button:disabled {
  cursor: not-allowed;
}

.pagination-info {
  font-size: 1rem;
}

.pagination-page {
  background-color: white;
  color: #598e98;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
}

.pagination-page.active {
  background-color: #598e98;
  color: white;
}

.pagination-page:hover {
  background-color: #598e98;
  color: white;
}
</style>

