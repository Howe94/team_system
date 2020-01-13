import Vue from 'vue'
import store from './store'
import {
  Radio,
  Button,
  Steps,
  Step,
  Form,
  FormItem,
  Input,
  Select,
  Checkbox,
  Row,
  Col,
  Option,
  RadioGroup,
  Table,
  TableColumn,
  Dialog,
  Tabs,
  TabPane,
  Upload,
  Popover,
  Breadcrumb,
  BreadcrumbItem,
  Pagination,
  Message,
  Loading,
  CheckboxGroup,
  Tag,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Cascader,
  Menu,
  MenuItem,
  Card
} from 'element-ui'
import '@/style/lib/theme-chalk/index.css'
import "../../assets/scss/reset.scss"
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Radio)
Vue.use(Button)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Input)
Vue.use(Select)
Vue.use(Form)
Vue.use(Checkbox)
Vue.use(FormItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Option)
Vue.use(RadioGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Upload);
Vue.use(Popover);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Pagination);
Vue.use(Loading);
Vue.use(CheckboxGroup);
Vue.use(Tag);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Cascader);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Card);
Vue.prototype.$message = Message;
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')