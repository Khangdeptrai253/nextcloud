import { showError as errorDialog } from '@nextcloud/dialogs'

const showAxiosError = err => {
	const response = err?.response || {}
	const message = response?.data.message

	if (message) {
		errorDialog(message)
		return
	}

	errorDialog(err.message)
}

const showError = err => {
	if (err.response) {
		showAxiosError(err)
		return
	}

	errorDialog(err.message)
}

export {
	showError,
}
