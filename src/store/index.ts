import { useSettingsStore } from './modules/settings';

function useStore() {
    return {
        settings: useSettingsStore(),
    };
}

export default useStore;
