<script setup lang="ts">
import { Divider, Dropdown, Menu, MenuItem } from 'ant-design-vue';
import type { MenuProps } from 'ant-design-vue';
import { BlockOutlined, CheckOutlined, ColumnHeightOutlined, GithubOutlined } from '@ant-design/icons-vue';
import { computed, ref } from 'vue';
import useStore from '../store';

const { settings } = useStore();

// 画布放大百分比
const proportion = ref(['500%', '400%', '300%', '200%', '150%', '120%', '100%', '80%', '50%', '20%']);

const percentage = computed(() => settings.percentage);

const togglePercentage: MenuProps['onClick'] = ({ key: value }) => {
    settings.changeSetting({ key: 'percentage', value });
};
</script>

<template>
    <footer>
        <div>主题：9</div>
        <Divider type="vertical" />
        <div class="icon">
            <BlockOutlined />
        </div>
        <Divider type="vertical" />
        <Dropdown :trigger="['click']">
            <div class="icon">
                <span>{{ percentage }}</span>
                <ColumnHeightOutlined />
            </div>
            <template #overlay>
                <Menu @click="togglePercentage">
                    <MenuItem v-for="item in proportion" :key="item">
                        <span class="icon-check">
                            <CheckOutlined v-show="item === percentage" :style="{ marginRight: '2px', fontSize: '12px' }" />
                        </span>
                        <a href="javascript:;">{{
                            item }}
                        </a>
                    </MenuItem>
                </Menu>
            </template>
        </Dropdown>
        <Divider type="vertical" />
        <a href="https://github.com/zekiyjw/xmind-pro" target="_blank">
            zekiyjw
            <GithubOutlined />
        </a>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 32px;
    padding: 0 12px;
    font-size: 12px;
    background-color: #f5f5f5;
}

.icon {
    padding: 2px 8px;
    border-radius: 4px;
    transition: .4s all;
    cursor: pointer;
}

.icon span {
    margin-right: 2px;
}

.active-icon {
    background-color: #e3e3e2;
}

.ant-dropdown-open {
    background-color: #e3e3e2;
}

.anticon {
    font-size: 14px;
}

.ant-dropdown-menu {
    background-color: #e1e1e2;
}

.icon-check {
    display: inline-block;
    width: 14px;
}

a{
    color: #27292a;
}
</style>
