import LandingPage from './views/LandingPage.vue';
import Artikel from './views/Artikel.vue';
import Blog from './views/Blog.vue';
import DetailArtikel from './views/DetailArtikel.vue';
import Gallery from './views/Gallery.vue';

// Admin
import Dashboard from './views/admin/Dashboard.vue';
import DataJamaah from './views/admin/DataJamaah.vue';
import MetodePembayaran from './views/admin/MetodePembayaran.vue';
import RiwayatTransaksi from './views/admin/RiwayatTransaksi.vue';
import Transaksi from './views/admin/Transaksi.vue';
import TransferRupiah from './views/admin/TransferRupiah.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    layout: 'homeLayout',
    component: LandingPage,
  },
  {
    path: '/blog',
    name: 'Blog',
    layout: 'homeLayout',
    component: Blog,
  },
  {
    path: '/artikel',
    name: 'Artikel',
    layout: 'homeLayout',
    component: Artikel,
  },
  {
    path: '/detail-artikel',
    name: 'DetailArtikel',
    layout: 'homeLayout',
    component: DetailArtikel,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    layout: 'homeLayout',
    component: Gallery,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    layout: 'adminLayout',
    component: Dashboard,
  },
  {
    path: '/data-jamaah',
    name: 'DataJamaah',
    layout: 'adminLayout',
    component: DataJamaah,
  },
  {
    path: '/metode-pembayaran',
    name: 'MetodePembayaran',
    layout: 'adminLayout',
    component: MetodePembayaran,
  },
  {
    path: '/riwayat-transaksi',
    name: 'RiwayatTransaksi',
    layout: 'adminLayout',
    component: RiwayatTransaksi,
  },
  {
    path: '/transaksi',
    name: 'Transaksi',
    layout: 'adminLayout',
    component: Transaksi,
  },
  {
    path: '/transfer-rupiah',
    name: 'TransferRupiah',
    layout: 'adminLayout',
    component: TransferRupiah,
  },
];

export default routes;
