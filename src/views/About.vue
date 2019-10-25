<script>
import Layout from '@/layouts/default.vue'
export default {
  components: { Layout },
}
</script>

<template>
  <Layout title="About Me" class="mx-auto py-6 px-4 container">
    <article>
      <!-- Who am I? -> developer, IITian, Vue Core Team -->
      <p class="mb-6">
        I am an <abbr title="Indian Institute of Technology">IIT</abbr> graduate and <em>self-trained</em> software
        engineer. I am <strong>a member of Vue core team</strong>, focusing on compiler and toolings for Vue ecosystem.
      </p>

      <!-- What do I do? -> Started vue meetup, AwesomeConf, speak about Vue, Contribute to Vue, Learning web accessibility, Consultancy/Training for Vue -->
      <p class="mb-6">
        I run a <AppLink to="https://blr.vue.community" external>Vue meetup group</AppLink> in Bangalore, India and have
        been pushing for a unique conference, named
        <AppLink to="https://awesomeconf.design" external>AwesomeConf</AppLink>. I speak at conferences; in past, I have
        spoken about Vue and it's compiler.
      </p>

      <p class="mb-6">
        Recently, I have been exploring web accessibility and building applications for universal access.
      </p>

      <p class="mb-6">
        I provide <strong>consulting and training services</strong> for Vue, accessibility and web performance in
        general. Please
        <AppLink
          to="mailto:Rahul%20Kadyan<rahulkdn+cs@gmail.com>?subject=Query%20about%20consulting%20services"
          external
          >email me</AppLink
        >
        if you would like to work with me!
      </p>

      <!-- Where did I work? -> Myntra, Headout, EasyEcom, Scalex, Breve Labs, INCF -->
      <section>
        <h2 class="text-xl text-bold">Work History</h2>

        <ul class="list-disc list-outside pl-8">
          <li class="mt-4">
            Senior Software Engineer (frontend) and Design System Lead at Myntra Designs, April 2018 - October 2019
          </li>
          <li class="mt-4">Software Engineer (backend) at Myntra Designs, June 2017 - March 2018</li>
          <li class="mt-4">Software Engineer (wep performance) at Headout, May 2017 - May 2017</li>
          <li class="mt-4">Co-founded and development at Scalex, January 2016 - April 2017</li>
          <li class="mt-4">Co-founded and development at Breve Labs, February 2015 - December 2015</li>
          <li class="mt-4">Google Summer of Code fellowship at INCF, May 2014 - August 2014</li>
        </ul>

        <p class="mt-6">
          Checkout <AppLink to="https://www.linkedin.com/in/rahulkadyan" external>my LinkedIn profile</AppLink> for
          detailed work history.
        </p>
      </section>
    </article>
  </Layout>
</template>
