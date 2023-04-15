import ConfirmModal from './ConfirmModal.svelte';
import { modal } from './modal';

export { modal };
export { default as BaseModal } from './BaseModal.svelte';
export { default as ModalProvider } from './ModalProvider.svelte';
export { default as ConfirmModal } from './ConfirmModal.svelte';

export const confirmModal = modal.create(ConfirmModal, {});
