<template>
  <div class="spinner-container">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(255, 255, 255);
  z-index: 9999;
}

.spinner {
  border: 6px solid rgba(89, 142, 152, 0.2);
  border-top: 6px solid #598e98;
  border-right: 6px solid #ffffff;
  border-bottom: 6px solid #598e98;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
  box-shadow: 0 2px 8px #598e98;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
