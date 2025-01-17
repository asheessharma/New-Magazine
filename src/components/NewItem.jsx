

export default function NewItem({title,description,src,url}) {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
            <img src={src} style={{height:"200px",maxWidth:"320px"}} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,50)}</h5>
                <p className="card-text">{description ? description.slice(0,90) : "This is custom description for this new article. As the fetched article mightn not be having the description we needed."}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}
