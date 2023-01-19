import Swal from 'sweetalert2';

export const swalWrapper = (icon, title) => {
  Swal.fire({
    // position: 'top-end',
    position: 'bottom-end',
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 1500,
    background: (icon == "success" ? "#002600" : "#29181a"),

  });
};

// export const swalWrapper = (action, title, text, btnText) => {
//     Swal.fire({
//       title: title ? title : `Are you sure you want to delete this item?`,
//       text: text ? text : `This action is permanent and there is no way to restore deleted item!`,
//       icon: 'info',
//       confirmButtonText: btnText ? btnText : 'Yes, I want to delete',
//       confirmButtonColor: '#2AB859',
//       showCancelButton: true,
//       cancelButtonText: 'No',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         action();
//       }
//     });
//   };
