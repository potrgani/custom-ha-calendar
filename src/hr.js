// Croatian (Croatia) [hr-hr]
import dayjs from 'dayjs';

const locale = {
  name: 'hr-hr',
  weekdays: 'Nedjelja_Ponedjeljak_Utorak_Srijeda_Četvrtak_Petak_Subota'.split('_'),
  weekdaysShort: 'Ned_Pon_Uto_Sri_Čet_Pet_Sub'.split('_'),
  weekdaysMin: 'Ne_Po_Ut_Sr_Če_Pe_Su'.split('_'),
  months: 'Siječanj_Veljača_Ožujak_Travanj_Svibanj_Lipanj_Srpanj_Kolovoz_Rujan_Listopad_Studeni_Prosinac'.split('_'),
  monthsShort: 'Sij_Velj_Ožu_Tra_Svi_Lip_Srp_Kol_Ruj_Lis_Stu_Pro'.split('_'),
  weekStart: 1,
  yearStart: 4,
  relativeTime: {
    future: 'za %s',
    past: 'prije %s',
    s: 'nekoliko sekundi',
    m: 'jednu minutu',
    mm: '%d minuta',
    h: 'jedan sat',
    hh: '%d sati',
    d: 'jedan dan',
    dd: '%d dana',
    M: 'jedan mjesec',
    MM: '%d mjeseci',
    y: 'jednu godinu',
    yy: '%d godina'
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY.',
    LL: 'D. MMMM YYYY.',
    LLL: 'D. MMMM YYYY. HH:mm',
    LLLL: 'dddd, D. MMMM YYYY. HH:mm'
  },
  ordinal: (n) => {
    const s = ['.', '.', '.', '.'];
    const v = n % 100;
    return `[${n}${s[(v - 20) % 10] || s[v] || s[0]}]`;
  }
};

dayjs.locale(locale, null, true);

export default locale;
