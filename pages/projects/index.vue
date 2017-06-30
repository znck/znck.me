<template>
  <div class="page-projects container py-2">
    <div class="card-columns">
      <ProjectCard v-for="project in projects"
        :key="project.name"
        v-bind="project"/>
    </div>
  </div>
</template>

<script>
import ProjectCard from '~components/ProjectCard.vue'
import projects from './projects.yml'

projects.sort((a, b) => a.name > b.name)

export default {
  name: 'ProjectsPage',

  computed: {
    projects: () => projects
  },

  components: { ProjectCard }
}
</script>
