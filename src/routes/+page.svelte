<script>
	export let data;
</script>

<h1 class="text-3xl p-3">
	Hello, {data.user?.username || 'Stranger'}!
</h1>
