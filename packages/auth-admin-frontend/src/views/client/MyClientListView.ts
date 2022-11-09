import { Component, MySelect, MyTableView, MyTagsPanel, TableViewProtocol, ViewController } from '@fangcha/vue'
import { MyAxios } from '@fangcha/vue/basic'
import { CommonAPI } from '@fangcha/app-request'
import { ClientInfoDialog } from './ClientInfoDialog'
import { RouteHelper } from '../../extensions/RouteHelper'
import { SsoClientApis } from '@fangcha/sso-server/lib/common/admin-api'
import { SsoClientModel, SsoClientParams } from '@fangcha/sso-server/lib/common/models'

@Component({
  components: {
    'my-table-view': MyTableView,
    'my-select': MySelect,
    'my-tags-panel': MyTagsPanel,
  },
  template: `
    <div>
      <h2>我的客户端</h2>
      <el-form :inline="true" size="mini" @submit.prevent.native="onFilterUpdate">
        <el-form-item>
          <el-input v-model="filterParams.keywords" clearable placeholder="Keywords" style="width: 330px">
            <template slot="append">
              <el-button size="mini" @click="onFilterUpdate">Search</el-button>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <my-table-view ref="tableView" :delegate="delegate">
        <el-table-column prop="name" label="名称">
          <template slot-scope="scope">
            <router-link :to="RouteHelper.to_ClientDetailView(scope.row)">
              <span>clientId: {{ scope.row.clientId }}</span>
              <br />
              <span>应用名: {{ scope.row.name }}</span>
              <el-tooltip v-if="scope.row.autoGranted" class="item" effect="dark" content="无需用户点击，自动获得授权 (针对可信应用)" placement="bottom">
                <el-tag size="mini" type="success">
                  特权应用
                  <span class="el-icon-question" />
                </el-tag>
              </el-tooltip>
              <el-tooltip v-if="scope.row.isPartner" class="item" effect="dark" content="合作商可以创建公司" placement="bottom">
                <el-tag size="mini" type="danger">
                  合作商
                  <span class="el-icon-question" />
                </el-tag>
              </el-tooltip>
            </router-link>
          </template>
        </el-table-column>
        <el-table-column label="scopes">
          <template slot-scope="scope">
            <my-tags-panel :values="scope.row.scopeList" />
          </template>
        </el-table-column>
        <el-table-column label="redirectUris" min-width="200%">
          <template slot-scope="scope">
            <my-tags-panel :values="scope.row.redirectUriList" />
          </template>
        </el-table-column>
        <el-table-column label="管理员">
          <template slot-scope="scope">
            <my-tags-panel :values="scope.row.powerUsers" />
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <a href="javascript:" @click="onEditItem(scope.row)">编辑</a>
          </template>
        </el-table-column>
      </my-table-view>
    </div>
  `,
})
export default class MyClientListView extends ViewController {
  RouteHelper = RouteHelper
  filterParams: any = this.initFilterParams(true)

  initFilterParams(useQuery = false) {
    const query = useQuery ? this.$route.query : {}
    return {
      keywords: query['keywords'] || '',
    }
  }

  async viewDidLoad() {
    this.tableView().resetFilter(true)
  }

  onFilterUpdate() {
    this.tableView().onFilterUpdate()
  }

  resetFilter(useQuery = false) {
    this.filterParams = this.initFilterParams(useQuery)
    this.tableView().reloadData()
  }

  tableView() {
    return this.$refs.tableView as MyTableView
  }
  get delegate(): TableViewProtocol {
    return {
      defaultSettings: {
        sortDirection: 'descending',
      },
      loadData: async (retainParams) => {
        const params: any = {
          ...retainParams,
          ...this.filterParams,
        }
        const request = MyAxios(new CommonAPI(SsoClientApis.MyClientPageDataGet))
        request.setQueryParams(params)
        return request.quickSend()
      },
      reactiveQueryParams: (retainQueryParams) => {
        return Object.assign({}, retainQueryParams, this.filterParams)
      },
    }
  }

  onEditItem(item: SsoClientModel) {
    const dialog = ClientInfoDialog.dialogForEdit(item)
    dialog.show(async (params: SsoClientParams) => {
      const request = MyAxios(new CommonAPI(SsoClientApis.ClientInfoUpdate, item.clientId))
      request.setBodyData(params)
      await request.quickSend()
      this.$message.success('更新成功')
      this.tableView().reloadData()
    })
  }
}
