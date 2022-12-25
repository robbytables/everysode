<script>
  import { page } from '$app/stores'
  import Account from './Account.svelte'
  import Auth from './Auth.svelte'
</script>

<svelte:head>
  <title>Everysode</title>
  <meta name="description" content="Everysode App" />
</svelte:head>

{#if !$page.data.session}
<Auth />
{:else}
<Account session="{$page.data.session}" />
{/if}
