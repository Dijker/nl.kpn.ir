'use strict';
/* eslint-disable */
module.exports = {
	devices: {
		kpn_settopbox: {
			name: 'kpn_settopbox',
			class: 'tv',
			icon: '../ir_generator/assets/remote.svg',
			images: {
				small: '../ir_generator/assets/images/small.jpg',
				large: '../ir_generator/assets/images/large.jpg'
			},
			capabilities: ['onoff',
				'volume_mute',
				'volume_up',
				'volume_down',
				'channel_up',
				'channel_down'
			],
			capabilityToCommandMap: {
				onoff: 'POWER_TOGGLE',
				volume_mute: 'MUTE_TOGGLE',
				volume_up: 'VOLUME_UP',
				volume_down: 'VOLUME_DOWN',
				channel_up: 'CHANNEL_UP',
				channel_down: 'CHANNEL_DOWN'
			},
			signal: 'kpn_settopbox',
			actions: [{
				id: 'kpn_settopbox:send_cmd',
				title: 'ir_generator.flow.send_cmd',
				args: [{
					name: 'cmd',
					type: 'autocomplete'
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=kpn_settopbox'
				}]
			}, {
				id: 'kpn_settopbox:send_cmd_number',
				title: 'ir_generator.flow.send_cmd_number',
				args: [{
					name: 'number',
					type: 'number',
					min: '0',
					max: '9999'
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=kpn_settopbox'
				}]
			}],
			pair: {
				viewOrder: ['generic_check_device', 'generic_done'],
				views: [{
					template: './lib/pair/check_device.html',
					options: {
						title: 'views.generic_done.title',
						device_exists_message: 'views.generic_check_device.device_exists_message',
						prepend: '',
						append: ''
					},
					prepend: [],
					append: [],
					id: 'generic_check_device'
				}, {
					template: './lib/pair/done.html',
					options: {
						title: 'views.generic_done.title',
						prepend: '',
						append: ''
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			id: 'kpn_settopbox',
			driver: './lib/ir/driver',
			signalDefinition: {
				id: 'kpn_settopbox',
				type: 'prontohex',
				repetitions: 1,
				options: {
					emulateToggleBits: true,
					cmdNumberPrefix: 'DIGIT_',
					minTxInterval: 250
				},
				cmds: ['POWER_TOGGLE',
					'POWER_TOGGLE_1_',
					'CHANNEL_UP',
					'CHANNEL_UP_1_',
					'CHANNEL_DOWN',
					'CHANNEL_DOWN_1_',
					'VOLUME_UP',
					'VOLUME_UP_1_',
					'VOLUME_DOWN',
					'VOLUME_DOWN_1_',
					'MUTE_TOGGLE',
					'MUTE_TOGGLE_1_',
					'GUIDE',
					'GUIDE_1_',
					'DIGIT_0',
					'DIGIT_0_1_',
					'DIGIT_1',
					'DIGIT_1_1_',
					'DIGIT_2',
					'DIGIT_2_1_',
					'DIGIT_3',
					'DIGIT_3_1_',
					'DIGIT_4',
					'DIGIT_4_1_',
					'DIGIT_5',
					'DIGIT_5_1_',
					'DIGIT_6',
					'DIGIT_6_1_',
					'DIGIT_7',
					'DIGIT_7_1_',
					'DIGIT_8',
					'DIGIT_8_1_',
					'DIGIT_9',
					'DIGIT_9_1_',
					'PREVIOUS_CHANNEL',
					'PREVIOUS_CHANNEL_1_',
					'BACK',
					'BACK_1_',
					'RECORD',
					'RECORD_1_',
					'REVERSE',
					'REVERSE_1_',
					'PLAY',
					'PLAY_1_',
					'PAUSE',
					'PAUSE_1_',
					'FORWARD',
					'FORWARD_1_',
					'SKIP',
					'SKIP_1_',
					'STOP',
					'STOP_1_',
					'REPLAY',
					'REPLAY_1_',
					'CURSOR_UP',
					'CURSOR_UP_1_',
					'CURSOR_DOWN',
					'CURSOR_DOWN_1_',
					'CURSOR_LEFT',
					'CURSOR_LEFT_1_',
					'CURSOR_RIGHT',
					'CURSOR_RIGHT_1_',
					'CURSOR_ENTER',
					'CURSOR_ENTER_1_',
					'ENTER',
					'ENTER_1_',
					'EXIT',
					'EXIT_1_',
					'VIDEO_ON_DEMAND',
					'VIDEO_ON_DEMAND_1_',
					'GO_INTERACTIVE',
					'GO_INTERACTIVE_1_',
					'INFO',
					'INFO_1_',
					'PAGE_UP',
					'PAGE_UP_1_',
					'PAGE_DOWN',
					'PAGE_DOWN_1_',
					'MENU_DVR',
					'MENU_DVR_1_',
					'MENU_MAIN',
					'MENU_MAIN_1_',
					'TV/VIDEO',
					'TV/VIDEO_1_',
					'FUNCTION_A',
					'FUNCTION_A_1_',
					'FUNCTION_B',
					'FUNCTION_B_1_',
					'FUNCTION_C',
					'FUNCTION_C_1_'
				],
				parseCmd: undefined
			}
		}
	}
};
