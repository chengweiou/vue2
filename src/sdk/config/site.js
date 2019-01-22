const isDev = process.env.NODE_ENV !== 'production'

const prod = {
  xxx: 'http://127.0.0.1:8906',
}

const dev = {
  xxx: 'http://127.0.0.1:8906',
}

const host = { ...prod, ...(isDev ? dev : {}) }

const site = {
  xxx: host.xxx,
}

export default site
