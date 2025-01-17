import Swal from 'sweetalert2'

const swalWithCustomClass = Swal.mixin({
  background: ' linear-gradient(90deg, #74ebd5 0%, #9face6 100%)',
  color: '#fff',
  customClass: {
    confirmButton: 'custom-confirm-button'
  },
  buttonsStyling: false
})

export default swalWithCustomClass
