/* eslint-disable @typescript-eslint/indent */
import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', {
    state: () => {
        return {
            theme: 'light',
            showformat: false,
            fullscreen: false,
            percentage: '100%',
        };
    },
    actions: {
        async changeSetting(payload: { key: string; value: any }) {
            const { key, value } = payload;
            switch (key) {
            case 'theme':
                this.theme = value;
                break;
            case 'showformat':
                this.showformat = value;
                break;
            case 'fullscreen':
                this.fullscreen = value;
                break;
            case 'percentage':
                this.percentage = value;
                break;
            default:
                break;
            }
        },
    },
});
