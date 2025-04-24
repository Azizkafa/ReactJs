const LazyLoadedComponent = () => {
    return new Promise((resolve)/* ada proses asyncronus yang menunggu dibelakangnya */ => {
        setTimeout(() => {
            resolve(
                <div className="p-4 border rounded">
                    this component was lazy loading, simulating fetch data
                </div>
            )
        }, 2000) /* angka ini merupakan setTimeout dan berupaa detik */
    })
}

export default LazyLoadedComponent