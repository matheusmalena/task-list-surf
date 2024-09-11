<template>
  <div class="auth-container">
    <div class="login-box">
      <div v-if="isLoginMode" class="login-form">
        <h2>Login</h2>
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button @click="login">Login</button>
        <p>Don't have an account? <span @click="toggleMode">Register here</span></p>
      </div>
      <div v-else class="register-form">
        <h2>Register</h2>
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <input v-model="confirmPassword" type="password" placeholder="Confirm Password" />
        <button @click="register">Register</button>
        <p>Already have an account? <span @click="toggleMode">Login here</span></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { auth } from "../firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Login",
  setup() {
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const isLoginMode = ref(true);
    const router = useRouter();

    const toggleMode = () => {
      isLoginMode.value = !isLoginMode.value;
    };

    const login = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log("Login successful");
        router.push({ name: "Tarefas" });
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Login Error:", error.message);
          alert(error.message);
        } else {
          console.error("An unknown error occurred during login.");
          alert("An unknown error occurred during login.");
        }
      }
    };

    const register = async () => {
      if (password.value !== confirmPassword.value) {
        alert("Passwords do not match");
        return;
      }

      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        router.push({ name: "Tarefas" });
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Registration Error:", error.message);
          alert(error.message);
        } else {
          console.error("An unknown error occurred during registration.");
          alert("An unknown error occurred during registration.");
        }
      }
    };

    return {
      email,
      password,
      confirmPassword,
      isLoginMode,
      toggleMode,
      login,
      register,
    };
  },
});
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
}
.login-box {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  animation: fadeIn 1s ease;
}
.login-box h2 {
  margin-bottom: 1.5rem;
}
.login-box input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.login-box button {
  width: 100%;
  padding: 0.7rem;
  background-color: #6e8efb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.login-box button:hover {
  background-color: #556df1;
}
.login-box span {
  color: #6e8efb;
  cursor: pointer;
}
.login-box span:hover {
  text-decoration: underline;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
