/**
 * !--------- FBI WARNING ----------!
 *
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

import type { RouterOptions } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/',
  redirect: '/components/DigitalFlop',
}, {
  title: '数字翻牌器',
  name: 'DigitalFlop',
  path: '/components/DigitalFlop',
  component: () => import('packages/DigitalFlop/docs/README.md'),
}, {
  title: '全屏容器',
  name: 'FullScreenContainer',
  path: '/components/FullScreenContainer',
  component: () => import('packages/FullScreenContainer/docs/README.md'),
}, {
  title: '装饰1',
  name: 'Decoration1',
  path: '/components/Decoration1',
  component: () => import('packages/Decoration1/docs/README.md'),
}, {
  title: '装饰2',
  name: 'Decoration2',
  path: '/components/Decoration2',
  component: () => import('packages/Decoration2/docs/README.md'),
}, {
  title: '装饰3',
  name: 'Decoration3',
  path: '/components/Decoration3',
  component: () => import('packages/Decoration3/docs/README.md'),
}, {
  title: '装饰4',
  name: 'Decoration4',
  path: '/components/Decoration4',
  component: () => import('packages/Decoration4/docs/README.md'),
}, {
  title: '装饰5',
  name: 'Decoration5',
  path: '/components/Decoration5',
  component: () => import('packages/Decoration5/docs/README.md'),
}, {
  title: '装饰6',
  name: 'Decoration6',
  path: '/components/Decoration6',
  component: () => import('packages/Decoration6/docs/README.md'),
}, {
  title: '装饰7',
  name: 'Decoration7',
  path: '/components/Decoration7',
  component: () => import('packages/Decoration7/docs/README.md'),
}, {
  title: '装饰8',
  name: 'Decoration8',
  path: '/components/Decoration8',
  component: () => import('packages/Decoration8/docs/README.md'),
}, {
  title: '装饰9',
  name: 'Decoration9',
  path: '/components/Decoration9',
  component: () => import('packages/Decoration9/docs/README.md'),
}, {
  title: '边框1',
  name: 'BorderBox1',
  path: '/components/BorderBox1',
  component: () => import('packages/BorderBox1/docs/README.md'),
}, {
  title: '边框2',
  name: 'BorderBox2',
  path: '/components/BorderBox2',
  component: () => import('packages/BorderBox2/docs/README.md'),
}, {
  title: '边框3',
  name: 'BorderBox3',
  path: '/components/BorderBox3',
  component: () => import('packages/BorderBox3/docs/README.md'),
}, {
  title: '边框4',
  name: 'BorderBox4',
  path: '/components/BorderBox4',
  component: () => import('packages/BorderBox4/docs/README.md'),
}, {
  title: '边框5',
  name: 'BorderBox5',
  path: '/components/BorderBox5',
  component: () => import('packages/BorderBox5/docs/README.md'),
}, {
  title: '边框6',
  name: 'BorderBox6',
  path: '/components/BorderBox6',
  component: () => import('packages/BorderBox6/docs/README.md'),
}, {
  title: '边框7',
  name: 'BorderBox7',
  path: '/components/BorderBox7',
  component: () => import('packages/BorderBox7/docs/README.md'),
}, {
  title: '边框8',
  name: 'BorderBox8',
  path: '/components/BorderBox8',
  component: () => import('packages/BorderBox8/docs/README.md'),
}]

const routerConfig = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path)
      return { top: 0 }
  },
}

const router = createRouter(routerConfig as RouterOptions)

export default router