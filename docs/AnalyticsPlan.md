# Analytics Plan

I deploy my application using Vercel, and they offer you the chance to import Analytics and Speed Insights for the overall user experience. It gives you information about your storage and even offers a Firewall.

Select your framework (VUE) to view instructions on using the Vercel Web Analytics in your project.

### Prerequisites

A Vercel account. If you don't have one, you can sign up for free.
A Vercel project. If you don't have one, you can create a new project.
The Vercel CLI installed. If you don't have it, you can install it using the following command:

```

npm i -g vercel

```

### Enable Web Analytics in Vercel

On the Vercel dashboard, select your Project and then click the Analytics tab and click Enable from the dialog.

### Add @vercel/analytics to your project

```

npm i @vercel/analytics

```

### Add the Analytics component to your app

```

<script setup>
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <Analytics />
  <!-- your content -->
</template>

```

These are the steps for importing [Speed Insights](https://vercel.com/docs/speed-insights/quickstart)
