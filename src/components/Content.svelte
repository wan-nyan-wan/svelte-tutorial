<script lang="ts">
    // props
    export let name: string;

    const toggleName = () => {
        if (name == 'world') {
            name = 'svelte';
        } else {
            name = 'world';
        }
    };
</script>

<main>
    <h1>Hello {name}!</h1>
    <button on:click={toggleName}>Toggle name</button>
</main>
