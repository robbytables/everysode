<script>
  export let form;
  export let values;
  export let message;
</script>

<section>
  <div>
    <h1>Register</h1>
    {#if message}
      <div>{message}</div>
    {/if}
    <form method="post">
      <div>
        <label for="email">Email</label>
        <p>
          <input
            id="email"
            name="email"
            value={values?.email ??''}
            type="email"
            placeholder="Email"
            required
          />
        </p>
      </div>
      <div>
        <label for="password">Password</label>
        <p>
          <input
            id="password"
            name="password"
            value={values?.password ?? ''}
            type="password"
            placeholder="Password"
            required
          />
        </p>
      </div>
      <div>
        <p>
          <button>Sign Up</button>
        </p>
      </div>
    </form>

    <div>
      <p>
        Already have an account? <a href="/">Sign In</a>
      </p>
    </div>
  </div>
</section>
