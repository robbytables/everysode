<script lang="ts">
  import { supabase } from '$lib/supabaseClient'

  let loading = false
  let email: string
  let password: string

  const handleLogin = async () => {
    try {
      loading = true
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading = false
    }
  }
</script>

<section>
  <form class="row flex-center flex" on:submit|preventDefault="{handleLogin}">
    <div class="col-6 form-widget">
      <h1 class="header">Supabase + SvelteKit</h1>
      <p class="description">Sign in via magic link with your email below</p>
      <div>
        <input class="inputField" type="email" placeholder="Your email" bind:value="{email}" />
      </div>
      <div>
        <input class="inputField" type="password" placeholder="Password" bind:value="{password}" />
      </div>
      <div>
        <input type="submit" class="button block" value={loading ? 'Loading' : 'Login'}
        disabled={loading} />
      </div>
    </div>
  </form>
  <div>
    <p>
      Don't have an account? <a href="/signup">Sign Up</a>
    </p>
  </div>
</section>
