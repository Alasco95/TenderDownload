import React from "react";

const downloadFile = (url) => {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const blobURL = window.URL.createObjectURL(blob);
            const filename = url.split('/').pop();
            const aTag = document.createElement('a');
            aTag.href = blobURL;
            aTag.setAttribute('download', filename);
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        });
}
    
const MovieCard = ({movies}) => {
    return (
        <div className="movie">
            <div>
                <p>{movies.Year}</p>
            </div>
            <div>
                <img src={movies.Poster !== 'N/A' ? movies.Poster : "https://via.placeholder.com/400"} alt={movies.Title}/>
            </div>
            <div>
                <span>{movies.Type}</span> 
                <h3>{movies.Title}</h3>
                <button type="button" className="btn btn-light" onClick={() => {downloadFile(movies.Poster)}}>Download</button>
            </div>
        </div>
    );
}

export default MovieCard;
