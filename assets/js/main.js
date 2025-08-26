import loader from './components/loader.js';
import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import sendEmail from './components/send_form.js';
import dateUpdater from './helpers/date_updater.js';
import resetToHome from './helpers/reload_page.js';

loader();
resetToHome();
dateUpdater();
parallax();
activeMenu();
sendEmail();
