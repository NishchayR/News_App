import React from 'react'

export default function NewsItem(props){


    return (
      <div >
        <div className={`card my-4 text-bg-${props.mode}`} >
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: 15, zIndex: '1'}}>{props.source}</span>
          <img src={props.imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <p className="card-text"><small className="text-body-secondary">By {!props.author?"Unknown":props.author} on {new Date(props.date).toGMTString()}</small></p>
            <a rel="noreferrer" href={props.newsurl} target="_blank" style={{borderRadius: "12px"}} className={`btn btn-sm  btn-${props.mode==='light'?'dark':'light'}`}>
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}
