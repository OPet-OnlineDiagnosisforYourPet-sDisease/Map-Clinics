const data = require('./data.json');

function getKlinik(req, res) {
    try {
        // Jika berhasil, kirim respons dengan status code 200 dan pesan success
        res.status(200).json({ success: true, message: 'Data klinik berhasil diperoleh.', data: data.klinik });
    } catch (error) {
        // Jika terjadi kesalahan, kirim respons dengan status code 500 dan pesan error
        res.status(500).json({ success: false, error: 'Terjadi kesalahan dalam mendapatkan data klinik.' });
    }
}

module.exports = {
    getKlinik
};