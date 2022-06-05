<script setup>
import { getRoutes } from "@/routes";

const routes = getRoutes(["title", "path", "icon", "editableProps"]);
</script>

<template>
  <div class="pane pane-sm sidebar">
    <nav class="nav-group">
      <h5 class="nav-group-title">Folders</h5>
      <span v-for="route in routes" :key="route.title">
        <span 
				class="nav-group-item"
				:class="{active: route.path == $route.path}"
				@click="$router.push(route.path)">
          <span :class="`icon icon-${route.icon}`"></span>
					{{ route.title }}
					<div style="display: inline-block" v-if="router?.editableProps">
						<span :class="`icon icon-${router.editableProps.icon}`"></span>
					</div>
        </span>
      </span>
		</nav>
		<nav class="nav-group">
      <h5 class="nav-group-title">Tags</h5>
		</nav>
      <!-- <span class="nav-group-item active">
        <span class="icon icon-light-up"></span>
        Tags
      </span>
      <span class="nav-group-item">
        <span class="icon icon-download"></span>
        Downloads
      </span>
      <span class="nav-group-item">
        <span class="icon icon-folder"></span>
        Documents
      </span>
      <span class="nav-group-item">
        <span class="icon icon-window"></span>
        Applications
      </span>
      <span class="nav-group-item">
        <span class="icon icon-signal"></span>
        AirDrop
      </span>
      <span class="nav-group-item">
        <span class="icon icon-monitor"></span>
        Desktop
      </span> -->
  </div>
</template>
