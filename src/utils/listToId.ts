export function listToId(list: any) {
  const ans: number[] = []
  function dfs(list: any) {
    for (const item of list) {
      ans.push(item.id)
      if (item.children) {
        dfs(item.children)
      }
    }
  }
  dfs(list)
  return ans
}
