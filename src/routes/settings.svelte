<script>
	import SettingsSection from "../components/molecules/SettingsSection.svelte"
	import Alert from "../components/Alert.svelte";

</script>

<div class="flex flex-col space-y-2 m-2">
	<div class="text-center">
    	<h1>Einstellungen</h1>
	</div>
	<SettingsSection title="Account">
		<button class="focus:outline-none">Nutzertoken anzeigen</button>
		<div class="italic text-gray-400">Token</div>
		<div class="h-0.5 mt-1 mb-2 border-blue-200 border-b"></div>	
	</SettingsSection>
	<SettingsSection title="Anzeige">
		<input type="checkbox" id="light-dark" name="fav_language" value="hell">
		<label for="light-dark">Dunkelmodus</label>
		<div class="h-0.5 mt-1 mb-2 border-blue-200 border-b"></div>	
	</SettingsSection>
</div>
