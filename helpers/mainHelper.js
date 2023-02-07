import Swal from 'sweetalert2';

const isMobile = () => window.innerWidth <= 480;

export const swalWrapper = (icon, title) => {
  Swal.fire({
    position: isMobile() ? 'bottom' : 'bottom-end',
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 1500,
    background: icon == 'success' ? '#002600' : '#29181a',
  });
};
