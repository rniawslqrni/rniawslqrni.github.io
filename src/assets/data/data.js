export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Akhi',
            child: 'Putra pertama',
            father: 'Fulan',
            mother: 'Fulanah',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Ukhti',
            child: 'Putri kedua',
            father: 'Fulan',
            mother: 'Fulanah',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png',
        couple2: './src/assets/images/couple2.png'
    },

    time: {
        marriage: {
            year: '2024',
            month: 'November',
            date: '14',
            day: 'Kamis',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2024',
            month: 'November',
            date: '14',
            day: 'Kamis',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Kp. Ciloa Ds. Cilame'
    },

    link: {
        calendar: 'https://calendar.app.google/TiaoTDJBUEwZM8rL9',
        map: 'https://maps.app.goo.gl/',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Akhi',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Ukhti',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbzxsJ_Fkpuv8mnysSNm5o2S0jdZGGyjCPZTsWapY7dexGRJ1Kcg2h7SFt980sfhq8RK1A/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
