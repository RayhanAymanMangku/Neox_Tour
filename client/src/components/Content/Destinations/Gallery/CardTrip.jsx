const CardComponents = ({ foto_url, nama, lokasi, deskripsi, kategori, harga_tiket, fasilitas }) => {


    return (
        <div className="max-w-full rounded overflow-hidden shadow-sm m-4">
            <img className="w-full" src={foto_url[0]} alt={nama} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{nama}</div>
                <p className="text-gray-700 text-base">{lokasi}</p>
                <p className="text-gray-700 text-base">{deskripsi}</p>
                <p className="text-gray-700 text-base">{kategori}</p>
                <div className="mt-2">
                    <strong>Harga Tiket:</strong>
                    <p>Dewasa: Rp {harga_tiket.dewasa}</p>
                    <p>Anak: Rp {harga_tiket.anak}</p>
                </div>
                <div className="mt-2">
                    <strong>Fasilitas:</strong>
                    <ul className="list-disc list-inside">
                        {fasilitas.map((fasilitasItem, index) => (
                            <li key={index}>{fasilitasItem}</li>
                        ))}
                    </ul>
                </div>
                <button className="px-4 py-2 bg-[#0ea5e9] hover:text-[#0ea5e9] hover:bg-white transition-all duration-300 rounded-full text-white font-extralight mt-4 hover:shadow-md">
                    Check Now
                </button>
            </div>
        </div>
    )
}

export default CardComponents;