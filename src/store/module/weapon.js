import service from '@/sdk/xxxService'
import clone from '@/fn/util/clone'

const CLEAN_STATE = {
  cache: false,
  map: {
    // todo action 只是为了要一个返回值，可以考虑通过dev调用公用service
    // dev改为列表
    init: { desc: '武器', nextNameList: ['find'], dev: { param: '攻击，血液, 火焰, 奥术，野兽，眷族' } },
    save: { desc: '添加保存', nextNameList: [''], dev: { url: 'POST /weapon/', param: { name: 'chikage', phy: 92 } }, action: 'weapon/save' },
    delete: { desc: '', nextNameList: [''], dev: { url: 'DELETE /weapon/{id}', param: {} }, action: '' },
    update: { desc: '', nextNameList: [''], dev: { url: 'PUT /weapon/{id}', param: { name: 'chikage2' } }, action: 'weapon/update' },
    findById: { desc: '', nextNameList: ['update'], dev: { url: 'GET /weapon/{id}', param: {} }, action: 'weapon/findById' },
    find: { desc: '查找列表，可以拿到id，直接调用删除功能。 其实这里写这么多，只是希望吧内容加长，看看效果', nextNameList: ['save', 'delete', 'findById'], dev: { url: 'GET /weapon', param: { k: '' } }, action: 'weapon/find' },
  },
  data: { id: '' },
}

const state = clone(CLEAN_STATE)

const actions = {
  async save({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.save(payload)
    state.data.id = rest.data
    return rest
  },
  async delete({ commit, dispatch, state, rootState }, payload, config = {}) {
    payload.id = state.data.id
    let rest = await service.delete(payload)
    return rest
  },
  async update({ commit, dispatch, state, rootState }, payload, config = {}) {
    payload.id = state.data.id
    let rest = await service.update(payload)
    return rest
  },
  async findById({ commit, dispatch, state, rootState }, payload, config = {}) {
    payload.id = state.data.id
    let rest = await service.findById({})
    return rest
  },
  async count({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.count({})
    return rest
  },
  async find({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.find({})
    state.data.id = rest.data[0].id
    return rest
  },
}

const mutations = {
}

export default {
  namespaced: true, state, actions, mutations,
}
