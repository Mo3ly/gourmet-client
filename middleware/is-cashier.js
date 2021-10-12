export default function ({ $auth, redirect }) {
    if (!$auth.hasScope('is-cashier')) {
      return redirect('/')
    }
  }