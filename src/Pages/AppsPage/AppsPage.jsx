import "./AppsPage.css"

export default function AppsPage({ data }) {
    return (
        <main className="AppsPage-main" id="Apps">
            <div className="content">
                <h1>{data.header}</h1>
                <div className="underline"></div>
            </div>
        </main>
    )
}