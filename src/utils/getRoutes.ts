import router from '@/router'

export default function getRoutes(store: any) {
  if (!store.userInfo && !store.userMenus && !store.token) return
  const newroute = []
  for (let i = 0; i < store.userMenus.length; i++) {
    for (let j = 0; j < store.userMenus[i].children.length; j++) {
      const curObj: any = {}
      const url = store.userMenus[i].children[j].url
      const pathurl: string = '../views' + url + '.vue'
      curObj.path = url.split('main/')[1]
      curObj.component = () => import(`${pathurl}`)
      newroute.push(curObj)
    }
  }
  newroute.forEach((element) => {
    router.addRoute('main', element)
  })
}
