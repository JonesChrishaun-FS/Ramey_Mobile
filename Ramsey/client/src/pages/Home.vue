<script setup>
import BlogPost from "@/components/BlogPost.vue";
import WDRBMEDIA from "@/images/WDRBMEDIA.png";

const links = [
  {
    label: "WDRBMEDIA LISTEN LIVE 24/7 ",

    to: "https://ice24.securenetsystems.net/WDRB",
  },
];
</script>

<template>
  <UPage>
    <div class="flex flex-col p-8 sm:text-white">
      <h1>Ramsey's Mobile</h1>
      <h1>Affordable Services, LLC</h1>

      <p class="lg:pr-50 sm:pr-8">
        Our Mobile Auto Mechanic company provide minor auto repair services,
        i.e., tune-ups, windshield wiper replacement, door locks; etc., and Car
        projects, i.e., basic/project engine replacements, transmission
        repair/replacements and a wide range of other repairs/replacements. Our
        Mechanic has over 30+ years of auto mechanic experience. We also provide
        Mobile and Onsite Notary services. We buy and sell Used American &amp;
        Import Performance parts by means of mobile, online, Flea Markets and
        Auto Swap Meets.
      </p>
    </div>
    <BlogPost />
    <div class="p-15">
      <h1
        class="text-2xl sm:text-3xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted"
      >
        OUR VISION IS TO PROVIDE EMPOWERMENT, ENCOURAGEMENT AND QUALITY SERVICE
      </h1>
      <br />
      <h1
        class="text-2xl sm:text-3xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted"
      >
        OUR MISSION IS TO GIVE “ WEARY SOLES” RELIEF
      </h1>
    </div>
    <USeparator color="secondary" size="xl" />
    <UPageSection
      title="The Voice of the Community"
      description="Radio Show: Weary Soles
Every Sunday/ 8:00a.m. ||  www.wdrbmedia.com"
      orientation="horizontal"
      :links="links"
      class="sm:max-h-40 lg:max-h-full"
      ><img
        :src="WDRBMEDIA"
        class="sm:invisible lg:visible"
        alt="Radio Show named WDRB Media"
      />
    </UPageSection>
  </UPage>
</template>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 4.063rem;
}
p {
  font-size: 1.125rem;
}
</style>
