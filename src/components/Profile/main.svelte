<script lang="ts">
    import Icon from './Icon.svelte';
    import ProfileLinks from './ProfileLinks.svelte';
</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<div
    class="container p-6 mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    <div class="">
        <Icon />
        <h2 class="object-center">hnkz</h2>
        <ProfileLinks />
    </div>
    <p>test</p>
</div>
