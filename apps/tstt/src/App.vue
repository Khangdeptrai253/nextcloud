 <template>
	<NcContent app-name="tstt" :class="{ 'nav-hidden': !navShown, 'sidebar-hidden': !sidebarRouterView }">
		<AppNavigation />
		
		<NcAppContent>
			<router-view />
		</NcAppContent>

		<div v-if="$route.params.id || $route.params.cardId">
			<NcModal v-if="cardDetailsInModal && $route.params.cardId"
				:clear-view-delay="0"
				:close-button-contained="true"
				size="large"
				@close="hideModal()">
				<div class="modal__content modal__card">
					<router-view name="sidebar" />
				</div>
			</NcModal>

			<router-view name="sidebar" :visible="!cardDetailsInModal || !$route.params.cardId" />
		</div>
	</NcContent>
</template>

<script>
import AppNavigation from './components/navigation/AppNavigation.vue'
import { NcModal, NcContent, NcAppContent } from '@nextcloud/vue'
import { emit, subscribe } from '@nextcloud/event-bus'

export default {
	name: 'App',
	components: {
		AppNavigation,
		NcAppContent,
	},
}
</script>

<style lang="scss" scoped>


</style>
