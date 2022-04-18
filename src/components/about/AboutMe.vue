<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Currently in a work-study contract as a web developer at Parker&Parker for a Master 2 at the ECV Bordeaux. Previously web integrator and designer at Rhaegal.',
				},
				{
					id: 2,
					bio:
						'I am a hands-on person, versatile and curious about understanding web project design and processes. My licenses in application design and development as well as project management have allowed me to understand the importance of working upstream of development.',
				},
				{
					id: 3,
					bio:
						'My skills also extend to creation and design after completing studies in graphic arts at ESMI Bordeaux.',
				}
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
			<div class="flex justify-center sm:block">
				<a
					download="Estelle-Resume.pdf"
					href="/files/CV-Estelle-2022.pdf"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
				>
					<i
						data-feather="arrow-down-circle"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Download CV</span
					></a
				>
			</div>
		</div>
	</div>
</template>
