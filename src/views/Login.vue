<template>
  <div class="login-container">
    <h2>Login</h2>
    <el-input v-model="email" placeholder="Enter your email" />
    <el-button type="primary" @click="sendLoginLink" :loading="loading.value">
      Send Magic Link
    </el-button>
    <p v-if="message.value">{{ message.value }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import { sendSignInLinkToEmail } from 'firebase/auth'
import { auth } from '../firebase'

export default {
  setup() {
    const email = ref('')
    const message = ref('')
    const loading = ref(false)

    const sendLoginLink = async () => {
      console.log('[DEBUG] Button clicked with email:', email.value)
      loading.value = true
      try {
        await sendSignInLinkToEmail(auth, email.value, {
          url: window.location.origin + '/login',
          handleCodeInApp: true
        })
        console.log('[DEBUG] Magic link sent successfully')
        window.localStorage.setItem('emailForSignIn', email.value)
        message.value = 'Check your email for the login link.'
      } catch (error) {
        console.error('[DEBUG] Firebase error:', error)
        message.value = `Error: ${error.message}`
      } finally {
        loading.value = false
      }
    }

    return { email, message, sendLoginLink, loading }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
}
</style>