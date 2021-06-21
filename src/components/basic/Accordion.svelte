<script>

    let open = false;

    export function toggle() {
        open = !open;
    }

</script>

<style>
    .body {
        height: 0;
        overflow: auto;
        transition: height 0.3s ease-in-out;
    }
    .open {
        height: 50%;
    }
</style>

<div class:rounded={!open} class="rounded-t">
    <slot name="header"></slot>
</div>
<section class:open={open} class="body">
    <slot name="body"></slot>
</section>
<section class:body={!open}>
    <slot name="footer"></slot>
</section>