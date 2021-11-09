export default function (context) {
  context.store.dispatch('initAuth', context.req)
  if (!context.store.getters.isAuthenticated) {
    console.log('[middleware] not logged in, redirecting')
    context.redirect('/admin/auth')
  }
}
