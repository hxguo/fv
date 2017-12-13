import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/components/default/Default'
import CardCenter from '@/components/cards/Center'
import CardDetails from '@/components/cards/Details'
import CardApply from '@/components/cards/Apply'
import Cooperation from '@/components/extension/Cooperation'
import Records from '@/components/records/Records'
import Extension from '@/components/extension/Extension'
import SpeedProgress from '@/components/cards/SpeedProgress'
import BankList from '@/components/cards/BankList'
import Mine from '@/components/my/Mine'
import MineInfo from '@/components/my/MineInfo'
import Revenue from '@/components/my/Revenue'
import Withdrawals from '@/components/my/Withdrawals'
import MineReferee from '@/components/my/MineReferee'
import MineCards from '@/components/my/MineCards'
import CardInfo from '@/components/my/CardInfo'
import MineExtension from '@/components/my/MineExtension'
import AboutUs from '@/components/my/AboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      component: Default
    },
    {
      path: '/cards/center',
      name: 'CardCenter',
      component: CardCenter
    },
    {
      path: '/cards/details',
      name: 'CardDetails',
      component: CardDetails
    },
    {
      path: '/cards/apply',
      name: 'CardApply',
      component: CardApply
    },
    {
      path: '/extension/cooperation',
      name: 'Cooperation',
      component: Cooperation
    },
    {
      path: '/records/records',
      name: 'Records',
      component: Records
    },
    {
      path: '/extension/extension',
      name: 'Extension',
      component: Extension
    },
    {
      path: '/cards/bankList',
      name: 'BankList',
      component: BankList
    },
    {
      path: '/cards/speedprogress',
      name: 'SpeedProgress',
      component: SpeedProgress
    },
    {
      path: '/my/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/my/mineinfo',
      name: 'MineInfo',
      component: MineInfo
    },
    {
      path: '/my/revenue',
      name: 'Revenue',
      component: Revenue
    },
    {
      path: '/my/withdrawals',
      name: 'Withdrawals',
      component: Withdrawals
    },
    {
      path: '/my/minereferee',
      name: 'MineReferee',
      component: MineReferee
    },
    {
      path: '/my/minecards',
      name: 'MineCards',
      component: MineCards
    },
    {
      path: '/my/cardinfo',
      name: 'CardInfo',
      component: CardInfo
    },
    {
      path: '/my/mineextension',
      name: 'MineExtension',
      component: MineExtension
    },
    {
      path: '/my/aboutus',
      name: 'AboutUs',
      component: AboutUs
    }
  ]
})
