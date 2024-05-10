import Vue from 'vue'
import { translate, translatePlural } from '@nextcloud/l10n'

import TabContent from './components/SidebarComponent/TabContent.vue'
import iconBook from './img/book-account.svg'

window.addEventListener('DOMContentLoaded', () => {
	if (OCA.Files && OCA.Files.Sidebar) {
		Vue.prototype.t = translate
		Vue.prototype.n = translatePlural

		const View = Vue.extend(TabContent)
		let TabInstance = null

		const tab = new OCA.Files.Sidebar.Tab({
			id: 'tstt',
			name: t('tstt', 'Tstt'),
			iconSvg: iconBook,

			async mount(el, fileInfo, context) {
				if (TabInstance) {
					TabInstance.$destroy()
				}
				TabInstance = new View({
					parent: context,
					data() {
						return {
							fileInfo_: fileInfo,
						}
					},
				})
				await TabInstance.updateFileInfo(fileInfo)
				TabInstance.$mount(el)
			},
			async update(fileInfo) {
				await TabInstance.updateFileInfo(fileInfo)
			},
			destroy() {
				TabInstance.$destroy()
				TabInstance = null
			},
		})
		OCA.Files.Sidebar.registerTab(tab)
	}
})
