<template>
    <footer class="footer-container">
      <div class="footer-content">
        <p> Desenvolvido por
          <a href="https://www.instagram.com/malena_dev" target="_blank" class="instagram-link">Matheus Malena</a>&copy; 2024 - Task list surf
        </p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer-container {
    color: black;
    text-align: center;
    padding: 20px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    margin-left: 8rem;
  }
  
  .footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  p {
    margin: 0;
    font-size: 14px;
  }
  
  a {
    color: #598e98;
    margin-right: 10px;
    text-decoration: none;
  }
  
  .instagram-link:hover {
    color: #d4bfa3; /* Cor de hover para o ícone */
  }
  
  /* Ajusta o ícone do Instagram */
  i.fab.fa-instagram {
    font-size: 18px;
    vertical-align: middle;
  }
  </style>
  