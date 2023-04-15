import type { SvelteComponent, ComponentProps } from 'svelte';
import { writable } from 'svelte/store';
import type { Modal } from 'yesvelte';

export type ModalParams = {
	open: boolean;
	component?: new (...args: any) => SvelteComponent;
	props?: any;
	config?: ComponentProps<Modal>;
	close: () => void;
	resolve: (data: any, shouldClose?: boolean) => void;
	reject: (reason: any) => void;
};

function createModalStore() {
	let { subscribe, set, update } = writable<ModalParams>();

	function open<Component extends SvelteComponent, Props extends ComponentProps<Component> | {}>(
		component: new (...args: any) => Component,
		props: Props,
		modalProps?: ComponentProps<Modal>
	): Promise<any> {
		console.log('open');
		return new Promise((resolve, reject) => {
			function close() {
				update((modal) => ({
					...modal,
					open: false
				}));
			}

			setTimeout(() => {
				console.log('subscribe');
				let un = subscribe((val) => {
					if (val.open === false) {
						setTimeout(() => {
							console.log('unsubscribe');
							if (val.open === false) {
								resolve(undefined);
							}
							un();
						});
					}
				});
			});

			set({
				open: true,
				component,
				props,
				config: modalProps,
				resolve: (payload: any, shouldClose: boolean = true) => {
					if (shouldClose) {
						close();
					}
					resolve(payload);
				},
				reject: (reason: any) => {
					close();
					reject(reason);
				},
				close() {
					close();
					resolve(false);
				}
			});
		});
	}

	function create<
		Component extends SvelteComponent,
		Props extends ComponentProps<Component>,
		DefaultProps extends ComponentProps<Component>
	>(component: new (...args: any) => Component, defaultProps: DefaultProps) {
		return {
			open: (props?: Props, config?: ComponentProps<Modal>) =>
				open(component, { ...defaultProps, ...props }, config)
		};
	}

	return {
		subscribe,
		set,
		open,
		create
	};
}
export const modal = createModalStore();
